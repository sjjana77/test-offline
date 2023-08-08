self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('offline-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/offline.html',
                '/script.js',
                /* Add other assets you want to cache here */
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
