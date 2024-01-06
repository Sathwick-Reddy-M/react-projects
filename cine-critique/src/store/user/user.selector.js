import { createSelector } from "reselect";

const selectUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (userSlice) => {
    return userSlice.currentUser;
  }
);

export const selectUserReviews = createSelector(
  [selectUserReducer],
  (userSlice) => {
    return userSlice.userReviews;
  }
);
