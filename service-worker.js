"use strict";var precacheConfig=[["/propview/index.html","323aff04a726bb80b0e224903b10dc76"],["/propview/static/css/main.f962b6ef.css","62a2149aa258539c08a0e6034cbe1caa"],["/propview/static/js/main.f24e2e50.js","48413e9f08b3db583aeb61a9e939f653"],["/propview/static/media/propview-built-icon.de872c6a.png","de872c6a693c945e0ca895c2b13759f5"],["/propview/static/media/propview-cooling-icon.af1e6b0a.png","af1e6b0ac0d74a235f1abc3c87356eea"],["/propview/static/media/propview-landing-1.2aecfc2d.jpeg","2aecfc2d7bc92fdd47b9239147f4517a"],["/propview/static/media/propview-landing-2.22d7ea46.jpeg","22d7ea468b86acde67669cf6373abae2"],["/propview/static/media/propview-landing-3.d7702948.jpeg","d7702948bbeefb32256c92bc9bf06806"],["/propview/static/media/propview-landing-5.0acd79c1.jpeg","0acd79c1f25532305818f092c38b0ed9"],["/propview/static/media/propview-landing-6.cea7ccea.jpeg","cea7ccea93eae9a9f83ecb17b539f170"],["/propview/static/media/propview-landing-7.93a9527e.jpeg","93a9527e88e16820572da89690c951c9"],["/propview/static/media/propview-logo.9848dbf8.png","9848dbf86a8e4c0a8c6a718838dc9625"],["/propview/static/media/propview-lot-icon.7c054fa9.png","7c054fa91eb44086d28867654d69a0ef"],["/propview/static/media/propview-map-placeholder.0a235b4c.png","0a235b4cb6763f81a2bf7fdb7f6caa2b"],["/propview/static/media/propview-property-1.fe2158ad.png","fe2158ade5b0da15bbad0504b7e9fce0"],["/propview/static/media/propview-roof-icon.550ee68f.png","550ee68f01adc486ffa60ef8edc0fea9"],["/propview/static/media/propview-school-placeholder.0d567431.png","0d56743128e1d5b7a4fcf82a9ef5b665"],["/propview/static/media/propview-search-icon.497e4d93.png","497e4d93113b2130d90b7b0a863c7684"],["/propview/static/media/propview-type-icon.1baa9997.png","1baa99975219986f6885db3d8666b5c8"],["/propview/static/media/propview-value-icon.7ef39796.png","7ef397969e922e4deb109a154a414990"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));var r="/propview/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(r,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});