import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  setDoc,
  deleteDoc,
  doc,
  query,
  where
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBtfvFhvkoPHU3DW2F5C0o_YS_A10ApQsU",
  authDomain: "golden-vibes-party.firebaseapp.com",
  projectId: "golden-vibes-party",
  storageBucket: "golden-vibes-party.firebasestorage.app",
  messagingSenderId: "1096731187238",
  appId: "1:1096731187238:web:67ab3b4b9925366fa9eee7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, getDoc, setDoc, deleteDoc, doc, query, where };
