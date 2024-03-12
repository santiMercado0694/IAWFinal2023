// @ts-nocheck
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

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
  const messaging = getMessaging(firebaseApp);

  export const getTokenAlpha = (setTokenFound) => {
    return getToken(messaging, {vapidKey: 'BOEO0SNZ3OM1Sf96I1BkQgr4zJUL04x20YExXFXuS5qVjKwE-q3flKyuWwz_2ML7LFfPRl67eynf-OO09VBUzoE'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }

  export {auth, messaging};