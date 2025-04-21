import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";  // Make sure this import is complete

const firebaseConfig = {
  apiKey: "AIzaSyCqez8nv1WvD8X...your_key",  // Replace with your actual API key
  authDomain: "streamnest-5c9b6.firebaseapp.com",  // Add ".com"
  projectId: "streamnest-5c9b6",
  storageBucket: "streamnest-5c9b6.appspot.com",  // Add ".com"
  messagingSenderId: "888388746012",
  appId: "1:888388746012:web:5bb2f428237...your_app_id",  // Complete the ID
  measurementId: "G-8YPBW8F9LD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);  // Correctly initialized

export { app, analytics, db, auth };  // Only export what you need