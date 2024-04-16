import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";  // Добавьте этот импорт

const firebaseConfig = {
    apiKey: "AIzaSyCKMNQ-MWiYUo9OY7tmP8S3DWDkP-dhseo",
    authDomain: "eldauysy.firebaseapp.com",
    databaseURL: "https://eldauysy-default-rtdb.firebaseio.com",
    projectId: "eldauysy",
    storageBucket: "eldauysy.appspot.com",
    messagingSenderId: "568581329862",
    appId: "1:568581329862:web:c2c38614ed1273489318c7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { app, db, auth };