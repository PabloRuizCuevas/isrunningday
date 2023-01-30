const l = [
  "/_app/immutable/assets/IsRunning-b213d004.css",
  "/_app/immutable/assets/_layout-fa8ba21f.css",
  "/_app/immutable/chunks/4-838ce1af.js",
  "/_app/immutable/chunks/_page-7e4796dc.js",
  "/_app/immutable/chunks/0-bd10dc49.js",
  "/_app/immutable/modules/pages/no/_page.ts-68f3604a.js",
  "/_app/immutable/modules/pages/yes/_page.ts-68f3604a.js",
  "/_app/immutable/chunks/counter-78027bbd.js",
  "/_app/immutable/chunks/1-0ca75ac5.js",
  "/_app/immutable/chunks/2-d250f3e2.js",
  "/_app/immutable/modules/pages/_page.ts-6a8cdd0a.js",
  "/_app/immutable/chunks/3-ed7f10f9.js",
  "/_app/immutable/components/error.svelte-5b06b95b.js",
  "/_app/immutable/components/pages/no/_page.svelte-6de86611.js",
  "/_app/immutable/chunks/NotRunning-d9f33fb1.js",
  "/_app/immutable/chunks/_page-41535251.js",
  "/_app/immutable/chunks/_page-c82ec4dc.js",
  "/_app/immutable/components/pages/yes/_page.svelte-810df511.js",
  "/_app/immutable/components/pages/_page.svelte-cac63239.js",
  "/_app/immutable/chunks/singletons-b5ed66fd.js",
  "/_app/immutable/start-9f67509a.js",
  "/_app/immutable/chunks/index-c82dd049.js",
  "/_app/immutable/chunks/IsRunning-608a4d33.js",
  "/_app/immutable/components/pages/_layout.svelte-1c66be33.js"
], u = [
  "/logo_192.png",
  "/logo_192.png:Zone.Identifier",
  "/logo_512.png",
  "/logo_512.png:Zone.Identifier",
  "/manifest.json",
  "/no.png",
  "/robots.txt",
  "/tumbleweed.png",
  "/yes.png",
  "/yes_no.png"
], p = "1675117265006", t = self, o = `cache${p}`, i = l.concat(u), h = new Set(i);
t.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(o).then((s) => s.addAll(i)).then(() => {
      t.skipWaiting();
    })
  );
});
t.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (s) => {
      for (const a of s)
        a !== o && await caches.delete(a);
      t.clients.claim();
    })
  );
});
async function r(e) {
  const s = await caches.open(`offline${p}`);
  try {
    const a = await fetch(e);
    return s.put(e, a.clone()), a;
  } catch (a) {
    const n = await s.match(e);
    if (n)
      return n;
    throw a;
  }
}
t.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const s = new URL(e.request.url), a = s.protocol.startsWith("http"), n = s.hostname === self.location.hostname && s.port !== self.location.port, c = s.host === self.location.host && h.has(s.pathname), m = e.request.cache === "only-if-cached" && !c;
  a && !n && !m && e.respondWith(
    (async () => c && await caches.match(e.request) || r(e.request))()
  );
});
