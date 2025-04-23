// src/firebase.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCqez8nv1WvD8XXn3cEzZTtWo5tQOIKSBI",
  authDomain: "streamnest-5c9b6.firebaseapp.com",
  projectId: "streamnest-5c9b6",
  storageBucket: "streamnest-5c9b6.appspot.com",
  messagingSenderId: "888388746012",
  appId: "1:888388746012:web:5bccfdb47a5702ee5c3c7e",
  measurementId: "G-ZK1YN8QZD5"
};

const app = initializeApp(firebaseConfig);

export default app;