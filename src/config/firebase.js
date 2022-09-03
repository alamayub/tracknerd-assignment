import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID
  apiKey: 'AIzaSyAL325mlYarpMo1s_tRBeWvBhTV1yUpL88',
  authDomain: 'tracknerd-assignment.firebaseapp.com',
  projectId: 'tracknerd-assignment',
  storageBucket: 'tracknerd-assignment.appspot.com',
  messagingSenderId: '29607213740',
  appId: '1:29607213740:web:33092331f330a73bddbd09'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db 