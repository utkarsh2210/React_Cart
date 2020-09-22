import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA7jSMhL6R2Kka6Oy6T7xHk4krzuUy6_Ao",
  authDomain: "cart-7a96f.firebaseapp.com",
  databaseURL: "https://cart-7a96f.firebaseio.com",
  projectId: "cart-7a96f",
  storageBucket: "cart-7a96f.appspot.com",
  messagingSenderId: "383714693644",
  appId: "1:383714693644:web:12d04a2ef603b5e3079429"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

