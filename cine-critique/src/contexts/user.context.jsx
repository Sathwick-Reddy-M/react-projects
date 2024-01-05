import { createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangedListener,
  getUserReviews,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  userReviews: null,
  setUserReviews: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
  SET_USER_REVIEWS: "SET_USER_REVIEWS",
};

const INITIAL_STATE = {
  currentUser: null,
  userReviews: null,
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    case USER_ACTION_TYPES.SET_USER_REVIEWS:
      return { ...state, userReviews: payload };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [{ currentUser, userReviews }, dispatch] = useReducer(
    userReducer,
    INITIAL_STATE
  );

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

  const setUserReviews = (reviews) => {
    dispatch({ type: USER_ACTION_TYPES.SET_USER_REVIEWS, payload: reviews });
  };

  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChangedListener(async (user) => {
      if (user) {
        const reviews = await getUserReviews(user);
        setCurrentUser(user);
        setUserReviews(reviews);
      } else {
        setCurrentUser(null);
        setUserReviews(null);
      }
    });

    return unsubscribeFromAuth;
  }, []);

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, userReviews, setUserReviews }}
    >
      {children}
    </UserContext.Provider>
  );
};
