import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getDoc, doc, getFirestore, setDoc } from "firebase/firestore";

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
      await setDoc(userRef, {
        email,
        userName,
        createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userRef;
}
