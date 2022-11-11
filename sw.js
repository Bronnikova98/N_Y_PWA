//При изменении данных нужно изменить номер версии на другую, например site-static-v4 и т.д
const staticCacheName = 'site-static-v12';
const assets = [
    '.',
    'index.html',
    'app.js',
    'images/icons/icon-72x72.png',
    'images/icons/icon-96x96.png',
    'images/icons/icon-128x128.png',
    'images/icons/icon-144x144.png',
    'images/icons/icon-152x152.png',
    'images/icons/icon-192x192.png',
    'images/icons/icon-384x384.png',
    'images/icons/icon-512x512.png',
    'images/icons/210040_1383760840.png',
    'images/icons/happy.png',
    'images/icons/cat_in_hat.jpg',
    'css/bootstrap.min.css',
    'js/bootstrap.bundle.min.js'
];


//install, load cach
self.addEventListener('install', evt => {
    evt.waitUntil(
      caches.open(staticCacheName).then((cache) => {
        cache.addAll(assets);
      })
    );
  });

//activate
self.addEventListener('activate', evt => {
    evt.waitUntil(
      caches.keys().then(keys => {
        return Promise.all(keys
          .filter(key => key !== staticCacheName)
          .map(key => caches.delete(key))
        );
      })
    );
  });

//fetch
self.addEventListener('fetch', evt => {
    evt.respondWith(
      caches.match(evt.request).then(cacheRes => {
        return cacheRes || fetch(evt.request);
      })
    );
  });