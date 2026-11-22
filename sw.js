/* Offline support. Bump VERSION when you upload new files so phones pick up the change. */
const VERSION='survcalc-2026-11-22-fix';
const CORE=['index.html','manifest.webmanifest','icons/icon-180.png','icons/icon-192.png','icons/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('survcalc-')&&k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin===location.origin){
    if(url.pathname.includes('/book/')||url.pathname.includes('/stakes/'))return; /* the book has its own offline file */
    const key=req.mode==='navigate'?new Request(new URL('index.html',self.registration.scope)):req;
    e.respondWith(caches.open(VERSION).then(async c=>{
      const hit=await c.match(key,{ignoreSearch:true});
      const net=fetch(req.mode==='navigate'?key:req).then(r=>{if(r&&r.ok)c.put(key,r.clone());return r;}).catch(()=>null);
      if(hit){e.waitUntil(net);return hit;}
      const r=await net;return r||new Response('Offline. Open this once with internet first.',{status:503,headers:{'Content-Type':'text/plain'}});
    }));
  }else if(/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)){
    e.respondWith(caches.open(VERSION).then(async c=>{const hit=await c.match(req);if(hit)return hit;try{const r=await fetch(req);c.put(req,r.clone());return r;}catch(x){return Response.error();}}));
  }
});
