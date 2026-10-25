
"use strict";

const CACHE_NAME = "pick-one-v5";

const APP_FILES = [
    "./",
    "./index.html",
    "./manifest.json",
    "./css/style.css",
    "./js/app.js"
];

// Install: cache the main website files.
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(APP_FILES))
            .then(() => self.skipWaiting())
    );
});

// Activate: remove old Pick One caches.
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames =>
            Promise.all(
                cacheNames
                    .filter(name =>
                        name.startsWith("pick-one-") &&
                        name !== CACHE_NAME
                    )
                    .map(name => caches.delete(name))
            )
        ).then(() => self.clients.claim())
    );
});

// Fetch: use cached files when offline.
self.addEventListener("fetch", event => {
    if (event.request.method !== "GET") {
        return;
    }

    const url = new URL(event.request.url);

    if (url.origin !== self.location.origin) {
        return;
    }

    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(event.request);
        })
    );
});
