import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCcabBKlBDMyQv6srsNtovX-z2cucIJ8j8",
  authDomain: "react-chat-app-658e9.firebaseapp.com",
  databaseURL: "https://react-chat-app-658e9-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-658e9",
  storageBucket: "react-chat-app-658e9.appspot.com",
  messagingSenderId: "476321954495",
  appId: "1:476321954495:web:b2a8a58a3929a5aea0240a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

