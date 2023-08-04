// firebase/database.js
import firebaseConfig from "./config";
import { initializeApp } from "firebase/app"; 
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth'; // Import the getAuth function

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app); // Initialize the Firebase authentication object
