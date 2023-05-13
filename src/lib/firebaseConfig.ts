import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgNG4ZgiPV6f2MVxyUNBmJzh1Wi4-vX6o",
  authDomain: "agenda-plus-cc653.firebaseapp.com",
  projectId: "agenda-plus-cc653",
  storageBucket: "agenda-plus-cc653.appspot.com",
  messagingSenderId: "930578624004",
  appId: "1:930578624004:web:dc8422fc20f71648ab0f51",
  measurementId: "G-F497WTTMYN",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
