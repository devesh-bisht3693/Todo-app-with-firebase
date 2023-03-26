// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZhu4pve-vZTxt9Z2fU2k8aCQGWFK4gZw",
  authDomain: "todo-app-103a2.firebaseapp.com",
  projectId: "todo-app-103a2",
  storageBucket: "todo-app-103a2.appspot.com",
  messagingSenderId: "722089869266",
  appId: "1:722089869266:web:3a54ded4865fe91010520b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);