// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3gGHdgC_SJeLiishm_cRuZzJ7U12YyCM",
  authDomain: "yum-yum-f02b5.firebaseapp.com",
  projectId: "yum-yum-f02b5",
  storageBucket: "yum-yum-f02b5.appspot.com",
  messagingSenderId: "252034712895",
  appId: "1:252034712895:web:2479aa509696cee0117f8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export Firebase authentication object
export const auth = getAuth(app); 
