import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "am-chatapp-ee6cc.firebaseapp.com",
  projectId: "am-chatapp-ee6cc",
  storageBucket: "am-chatapp-ee6cc.appspot.com",
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export { app, db, auth, googleProvider };
