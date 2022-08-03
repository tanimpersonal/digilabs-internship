// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVPh12tOK-_8FBFu94T9PrkRwz7bojYb4",
  authDomain: "digilabs-intern.firebaseapp.com",
  projectId: "digilabs-intern",
  storageBucket: "digilabs-intern.appspot.com",
  messagingSenderId: "116153944250",
  appId: "1:116153944250:web:b78db1afc274b8c12b1a83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
