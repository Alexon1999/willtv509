import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3w_JRjcuSzGj-wlck4bBpK7M4J9Jb8VQ",
  authDomain: "willtv509.firebaseapp.com",
  projectId: "willtv509",
  storageBucket: "willtv509.appspot.com",
  messagingSenderId: "112499162499",
  appId: "1:112499162499:web:9b61010afa531ae3da8ab6",
  measurementId: "G-R8NPYW9VHE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
