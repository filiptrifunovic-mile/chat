// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPOHpkqfYbJ0r2n9rYGDoI793TdE6O6cc",
  authDomain: "chat-c3de7.firebaseapp.com",
  projectId: "chat-c3de7",
  storageBucket: "chat-c3de7.appspot.com",
  messagingSenderId: "471730788788",
  appId: "1:471730788788:web:90b4fe48b9c85af5effae1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
