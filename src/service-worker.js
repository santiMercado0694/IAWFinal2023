/* eslint-disable no-restricted-globals */
import { clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";
import OneSignal from 'react-onesignal';

clientsClaim();

// Puedes desactivar el precaching reemplazand esta línea
// @ts-ignore
precacheAndRoute(self.__WB_MANIFEST);
// por esta otra:
// const desactivarPrecache = self.__WB_MANIFEST;
// para más info: https://cra.link/PWA

const fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$");

registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  ({ request, url }) => {
    // If this isn't a navigation, skip.
    if (request.mode !== "navigate") {
      return false;
    } // If this is a URL that starts with /\_, skip.
    if (url.pathname.startsWith("/_")) {
      return false;
    } // If this looks like a URL for a resource, because it contains // a file extension, skip.
    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    } // Return true to signal that we want to use the handler.
    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + "/index.html")
);

registerRoute(
    // Add in any other file extensions or routing criteria as needed.
    ({ url }) =>
      url.origin === self.location.origin && url.pathname.endsWith(".webp"), // Customize this strategy as needed, e.g., by changing to CacheFirst.
    new StaleWhileRevalidate({
      cacheName: "images",
      plugins: [
        // Ensure that once this runtime cache reaches a maximum size the
        // least-recently used images are removed.
        new ExpirationPlugin({ maxEntries: 50 }),
      ],
    })
  );

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    // @ts-ignore
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

self.addEventListener('push', function(event) {
  console.log('Push notification received', event);

  var title = 'Push notification';
  var options = {
    // @ts-ignore
    body: event.data.text(),
    icon: '/icon.png',
    badge: '/badge.png'
  };

  // @ts-ignore
  event.waitUntil(self.registration.showNotification(title, options));
});
