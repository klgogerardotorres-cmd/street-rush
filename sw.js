const V='street-rush-v4';
const FILES=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','lib/three.min.js','lib/Sky.js','lib/CopyShader.js','lib/LuminosityHighPassShader.js','lib/EffectComposer.js','lib/RenderPass.js','lib/ShaderPass.js','lib/MaskPass.js','lib/UnrealBloomPass.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(n=>{const c=n.clone();caches.open(V).then(ca=>ca.put(e.request,c));return n}).catch(()=>caches.match('index.html'))))});
