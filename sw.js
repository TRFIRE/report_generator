self.addEventListener('install', (e) => {
  e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Uma configuração simples para manter o app online
  e.respondWith(
    fetch(e.request).catch(() => new Response('Você está offline, mas o app continua funcionando na aba que já estava aberta!'))
  );
});
