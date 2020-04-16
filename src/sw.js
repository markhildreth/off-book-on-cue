var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
	'/',
	'/styles/global.css',
	'/styles/main.css',
	'/script/main.js',
	'https://rsms.me/inter/font-files/Inter-roman.var.woff2?v=3.11'
];

self.addEventListener('install', function(event) {
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME).then(cache => {
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(response => {
			// Cache hit - return response
			if (response) {
				return response;
			}
			return fetch(event.request);
		})
	);
});
