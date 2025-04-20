import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const db = getFirestore(app);
const firebaseConfig = {
  apiKey: "AIzaSyCqez8nv1WvD8X...your_key...",
  authDomain: "streamnest-5c9b6.firebaseapp.com",
  projectId: "streamnest-5c9b6",
  storageBucket: "streamnest-5c9b6.appspot.com",
  messagingSenderId: "888388746012",
  appId: "1:888388746012:web:5bb2f4282374d8e8",
  measurementId: "G-8YPBW8F9LD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics, db };