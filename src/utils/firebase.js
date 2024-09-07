// Import the functions you need from the SDKs you// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7EBu_RjKUKg82yCEqnfflAbFTA_tUo6k",
  authDomain: "netflixgpt-d077e.firebaseapp.com",
  projectId: "netflixgpt-d077e",
  storageBucket: "netflixgpt-d077e.appspot.com",
  messagingSenderId: "1061536170049",
  appId: "1:1061536170049:web:dc597d9565f51f86cb46c0",
  measurementId: "G-FSPKYD3TLN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
