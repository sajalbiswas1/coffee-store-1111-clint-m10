// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC99K68TSc-gAzivC4rO74OCkrcU4rRvQU",
  authDomain: "coffee-store-d74d3.firebaseapp.com",
  projectId: "coffee-store-d74d3",
  storageBucket: "coffee-store-d74d3.appspot.com",
  messagingSenderId: "89886324221",
  appId: "1:89886324221:web:cc5d715ddb036c6e5fd594"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;