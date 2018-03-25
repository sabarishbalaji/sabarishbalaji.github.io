self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('your-magic-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/site.js',
        '/dragon.js',
        '/styles.css',
        '/jquery-3.2.1.slim.min.js',
        '/popper.min.js',
        '/bootstrap.min.js',
        '/a.jpg',
        '/b.jpg',
        '/c.jpg',
        '/d.jpg',
        '/e.png',
        '/f.jpg',
        '/bootstrap.min.css'

      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  
});