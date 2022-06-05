// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxGKyUAcSZYgRmKTbMoz81jCnxLOz8q08",
    authDomain: "hand-tools-server.firebaseapp.com",
    projectId: "hand-tools-server",
    storageBucket: "hand-tools-server.appspot.com",
    messagingSenderId: "361449087865",
    appId: "1:361449087865:web:f3062dbe32aa42ff36c5a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;