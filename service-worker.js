"use strict";var precacheConfig=[["/propview/index.html","8cb91473f5f29c6935ce14b056e3fd58"],["/propview/static/css/main.af1848b7.css","eaa2fbf6acece6d4638f3729670bc611"],["/propview/static/js/main.923ef949.js","7f9bae34ebd166b298633937fbbd27d1"],["/propview/static/media/propview-built-icon.de872c6a.png","de872c6a693c945e0ca895c2b13759f5"],["/propview/static/media/propview-cooling-icon.af1e6b0a.png","af1e6b0ac0d74a235f1abc3c87356eea"],["/propview/static/media/propview-logo.9848dbf8.png","9848dbf86a8e4c0a8c6a718838dc9625"],["/propview/static/media/propview-lot-icon.7c054fa9.png","7c054fa91eb44086d28867654d69a0ef"],["/propview/static/media/propview-map-placeholder.0a235b4c.png","0a235b4cb6763f81a2bf7fdb7f6caa2b"],["/propview/static/media/propview-roof-icon.550ee68f.png","550ee68f01adc486ffa60ef8edc0fea9"],["/propview/static/media/propview-school-placeholder.0d567431.png","0d56743128e1d5b7a4fcf82a9ef5b665"],["/propview/static/media/propview-search-icon.497e4d93.png","497e4d93113b2130d90b7b0a863c7684"],["/propview/static/media/propview-type-icon.1baa9997.png","1baa99975219986f6885db3d8666b5c8"],["/propview/static/media/propview-value-icon.7ef39796.png","7ef397969e922e4deb109a154a414990"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),t=urlsToCacheKeys.has(n));var a="/propview/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(a,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});