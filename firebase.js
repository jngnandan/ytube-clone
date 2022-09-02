// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx6Olqa-ggZ3ZN9z_C3bvqfErgQIP1KJo",
  authDomain: "ytube-6dc9b.firebaseapp.com",
  projectId: "ytube-6dc9b",
  storageBucket: "ytube-6dc9b.appspot.com",
  messagingSenderId: "1058178743121",
  appId: "1:1058178743121:web:3e30da3a5224a5cb617170",
  measurementId: "G-9QPEJVLVHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export {provider, db, auth};