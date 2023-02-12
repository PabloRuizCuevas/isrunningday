const r = [
  "/_app/immutable/assets/IsRunning-b213d004.css",
  "/_app/immutable/assets/_layout-fa8ba21f.css",
  "/_app/immutable/chunks/2-d250f3e2.js",
  "/_app/immutable/chunks/4-838ce1af.js",
  "/_app/immutable/chunks/3-ed7f10f9.js",
  "/_app/immutable/modules/pages/_page.ts-6a8cdd0a.js",
  "/_app/immutable/chunks/1-0ca75ac5.js",
  "/_app/immutable/components/pages/_page.svelte-cac63239.js",
  "/_app/immutable/modules/pages/no/_page.ts-68f3604a.js",
  "/_app/immutable/chunks/singletons-b5ed66fd.js",
  "/_app/immutable/chunks/counter-78027bbd.js",
  "/_app/immutable/modules/pages/yes/_page.ts-68f3604a.js",
  "/_app/immutable/chunks/0-5c11348e.js",
  "/_app/immutable/chunks/_page-7e4796dc.js",
  "/_app/immutable/chunks/_page-41535251.js",
  "/_app/immutable/chunks/NotRunning-d9f33fb1.js",
  "/_app/immutable/components/error.svelte-5b06b95b.js",
  "/_app/immutable/components/pages/no/_page.svelte-6de86611.js",
  "/_app/immutable/components/pages/yes/_page.svelte-810df511.js",
  "/_app/immutable/chunks/_page-c82ec4dc.js",
  "/_app/immutable/chunks/IsRunning-608a4d33.js",
  "/_app/immutable/chunks/index-c82dd049.js",
  "/_app/immutable/start-a544ad91.js",
  "/_app/immutable/components/pages/_layout.svelte-04a5570d.js"
], l = [
  "/logo_192.png",
  "/logo_192.png:Zone.Identifier",
  "/logo_512.png",
  "/logo_512.png:Zone.Identifier",
  "/manifest.json",
  "/no.png",
  "/pwa/icon/android-icon-192x192-seochecker-manifest-5323.png",
  "/pwa/icon/android-icon-192x192-seochecker-manifest-5323.png:Zone.Identifier",
  "/pwa/icon/apple-icon-114x114-seochecker-manifest-5323.png",
  "/pwa/icon/apple-icon-114x114-seochecker-manifest-5323.png:Zone.Identifier",
  "/pwa/icon/apple-icon-120x120-seochecker-manifest-5323.png",
  "/pwa/icon/apple-icon-120x120-seochecker-manifest-5323.png:Zone.Identifier",
  "/pwa/icon/apple-icon-144x144-seochecker-manifest-5323.png",
  "/pwa/icon/apple-icon-144x144-seochecker-manifest-5323.png:Zone.Identifier",
  "/pwa/icon/apple-icon-152x152-seochecker-manifest-5323.png",
  "/pwa/icon/apple-icon-152x152-seochecker-manifest-5323.png:Zone.Identifier",
  "/pwa/icon/apple-icon-180x180-seochecker-manifest-5323.png",
  "/pwa/icon/apple-icon-180x180-seochecker-manifest-5323.png:Zone.Identifier",
  "/pwa/icon/apple-icon-57x57-seochecker-manifest-5323.png",
  "/pwa/icon/apple-icon-57x57-seochecker-manifest-5323.png:Zone.Identifier",
  "/pwa/icon/apple-icon-60x60-seochecker-manifest-5323.png",
  "/pwa/icon/apple-icon-60x60-seochecker-manifest-5323.png:Zone.Identifier",
  "/pwa/icon/apple-icon-72x72-seochecker-manifest-5323.png",
  "/pwa/icon/apple-icon-72x72-seochecker-manifest-5323.png:Zone.Identifier",
  "/pwa/icon/apple-icon-76x76-seochecker-manifest-5323.png",
  "/pwa/icon/apple-icon-76x76-seochecker-manifest-5323.png:Zone.Identifier",
  "/pwa/icon/favicon-16x16-seochecker-manifest-5323.png",
  "/pwa/icon/favicon-16x16-seochecker-manifest-5323.png:Zone.Identifier",
  "/pwa/icon/favicon-32x32-seochecker-manifest-5323.png",
  "/pwa/icon/favicon-32x32-seochecker-manifest-5323.png:Zone.Identifier",
  "/pwa/icon/favicon-96x96-seochecker-manifest-5323.png",
  "/pwa/icon/favicon-96x96-seochecker-manifest-5323.png:Zone.Identifier",
  "/pwa/logo_512.png",
  "/pwa/pic_512.png:Zone.Identifier",
  "/pwa/seochecker-manifest-5323.json",
  "/pwa/seochecker-manifest-5323.json:Zone.Identifier",
  "/robots.txt",
  "/tumbleweed.png",
  "/yes.png",
  "/yes_no.png"
], o = "1676226065091", c = self, p = `cache${o}`, t = r.concat(l), f = new Set(t);
c.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(p).then((n) => n.addAll(t)).then(() => {
      c.skipWaiting();
    })
  );
});
c.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (n) => {
      for (const a of n)
        a !== p && await caches.delete(a);
      c.clients.claim();
    })
  );
});
async function h(e) {
  const n = await caches.open(`offline${o}`);
  try {
    const a = await fetch(e);
    return n.put(e, a.clone()), a;
  } catch (a) {
    const s = await n.match(e);
    if (s)
      return s;
    throw a;
  }
}
c.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const n = new URL(e.request.url), a = n.protocol.startsWith("http"), s = n.hostname === self.location.hostname && n.port !== self.location.port, i = n.host === self.location.host && f.has(n.pathname), m = e.request.cache === "only-if-cached" && !i;
  a && !s && !m && e.respondWith(
    (async () => i && await caches.match(e.request) || h(e.request))()
  );
});
