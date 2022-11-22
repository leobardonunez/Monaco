import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD6A_XeewHbZor1T9eDYu99lCRKN6V9M4A",
  authDomain: "monaco-af870.firebaseapp.com",
  projectId: "monaco-af870",
  storageBucket: "monaco-af870.appspot.com",
  messagingSenderId: "297101278770",
  appId: "1:297101278770:web:9841f19a24ca036dd1062b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//Connection
export const db = getFirestore(app)