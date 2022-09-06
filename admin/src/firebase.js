// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbFvFLvQYIqM2mqBqgvTr04wu6TqJvut8",
  authDomain: "appstore-4f82a.firebaseapp.com",
  projectId: "appstore-4f82a",
  storageBucket: "appstore-4f82a.appspot.com",
  messagingSenderId: "1061403148786",
  appId: "1:1061403148786:web:f8feb3b471e6a509aeab6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app