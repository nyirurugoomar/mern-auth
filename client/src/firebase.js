// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-bb91c.firebaseapp.com",
  projectId: "mern-auth-bb91c",
  storageBucket: "mern-auth-bb91c.appspot.com",
  messagingSenderId: "225656149993",
  appId: "1:225656149993:web:bd6cddbd4a17e009a55d78",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
