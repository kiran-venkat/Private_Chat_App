import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA01FjgIz6533X2W4T-1ELsUs-BpnuvI3o",
  authDomain: "chat-e48cc.firebaseapp.com",
  projectId: "chat-e48cc",
  storageBucket: "chat-e48cc.appspot.com",
  messagingSenderId: "126996122237",
  appId: "1:126996122237:web:aff6db42af90491efcff14",
  measurementId: "G-L11DW4DD3T"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()