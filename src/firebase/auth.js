import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKhp7UI1tnYrJv1fGpKz-EtqvYvyHrvxM",
  authDomain: "agrilink-65884.firebaseapp.com",
  projectId: "agrilink-65884",
  storageBucket: "agrilink-65884.appspot.com",
  messagingSenderId: "547676284006",
  appId: "1:547676284006:web:8e521a7d7993e535a5f9a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {auth, app}

