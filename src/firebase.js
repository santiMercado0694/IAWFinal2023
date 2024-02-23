import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyC0bybZAeVm3y4jeAZ0vOtwtznShywb3NQ",
    authDomain: "ecommerce-iaw.firebaseapp.com",
    projectId: "ecommerce-iaw",
    storageBucket: "ecommerce-iaw.appspot.com",
    messagingSenderId: "429036515500",
    appId: "1:429036515500:web:e6da92d7b860fdf6912f09",
    measurementId: "G-4Y0SE5LWYW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  export {auth};