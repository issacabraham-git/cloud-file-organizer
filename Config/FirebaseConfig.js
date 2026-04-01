// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  //apiKey: "SPAM",
  authDomain: "chatapp-13244.firebaseapp.com",
  projectId: "chatapp-13244",
  storageBucket: "chatapp-13244.appspot.com",
  messagingSenderId: "235223984102",
  appId: "1:235223984102:web:4ca79e7dd31d1af6419827",
  measurementId: "G-NZRC1PD4KL"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default{
//   app
// }

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
