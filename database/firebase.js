// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-tg-yvAxmzE7eifcUTNjy2IhofKqcfR4",
  authDomain: "barberia-firebase.firebaseapp.com",
  projectId: "barberia-firebase",
  storageBucket: "barberia-firebase.appspot.com",
  messagingSenderId: "614386463334",
  appId: "1:614386463334:web:f2a20835801439f4aaf3a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
