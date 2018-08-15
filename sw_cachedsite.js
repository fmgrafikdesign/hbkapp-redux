var offlineCacheName = 'wholeSiteCached';

var offlinePageCache = 'customOfflinePage';
var offlineURL = 'index.html';

this.addEventListener('install', function (event) {
    console.log('Service Worker installing');

    event.waitUntil(
        caches.open(offlinePageCache)
            .then(function (cache) {
                return cache.add(offlineURL);
            })
            .then(function () {
                self.skipWaiting();
            })
)
});

this.addEventListener('fetch', function(event) {

    event.respondWith(
        fetch(event.request)
            .then(function(response) {
                var responseClone = response.clone();
                caches.open(offlineCacheName)
                    .then(function(cache) {
                        if(event.request.method !== 'GET') return;
                        cache.put(event.request, responseClone);
                    });
                return response;
            })
            .catch(function() {
                return caches.match(event.request)
                    .then(function(response) {
                        return response || caches.match(offlineURL);
                    });
            })
    )

});