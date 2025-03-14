// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU0Jz8OPmYZgutWgjCb31qdeHVatRUmDg",
  authDomain: "netflixgpt-8e8cf.firebaseapp.com",
  projectId: "netflixgpt-8e8cf",
  storageBucket: "netflixgpt-8e8cf.firebasestorage.app",
  messagingSenderId: "1047723510690",
  appId: "1:1047723510690:web:cbaf4dfacbb5e7a78340fb",
  measurementId: "G-9M1GSQK881"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
