// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAeca-t5q1CJcjHxwC699r50bqwFJT11I",
  authDomain: "netflixgpt-7da13.firebaseapp.com",
  projectId: "netflixgpt-7da13",
  storageBucket: "netflixgpt-7da13.appspot.com",
  messagingSenderId: "416899123902",
  appId: "1:416899123902:web:58fa1ff81b5f2ecd87acef",
  measurementId: "G-T7K1T6R0L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
