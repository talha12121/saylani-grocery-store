import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH63guFcJv7gTXOVokN8wDUnAGMgC-9OU",
  authDomain: "sayalani-grocery-store.firebaseapp.com",
  projectId: "sayalani-grocery-store",
  storageBucket: "sayalani-grocery-store.appspot.com",
  messagingSenderId: "300830306433",
  appId: "1:300830306433:web:cd0ab5f34b74e45efe9d80",
  measurementId: "G-55K0K1YL74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);