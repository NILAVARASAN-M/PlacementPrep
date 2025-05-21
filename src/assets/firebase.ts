// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-GVpaTDB3pHbNW8udzWndhm_g8ysuv3M",
  authDomain: "softwaresemproject.firebaseapp.com",
  projectId: "softwaresemproject",
  storageBucket: "softwaresemproject.firebasestorage.app",
  messagingSenderId: "30804286919",
  appId: "1:30804286919:web:bc181ca2ca8c3868b34de2",
  measurementId: "G-X94DNZXL7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleprovider = new GoogleAuthProvider();
googleprovider.setCustomParameters({
    prompt: "select_account",
});

export const db = getFirestore(app);