// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlY5pis4aupc7nPckZ2knOJnQAg9JmOgo",
  authDomain: "react-firebase-integrati-8d94b.firebaseapp.com",
  projectId: "react-firebase-integrati-8d94b",
  storageBucket: "react-firebase-integrati-8d94b.firebasestorage.app",
  messagingSenderId: "116516294779",
  appId: "1:116516294779:web:f525c5910f0e56b139d2de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);