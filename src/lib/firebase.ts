import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDipfq-D8iijS9Aa6PGDJGiZYGZVKpeZfg",

  authDomain: "todo-9ad77.firebaseapp.com",

  projectId: "todo-9ad77",

  storageBucket: "todo-9ad77.appspot.com",

  messagingSenderId: "91912617984",

  appId: "1:91912617984:web:5a1adf24525722ffb318e5",

  measurementId: "G-02C4KBZY46",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const analytics = getAnalytics(app);
