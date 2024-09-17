// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGOy0mhZVytkjYghJXegkxmZ72buDbw60",
  authDomain: "food-app-fe38e.firebaseapp.com",
  projectId: "food-app-fe38e",
  storageBucket: "food-app-fe38e.appspot.com",
  messagingSenderId: "800918164381",
  appId: "1:800918164381:web:767f604cbf6c2de98e9574",
  measurementId: "G-KVK8LFQTMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);