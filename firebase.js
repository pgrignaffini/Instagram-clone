// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaXDXWRVCn3gFL1Fr5wO9F9f_-lYznDBs",
    authDomain: "instagram-clone-90ca5.firebaseapp.com",
    projectId: "instagram-clone-90ca5",
    storageBucket: "instagram-clone-90ca5.appspot.com",
    messagingSenderId: "286108165925",
    appId: "1:286108165925:web:2dfcba8f5025512e9c9ccc"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }