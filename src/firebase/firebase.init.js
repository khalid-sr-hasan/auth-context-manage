// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtaoVLGGyxvTGg0JpGA8StldPD3ztAkTA",
    authDomain: "auth-context-manage.firebaseapp.com",
    projectId: "auth-context-manage",
    storageBucket: "auth-context-manage.appspot.com",
    messagingSenderId: "553159736578",
    appId: "1:553159736578:web:da9c4aeaca330ae02c961b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
