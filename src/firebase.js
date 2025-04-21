import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // <-- Add this line

const firebaseConfig = {
  apiKey: "AIzaSyCqez8nv1WvD8X...your_key_here",
  authDomain: "streamnest-5c9b6.firebaseapp.com",
  projectId: "streamnest-5c9b6",
  storageBucket: "streamnest-5c9b6.appspot.com",
  messagingSenderId: "888388746012",
  appId: "1:888388746012:web:5bb2f428237...",
  measurementId: "G-8YPBW8F9LD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app); // <-- Add this line

export { app, analytics, db, auth }; // <-- Export auth