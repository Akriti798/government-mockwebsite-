// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";  // 👈 add this

const firebaseConfig = {
  apiKey: "AIzaSyAjFWCArj1ND4ApnRGS2OulGOu9totVZ2M",
  authDomain: "mock-uidai.firebaseapp.com",
  projectId: "mock-uidai",
  storageBucket: "mock-uidai.firebasestorage.app",
  messagingSenderId: "521900348853",
  appId: "1:521900348853:web:9944d1d33520c84f9675fc",
  measurementId: "G-HN19BWZK7L"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Firestore instance
// const db = getFirestore(app);

// // Authentication instance
// const auth = getAuth(app);

// const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);   // 👈 Export auth

export { db, auth };
