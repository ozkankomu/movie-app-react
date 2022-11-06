import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
