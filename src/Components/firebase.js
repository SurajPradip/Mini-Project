import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpGRF68u5dTazvgs5iCjfhfVNL0NT0kKY",
  authDomain: "mini-project-12429.firebaseapp.com",
  projectId: "mini-project-12429",
  storageBucket: "mini-project-12429.appspot.com",
  messagingSenderId: "791174151998",
  appId: "1:791174151998:web:cda9e6b56c76c9a417366f",
  measurementId: "G-3PJV5KZK66"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)