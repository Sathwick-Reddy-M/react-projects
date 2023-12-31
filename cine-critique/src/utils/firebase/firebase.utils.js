import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getDoc,
  doc,
  getFirestore,
  setDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3w81hoASko2rpT2D8SZotAOquCfe_ovM",
  authDomain: "movie-review-2b954.firebaseapp.com",
  projectId: "movie-review-2b954",
  storageBucket: "movie-review-2b954.appspot.com",
  messagingSenderId: "278431222781",
  appId: "1:278431222781:web:de8d02e91e782c28126794",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export async function signUpUser(username, email, password) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("User SignUp Successful");
      return userCredential;
    })
    .catch((error) => {
      console.log(error);
    });

  return await createUserDocFromAuth(user, username);
}

export async function signInUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function signOutUser() {
  await signOut(auth);
}

export function onAuthStateChangedListener(callback) {
  return onAuthStateChanged(auth, callback);
}

export async function createUserDocFromAuth(userAuth, userName) {
  if (!userAuth) return;

  const userRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      const userRes = await setDoc(userRef, {
        email,
        userName,
        createdAt,
        reviews: [],
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userRef;
}

export async function getReviewsForMovie(movieId) {
  const reviewsRef = doc(db, "reviews", movieId);
  const reviewsSnapshot = await getDoc(reviewsRef);

  if (reviewsSnapshot.exists()) {
    const reviews = reviewsSnapshot.data().reviews;
    return reviews;
  }

  return null;
}

export async function saveReview(movieId, movieTitle, review) {
  if (!auth.currentUser) return;

  const userRef = doc(db, "users", auth.currentUser.uid);
  const userSnapshot = await getDoc(userRef);
  const reviewRef = doc(db, "reviews", movieId);
  const reviewSnapshot = await getDoc(reviewRef);

  const username = userSnapshot.data().userName;
  const userId = auth.currentUser.uid;

  const updatedReview = {
    movieId,
    username,
    review,
    title: movieTitle,
    userId,
  };

  const reviews = reviewSnapshot.data()?.reviews || [];

  const userHasReviewIndex = reviews.findIndex((r) => r.userId === userId);
  const userReviews = userSnapshot.data().reviews;
  const userReviewIndex = userReviews.findIndex((r) => r.movieId === movieId);
  if (userHasReviewIndex !== -1) {
    reviews[userHasReviewIndex] = updatedReview;
    userReviews[userReviewIndex] = updatedReview;
  } else {
    reviews.push(updatedReview);
    userReviews.push(updatedReview);
  }

  const reviewResponse = await setDoc(reviewRef, {
    reviews,
  });

  const userResponse = await updateDoc(userRef, {
    reviews: userReviews,
  });

  return { reviewResponse, userResponse };
}

export async function getUserReviews(user) {
  if (!user) return;
  const userRef = doc(db, "users", user.uid);
  const userSnapshot = await getDoc(userRef);

  if (userSnapshot.exists()) {
    const reviews = userSnapshot.data().reviews;
    return reviews;
  }

  return null;
}
