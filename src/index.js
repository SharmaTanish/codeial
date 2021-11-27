import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import {configureStore} from './store'; // automatically means './store/index.js'

const store = configureStore();
// console.log(store);
console.log(store.getState());



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6YYuoAaCo3K3-0THbNU2cW2DMSJfzYJc",
  authDomain: "codeial-98061.firebaseapp.com",
  projectId: "codeial-98061",
  storageBucket: "codeial-98061.appspot.com",
  messagingSenderId: "364022299825",
  appId: "1:364022299825:web:8b04b10e0a9d138becf690",
  measurementId: "G-HY2GFB4MB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



ReactDOM.render(
  <React.StrictMode>
  <Provider store={store} >  {/* WE HAVE TO PASS PROVIDER , SINCE CONNECT WILL GET STORE FROM THIS ONLY */} 
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
 


