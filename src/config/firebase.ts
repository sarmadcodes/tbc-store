import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  // Replace with your Firebase config
  apiKey: "AIzaSyCrW_tG5JGY8B3Ts3PF8WXT7B1SdfqILZo",
  authDomain: "tbc-store-4e3c4.firebaseapp.com",
  projectId: "tbc-store-4e3c4",
  storageBucket: "tbc-store-4e3c4.firebasestorage.app",
  messagingSenderId: "195036945358",
  appId: "1:195036945358:web:0fa0408b521f453a38299f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;