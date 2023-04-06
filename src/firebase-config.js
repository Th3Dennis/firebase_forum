// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBndtmziRLimIi_Xfxcd5LuY_PZzbNMtvI",
  authDomain: "fir-forum-382813.firebaseapp.com",
  projectId: "firebase-forum-382813",
  storageBucket: "firebase-forum-382813.appspot.com",
  messagingSenderId: "196980742265",
  appId: "1:196980742265:web:e1ad31aa49e9fd06335ca8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
