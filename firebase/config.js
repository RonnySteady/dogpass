import { initializeApp } from "firebase/app"; 
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB4TrVmK9W6DIW1ZF5-lShnakvz-jA7BDc",
    authDomain: "dog-pass-f1d12.firebaseapp.com",
    projectId: "dog-pass-f1d12",
    storageBucket: "dog-pass-f1d12.appspot.com",
    messagingSenderId: "449941030622",
    appId: "1:449941030622:web:5ace4a7497062043aea44f",
    measurementId: "G-X7FWD0DY88"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);