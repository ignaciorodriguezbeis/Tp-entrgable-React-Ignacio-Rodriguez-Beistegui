import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAylBjqPrMKgb8RgsH6Gem5SHig4gE2T1U",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "krakenshop-7403b.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "krakenshop-7403b",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "krakenshop-7403b.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "922014022162",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:922014022162:web:79042d310dfd0b4f54f6cb",
};

export const app = initializeApp(firebaseConfig);