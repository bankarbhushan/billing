// // firebase.js
// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT.appspot.com",
//   messagingSenderId: "SENDER_ID",
//   appId: "APP_ID",
// };

// const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeK8Re0XgqZf3ASzKzJADXiePH-6LYIJ4",
  authDomain: "billsystem-929f7.firebaseapp.com",
  projectId: "billsystem-929f7",
  storageBucket: "billsystem-929f7.firebasestorage.app",
  messagingSenderId: "387682439567",
  appId: "1:387682439567:web:f226f3e365de67d5aefbfa",
  measurementId: "G-9B3MRPYRBH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
