/* eslint-disable no-restricted-globals */
import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate, NetworkFirst } from 'workbox-strategies';

clientsClaim();

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST);

// Set up App Shell-style routing, so that all navigation requests
// are fulfilled with your index.html shell. Learn more at
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  ({ request, url }) => {
    // If this isn't a navigation, skip.
    if (request.mode !== 'navigate') {
      return false;
    } // If this is a URL that starts with /_, skip.

    if (url.pathname.startsWith('/_')) {
      return false;
    } // If this looks like a URL for a resource, because it contains // a file extension, skip.

    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    } // Return true to signal that we want to use the handler.

    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

// Define el nombre de la caché para los productos
const productosCacheName = 'productos-cache-v1';

// Ruta para manejar la caché de los datos de productos
registerRoute(
  ({ url }) => url.origin === 'https://iaw-final2023-api.vercel.app' && url.pathname.startsWith('/products'),
  new NetworkFirst({
    cacheName: productosCacheName,
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
      }),
    ],
  })
);


// Define el nombre de la caché para las categorías
const categoriasCacheName = 'categorias-cache-v1';

// Ruta para manejar la caché de los datos de categorías JSON
registerRoute(
  ({ url }) => url.origin === 'https://iaw-final2023-api.vercel.app' && url.pathname.startsWith('/categories/'),
  new CacheFirst({
    cacheName: categoriasCacheName,
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
      }),
    ],
  })
);

// Define el nombre de la caché para las categorías por ID
const categoriasPorIDCacheName = 'categorias-por-id-cache-v1';

// Ruta para manejar la caché de los datos de categorías por ID
registerRoute(
  ({ url }) => {
    // Verificar si la URL coincide con el patrón deseado
    return url.origin === 'https://iaw-final2023-api.vercel.app' && url.pathname.startsWith('/products/category/') && /[1-7]$/.test(url.pathname);
  },
  new CacheFirst({
    cacheName: categoriasPorIDCacheName,
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 días
      }),
    ],
  })
);


// Add in any other file extensions or routing criteria as needed.
registerRoute(
  ({ url }) => url.origin === self.location.origin && (url.pathname.endsWith('.webp') || url.pathname.endsWith('.png')),
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],
  })
);

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Any other custom service worker logic can go here.
