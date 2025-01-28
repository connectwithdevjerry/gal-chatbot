// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FIREBASE_CONFIGS } from "./paths";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: FIREBASE_CONFIGS.apiKey,
  authDomain: FIREBASE_CONFIGS.authDomain,
  projectId: FIREBASE_CONFIGS.projectId,
  storageBucket: FIREBASE_CONFIGS.storageBucket,
  messagingSenderId: FIREBASE_CONFIGS.messagingSenderId,
  appId: FIREBASE_CONFIGS.appId,
  measurementId: FIREBASE_CONFIGS.measurementId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
