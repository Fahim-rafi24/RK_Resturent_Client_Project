// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAsjXauHFo9RkKfmsY73yR1c1jXcaFj3i0",
//   authDomain: "rk-resturent.firebaseapp.com",
//   projectId: "rk-resturent",
//   storageBucket: "rk-resturent.firebasestorage.app",
//   messagingSenderId: "442257255242",
//   appId: "1:442257255242:web:9d91a550b9f34819cf2fb3"
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export
export const auth = getAuth(app);