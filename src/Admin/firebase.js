// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getDocFromCache, getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2-o4q7Xt1KD-Ndcr8NN7my3UAlUmp0SQ",
  authDomain: "admin-manage-f4017.firebaseapp.com",
  projectId: "admin-manage-f4017",
  storageBucket: "admin-manage-f4017.appspot.com",
  messagingSenderId: "506408396058",
  appId: "1:506408396058:web:39375349d3df83175578a3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);