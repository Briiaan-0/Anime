// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKMbdl6fhlY7b7PtUtizE1BhD145uYLWY",
    authDomain: "anime-react-1bf16.firebaseapp.com",
    databaseURL: "https://anime-react-1bf16-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "anime-react-1bf16",
    storageBucket: "anime-react-1bf16.firebasestorage.app",
    messagingSenderId: "513441372815",
    appId: "1:513441372815:web:24176aea852ce90619eefa",
    measurementId: "G-NWZBXL7YZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;