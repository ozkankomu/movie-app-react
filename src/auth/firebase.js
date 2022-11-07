import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../helpers/ToastNotify";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBaKXfWax-8m8TQJVYyG4mx9Ig1ag460aw",
  authDomain: "movie-app-react-e8a2a.firebaseapp.com",
  projectId: "movie-app-react-e8a2a",
  storageBucket: "movie-app-react-e8a2a.appspot.com",
  messagingSenderId: "922941441264",
  appId: "1:922941441264:web:58e425eb50005a52f8ae35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (userName, email, password, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, { userName: userName });
    toastSuccessNotify("Registered is successfully!");
    navigate(-1);
  } catch (error) {
    toastErrorNotify(error.message);
    console.log(error);
  }
};

export const signIn = async (userName, email, password, navigate) => {
  //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    toastSuccessNotify("Logged in successfully!");
    // sessionStorage.setItem('user', JSON.stringify(userCredential.user));
  } catch (err) {
    toastErrorNotify(err.message);
    console.log(err);
  }
};

export const userObserver = (setCurrentUser) => {
  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      // User is signed out
      setCurrentUser(false);
    }
  });
};
