importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyC0bybZAeVm3y4jeAZ0vOtwtznShywb3NQ",
    authDomain: "ecommerce-iaw.firebaseapp.com",
    projectId: "ecommerce-iaw",
    storageBucket: "ecommerce-iaw.appspot.com",
    messagingSenderId: "429036515500",
    appId: "1:429036515500:web:e6da92d7b860fdf6912f09",
    measurementId: "G-4Y0SE5LWYW"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

  messaging.onBackgroundMessage(payload => {
    console.log("Recibiste mensaje mientras estabas ausente");
// previo a mostrar notificación
    const notificationTitle= payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/carrito.png"
    }

    return self.registration.showNotification(
        notificationTitle, 
        notificationOptions
    )
})



