// console.log('Hello from sw.js');
//
// importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');
//
// if (workbox) {
//   console.log(`Yay! Workbox is loaded 🎉`);
// } else {
//   console.log(`Boo! Workbox didn't load 😬`);
// }

// Remove comments when testing in dev
// workbox.precaching.precacheAndRoute(
//   [
//     // Only pre-cache the js /large files we need.
//     // JS files
//     'js/app.js',
//     'lib/ionic.bundle.min.js',
//     'lib/angular-components.js',
//     'cordova.js',
//     // Fonts
//     'fonts/ionicons.eot',
//     'roboto-font/roboto-regular-webfont.woff2',
//     //images
//     'img/app/logo-simple.svg',
//     'img/icon-wallet.svg',
//     'img/icon-offline.svg',
//     // html pages
//     'views/offline.html',
//     'views/includes/incomingDataMenu.html',
//     'views/includes/actionSheet.html',
//     'index.html',
//     // css
//     'css/main.css'
//   ],
// );

// Generated with hashed values during build
workbox.precaching.precacheAndRoute([])


workbox.routing.registerRoute(
  /.*\.(?:css|html|js|png|jpg|jpeg|svg|gif)/,
  workbox.strategies.networkFirst()
)
