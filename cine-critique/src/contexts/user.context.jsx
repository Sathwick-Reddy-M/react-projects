import { createContext, useEffect, useState } from "react";
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

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userReviews, setUserReviews] = useState(null);

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
