const cacheName = "mini-oyunlar";
const coreFiles = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icons/sun192.png",
  "/icons/sun512.png"
];

// install
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName).then(c => c.addAll(coreFiles))
  );
});

// fetch
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return (
        res ||
        fetch(e.request).then(fetchRes => {
          return caches.open(cacheName).then(cache => {
            cache.put(e.request, fetchRes.clone());
            return fetchRes;
          });
        })
      );
    })
  );
});
