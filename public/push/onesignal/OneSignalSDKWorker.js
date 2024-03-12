importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

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