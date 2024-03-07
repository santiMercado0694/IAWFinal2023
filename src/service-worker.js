/* eslint-disable no-restricted-globals */
import { clientsClaim } from "workbox-core";
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate, NetworkFirst } from "workbox-strategies"; // Cambiado a NetworkFirst
import { ExpirationPlugin } from "workbox-expiration";
import OneSignal from 'react-onesignal';

clientsClaim();

// Precarga y enruta los recursos definidos en __WB_MANIFEST
precacheAndRoute(self.__WB_MANIFEST);

// Expresión regular para verificar la extensión de los archivos
const fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$");

// Ruta de registro para manejar las solicitudes de navegación
registerRoute(
  ({ request, url }) => {
    if (request.mode !== "navigate") {
      return false;
    }
    if (url.pathname.startsWith("/_")) {
      return false;
    }
    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    }
    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + "/index.html")
);

// Ruta de registro para manejar las solicitudes de imágenes en formato WebP
registerRoute(
  ({ url }) =>
    url.origin === self.location.origin && url.pathname.endsWith(".webp"),
  new NetworkFirst({ // Cambiado a NetworkFirst
    cacheName: "images",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 días
      }),
    ],
  })
);

// Evento de mensaje para omitir la espera de la activación
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Configurar OneSignal con tu ID de aplicación
OneSignal.push(function() {
  // @ts-ignore
  OneSignal.init({
    appId: "cbb828bb-a3d0-4d28-b9b8-7093d3efeae6",
  });
});

// Manejar las notificaciones push
self.addEventListener('push', function(event) {
  console.log('Push notification received', event);

  var title = 'Push notification';
  var options = {
    body: event.data.text(),
    icon: '/icon.png',
    badge: '/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
