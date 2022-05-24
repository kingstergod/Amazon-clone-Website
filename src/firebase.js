import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCW12tk4kjbeb0x3oVaXVpWQU7gdtlAnqE",
  authDomain: "clone-36b01.firebaseapp.com",
  projectId: "clone-36b01",
  storageBucket: "clone-36b01.appspot.com",
  messagingSenderId: "606007787219",
  appId: "1:606007787219:web:c972a870ba9ad225edde26",
  measurementId: "G-PM544FMTSV",
};

const app = initializeApp(firebaseConfig);

// initialize the database
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
