// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCKDFCwYbWlaGz7XueHWTlFw7D9sJUoKec",
  authDomain: "mera-rojgar-dfce5.firebaseapp.com",
  projectId: "mera-rojgar-dfce5",
  storageBucket: "mera-rojgar-dfce5.appspot.com",
  messagingSenderId: "551500720066",
  appId: "1:551500720066:web:144e54846ebbc26e6a185b",
  measurementId: "G-9W12S8X2S9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
