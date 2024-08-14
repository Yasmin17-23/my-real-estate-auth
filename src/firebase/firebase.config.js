// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBAU3dr8aFU4dt0zyP8UdCcKWEBs9HRyM",
  authDomain: "my-real-estate-auth.firebaseapp.com",
  projectId: "my-real-estate-auth",
  storageBucket: "my-real-estate-auth.appspot.com",
  messagingSenderId: "861223183639",
  appId: "1:861223183639:web:a142b30d0b957d01338352"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;