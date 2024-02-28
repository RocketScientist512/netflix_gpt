// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0czszN9AHkjCFTuOaV4QGz9FjzOU0zWw",
  authDomain: "netflixgpt-1e5ca.firebaseapp.com",
  projectId: "netflixgpt-1e5ca",
  storageBucket: "netflixgpt-1e5ca.appspot.com",
  messagingSenderId: "596605960906",
  appId: "1:596605960906:web:4dc9286813cc9ef1aeea33",
  measurementId: "G-2ST4D0S1GS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();