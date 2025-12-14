const cacheName = "mini-oyunlar-v1";
const filesToCache = [
  "index.html",
  "style.css",
  "adamAsmacaTekK.html",
  "adamAsmaca.html",
  "xox.html",
  "zar.html",
  "yaziTura.html",
  "cark.html",
  "sayiBilmece.html",
  "uctas.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
