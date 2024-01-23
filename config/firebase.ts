// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9rQ7vvY5DLyjhemT1C-3bgJW8gBV7UcU",
  authDomain: "bookwarp-8a2ad.firebaseapp.com",
  projectId: "bookwarp-8a2ad",
  storageBucket: "bookwarp-8a2ad.appspot.com",
  messagingSenderId: "1051544115028",
  appId: "1:1051544115028:web:7d6e93cce9a3302d74dac1"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}
