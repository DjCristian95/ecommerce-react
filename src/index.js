import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQeSp5_vSG0UpHOJdrRn-N02XfuMpJq08",
  authDomain: "ecommerce-react-cc9b9.firebaseapp.com",
  projectId: "ecommerce-react-cc9b9",
  storageBucket: "ecommerce-react-cc9b9.appspot.com",
  messagingSenderId: "487881868918",
  appId: "1:487881868918:web:bc3350b4b3d94ca4728157"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);