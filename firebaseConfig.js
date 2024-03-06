import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import { firestore } from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAnw28GWuwnqhC4SccZzvPVTd8AeoRB-EA",
    authDomain: "testfb-ab123.firebaseapp.com",
    projectId: "testfb-ab123",
    storageBucket: "testfb-ab123.appspot.com",
    messagingSenderId: "575824836674",
    appId: "1:575824836674:web:0c6b3337954c60e098d5db",
    measurementId: "G-5T413G8D8P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
