// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAE-VhKKuYsEkOohU8rEtFGUzQ9nfscjE",
  authDomain: "startmate-5a86c.firebaseapp.com",
  projectId: "startmate-5a86c",
  storageBucket: "startmate-5a86c.appspot.com",
  messagingSenderId: "249695712861",
  appId: "1:249695712861:web:6dfda8cd1dc0dcf32dbfb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export var auth = getAuth(app)
export const googleProvider=new GoogleAuthProvider();

