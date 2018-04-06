#!/usr/bin/env node

'use strict';

const workboxBuild = require('workbox-build');

console.log('Started running SW Task')

const buildSW = () => {
  // This will return a Promise
  return workboxBuild.injectManifest({
    swSrc: 'www/sw.js',
    swDest: 'dist/www/sw.js',
    globDirectory: 'dist/www',
    globPatterns: [
      // Only pre-cache the js /large files we need.
      // JS files
      'js/app.*.js',
      'lib/ionic.bundle.min.*.js',
      'lib/angular-components.*.js',
      'cordova.*.js',
      // Fonts
      'fonts/ionicons.eot',
      'roboto-font/roboto-regular-webfont.woff2',
      //images
      'img/app/logo-simple.svg',
      'img/icon-wallet.svg',
      'img/icon-offline.svg',
      // html pages
      'views/offline.html',
      'views/includes/incomingDataMenu.html',
      'views/includes/actionSheet.html',
      'index.html',
      // css
      'css/main.*.css',
    ]
  });
}

buildSW();


console.log('Finished running SW Task')
