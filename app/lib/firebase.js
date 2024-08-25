// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa5UNzJsrX4R8J7HCGKICUodFpRgZIbcI",
  authDomain: "flashcard-saas-a0367.firebaseapp.com",
  projectId: "flashcard-saas-a0367",
  storageBucket: "flashcard-saas-a0367.appspot.com",
  messagingSenderId: "616969681544",
  appId: "1:616969681544:web:d3d06313a842a4d3ae3d3d",
  measurementId: "G-YL3YK392HC"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };