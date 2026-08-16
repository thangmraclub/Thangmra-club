import { initializeApp } from
"https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from
"https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import {
  getDatabase,
  ref,
  push,
  set,
  remove,
  onValue
} from
"https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";


const firebaseConfig = {

  apiKey: "আপনার_apiKey",
  authDomain: "আপনার_authDomain",
  databaseURL: "আপনার_databaseURL",
  projectId: "thangmra-club",
  storageBucket: "আপনার_storageBucket",
  messagingSenderId: "আপনার_messagingSenderId",
  appId: "আপনার_appId",
  measurementId: "আপনার_measurementId"

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
