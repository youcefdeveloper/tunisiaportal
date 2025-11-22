// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeTuhU0gf_VPSJ9iEUNWkkMPzNMZU--w4",
  authDomain: "tunisiaportal.firebaseapp.com",
  projectId: "tunisiaportal",
  storageBucket: "tunisiaportal.firebasestorage.app",
  messagingSenderId: "207114465262",
  appId: "1:207114465262:web:2949204214a9c43bc1e8ff",
  measurementId: "G-VHF71CQBDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);