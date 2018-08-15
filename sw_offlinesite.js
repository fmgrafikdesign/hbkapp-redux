var offlineSiteCache = 'offlineSite';

var resourcesToCache = [
    'index.html',
    'favicon.ico',
    'css/styles.css'
];

this.addEventListener('install', function (event) {
    console.log('Service Worker installing');

    event.waitUntil(
        caches.open(offlineSiteCache)
            .then(function (cache) {
                return cache.addAll(resourcesToCache);
            })
            .then(function () {
                self.skipWaiting();
            })
)
});

this.addEventListener('fetch', function(event) {

    event.respondWith(
        fetch(event.request)
            .catch(function() {
                return caches.match(event.request);
            })
    )

});