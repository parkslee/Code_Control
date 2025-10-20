// Rename this file to firebase-config.js and fill in your Firebase project settings.
// The app expects window.__firebase_config to be a JSON string (so we JSON.stringify it below).
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

window.__firebase_config = JSON.stringify({
    apiKey: "AIzaSyC3d4UjDi__vL4VmMaTzWjeSE7W8Dx1vP4",
    authDomain: "bakery-optimizer.firebaseapp.com",
    projectId: "bakery-optimizer",
    storageBucket: "bakery-optimizer.firebasestorage.app",
    messagingSenderId: "820476887465",
    appId: "1:820476887465:web:1e3c7e2e784a9bc10204b8",
    measurementId: "G-TH16ZFQZEE"
});


// Optionally set an initial auth token (e.g., for custom auth). Leave null for anonymous sign-in.
window.__initial_auth_token = null;

// Optionally set __app_id
window.__app_id = "your-app-id";
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);