import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
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
    console.log(userCredential);
    navigate("/login");
    toastSuccessNotify("Registered is successfully!");
    await updateProfile(auth.currentUser, { displayName: userName });
  } catch (error) {
    toastErrorNotify(error.message);
    console.log(error);
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
    toastSuccessNotify("signIn is successfully!");
  } catch (error) {
    console.log(error.message);
  }
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      setCurrentUser(false);
      console.log("user signed out");
      // User is signed out
      // ...
    }
  });
};

export const logOut = (navigate) => {
  signOut(auth);
  navigate("/");
  toastSuccessNotify("Successfully logout done!");
};

export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      navigate("/");
      console.log(result);

      toastSuccessNotify("Sign in Successfully!");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const forgotPassword = (email, navigate) => {
  //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      navigate("/");
      toastWarnNotify("Please check your mail box!");
      // alert("Please check your mail box!");
    })
    .catch((err) => {
      toastErrorNotify(err.message);
      // alert(err.message);
      // ..
    });
};
