import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAylBjqPrMKgb8RgsH6Gem5SHig4gE2T1U",
  authDomain: "krakenshop-7403b.firebaseapp.com",
  projectId: "krakenshop-7403b",
  storageBucket: "krakenshop-7403b.firebasestorage.app",
  messagingSenderId: "922014022162",
  appId: "1:922014022162:web:79042d310dfd0b4f54f6cb",
  measurementId: "G-2T9B5C95G8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)