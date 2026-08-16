import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import {
  getDatabase,
  ref,
  push,
  set,
  remove,
  onValue
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyDtnmDLlsd7ZCp8WAlk6VopTTmGEhrus6s",
  authDomain: "thangmra-club.firebaseapp.com",
  databaseURL: "https://thangmra-club-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "thangmra-club",
  storageBucket: "thangmra-club.firebasestorage.app",
  messagingSenderId: "245769120027",
  appId: "1:245769120027:web:11df8fb2a45600b6254bbe",
  measurementId: "G-2GV6JY7FPE"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getDatabase(app);


export {
  auth,
  db,
  signInWithEmailAndPassword,
  signOut,
  ref,
  push,
  set,
  remove,
  onValue
};
