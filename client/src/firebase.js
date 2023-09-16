// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-auth-5b6a1.firebaseapp.com",
    projectId: "mern-auth-5b6a1",
    storageBucket: "mern-auth-5b6a1.appspot.com",
    messagingSenderId: "267477733715",
    appId: "1:267477733715:web:ca009d91a1cf79e9bb11a6"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);