import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCgNG4ZgiPV6f2MVxyUNBmJzh1Wi4-vX6o",
  authDomain: "agenda-plus-cc653.firebaseapp.com",
  projectId: "agenda-plus-cc653",
  storageBucket: "agenda-plus-cc653.appspot.com",
  messagingSenderId: "930578624004",
  appId: "1:930578624004:web:dc8422fc20f71648ab0f51",
  measurementId: "G-F497WTTMYN"
};

let firebase_app = initializeApp(firebaseConfig) ;

export default firebase_app;