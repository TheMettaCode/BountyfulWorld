'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "53f8599aa38219d1f590fceccee81371",
"assets/AssetManifest.bin.json": "125b73d0cd0da945aa9b0f0bae61c122",
"assets/AssetManifest.json": "279bab63d08da4b15ab5212dbeaa2a57",
"assets/assets/app_icon.png": "8080666835e0662a46d36dbdc35ed086",
"assets/assets/dev/logo_orange_512.png": "106f399b391ff8578eceb65eeb25ecfa",
"assets/assets/dev/mettacode_application_brand.png": "678f5b20ff1e34d9bc2e7127dd2463f3",
"assets/assets/dev/mettacode_application_brand_slim.png": "d853b4379aa309ca2eeb4bc740a6f684",
"assets/assets/fonts/Wanted.ttf": "88953b2a68cb82684000502668d3ab3a",
"assets/assets/fonts/Wantedo.ttf": "9f872a2ac377884f27f9161cd0fd4358",
"assets/assets/icon_star/icon_b.png": "0ba34d0eb7713353c00adb03c0b70eee",
"assets/assets/icon_star/icon_bw.png": "e4f1cbdac98ed20396dde2a7b50d73fa",
"assets/assets/icon_star/icon_plus_symbol.png": "9980f40a42aca7318c5b2c540bb7c909",
"assets/assets/icon_star/icon_star.png": "8080666835e0662a46d36dbdc35ed086",
"assets/assets/icon_star/icon_star_b.png": "c534ab8ae313a800dc7c4645ea247cf4",
"assets/assets/icon_star/icon_star_bw.png": "f950d7dd1cbff940227e28eb5bb0da65",
"assets/assets/other_logos/android_apk_badge.png": "4e2c8eeda2efaa694b3283175ac9adfc",
"assets/assets/other_logos/bitcoin.png": "8227f2b9f0fcef8b588cecd9b1bcae7a",
"assets/assets/other_logos/cashapp.png": "42dec4b15db727eedbb9a12c3f5169e2",
"assets/assets/other_logos/ethereum.png": "e37e8eae3fc42945b7fd904d18ac54f2",
"assets/assets/other_logos/google_play_badge.png": "1a9453063dc4ab95fc0cd62b9c1a095e",
"assets/assets/other_logos/ios_app_store_badge.png": "362c61de9a60dcf6b1f2e9732c5d7205",
"assets/assets/other_logos/litecoin.png": "1752b6f6b63f71a75bd472dabad939d6",
"assets/assets/other_logos/spotify_listen_600.png": "34edd648568473090de94112ded39bdc",
"assets/assets/other_logos/venmo.png": "bdfa9632d227044c5cbbfcdf8f640f03",
"assets/assets/other_logos/windows_store_badge.png": "486a0de58c132ee4a9e4b43dc7368857",
"assets/assets/photos/wanted0.png": "ab7be53af3ca744cb5ad3365f776bed6",
"assets/assets/photos/wanted1.png": "5e30a1576fa06dc97abd315f343c30ba",
"assets/assets/photos/wanted2.png": "0ea8914095a6505b94123c4fafd6cd0d",
"assets/assets/photos/world_map.png": "849715edc6a57842819b6e6a07077005",
"assets/assets/social_media/facebook.png": "3e541fe022037cb156e74270120236d2",
"assets/assets/social_media/instagram.png": "12965f33f5982686f6eb63d51073722b",
"assets/assets/social_media/rumble.png": "ac190ef9e408a63f854a7003ee8775b2",
"assets/assets/social_media/soundcloud.png": "9122303753ad079015ccaf0e0cb3a25a",
"assets/assets/social_media/tiktok.png": "a3352efadc94a5ab0d11173dcaa7d7a5",
"assets/assets/social_media/twitter.png": "69d4bd7aea0945ba7ff5e77d1752a5d1",
"assets/assets/social_media/youtube.png": "2b5270fc7e50270749881e91da72e984",
"assets/assets/splash_logo.png": "f950d7dd1cbff940227e28eb5bb0da65",
"assets/assets/tos/tos_app.txt": "4bd68be7f72008e16b3e69b30e1a2d9d",
"assets/assets/tos/tos_payments.txt": "956c5ddbaaad73154fccda6f540ac44a",
"assets/assets/tos/tos_web.txt": "3b84b54d0e81ccc3b565d4313d19ee6b",
"assets/FontManifest.json": "08e6c927a377fef4ab8bb76db856982b",
"assets/fonts/MaterialIcons-Regular.otf": "bd6d7acc7f2a525cd86fabb569129ccf",
"assets/lib/env/env.g.dart": "24c459dfbcb2bb0c7c052701e13efd5b",
"assets/NOTICES": "8cfb2dd869436df092a2e88cbde1d503",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "50200ec3e08fb339a86bdba847d3f3c7",
"favicon.png": "cf3ff4401761af0b87e92add54cdb311",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-chrome-192x192.png": "cf3ff4401761af0b87e92add54cdb311",
"icons/android-chrome-512x512.png": "7557f1fa2ff0df61b543cac0c12bd618",
"icons/android-icon-144x144.png": "64566d2daa820c6cd9222e55d0be103e",
"icons/android-icon-192x192.png": "33aa67b0a1c9b07614fba0c6c67c70f3",
"icons/android-icon-36x36.png": "2e737186010d7e03b23a5c4938860cbf",
"icons/android-icon-48x48.png": "29ac9e318e80cb9854cf4c8cfbb5e15c",
"icons/android-icon-72x72.png": "5309da5e6cf18f66c52f784521ec7acd",
"icons/android-icon-96x96.png": "3d685085f473a393a59ba1fc8762e197",
"icons/apple-icon-114x114.png": "f308895c729682f11622c561dad39316",
"icons/apple-icon-120x120.png": "8b91f9502d9c723934e18f3b09a71784",
"icons/apple-icon-144x144.png": "64566d2daa820c6cd9222e55d0be103e",
"icons/apple-icon-152x152.png": "d31a60627b18f59c006a26eb4f61c2c6",
"icons/apple-icon-180x180.png": "e0e3212dda939ad319a186122b7b5c22",
"icons/apple-icon-57x57.png": "3320ad0e4a1f418b8edc52f75a143279",
"icons/apple-icon-60x60.png": "9e6333239b20910f38b61190d4a8141a",
"icons/apple-icon-72x72.png": "5309da5e6cf18f66c52f784521ec7acd",
"icons/apple-icon-76x76.png": "0a80435a2f37214e0d3f976f6f173c5c",
"icons/apple-icon-precomposed.png": "2f96704c4ea2f040f57d16ebd6e3bf5d",
"icons/apple-icon.png": "2f96704c4ea2f040f57d16ebd6e3bf5d",
"icons/apple-touch-icon.png": "5061f87769deb88fb8616196b698a72e",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "1b99404c0ca6d6cf0a579a152210794d",
"icons/favicon-32x32.png": "a892d1857c9374eb69e67308ef5b574c",
"icons/favicon-96x96.png": "e98a299b4b1bbe72814bf6ed2ea757d6",
"icons/favicon.ico": "50200ec3e08fb339a86bdba847d3f3c7",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "64566d2daa820c6cd9222e55d0be103e",
"icons/ms-icon-150x150.png": "911e6ade29eb9dd888d35646e4b64bf7",
"icons/ms-icon-310x310.png": "356b0a78594ee55ac138db2b04955c0a",
"icons/ms-icon-70x70.png": "a7c4b243ce03a5743d6e12288ffddde8",
"index.html": "971fa0bd28a72e47879f8e00e1261828",
"/": "971fa0bd28a72e47879f8e00e1261828",
"main.dart.js": "9596916240d7af7196f258939b6d5872",
"manifest.json": "afcfab85e853d6369aa31bb5a665ec2b",
"OneSignalSDKWorker.js": "ebb63ca15bba16b550232b0b0f66c726",
"splash/img/branding-1x.png": "82e1c8d503aea1bcc402598ddde539e3",
"splash/img/branding-2x.png": "38e6a29fee3f18a42c360f36d6c3c055",
"splash/img/branding-3x.png": "defe43e3262aab6d352c70bab4fc18d4",
"splash/img/branding-4x.png": "db9231b604ab4b29af0d25f70e4ed864",
"splash/img/branding-dark-1x.png": "82e1c8d503aea1bcc402598ddde539e3",
"splash/img/branding-dark-2x.png": "38e6a29fee3f18a42c360f36d6c3c055",
"splash/img/branding-dark-3x.png": "defe43e3262aab6d352c70bab4fc18d4",
"splash/img/branding-dark-4x.png": "db9231b604ab4b29af0d25f70e4ed864",
"splash/img/dark-1x.png": "e55b0bfb5c57a0eb683a06f1e1f83974",
"splash/img/dark-2x.png": "a60d3fd51e39420c5943c6e735e9ae93",
"splash/img/dark-3x.png": "807b0e741d7ec982b94343692f1a9684",
"splash/img/dark-4x.png": "d16e591df89fa15bbdf80a2936440040",
"splash/img/light-1x.png": "e55b0bfb5c57a0eb683a06f1e1f83974",
"splash/img/light-2x.png": "a60d3fd51e39420c5943c6e735e9ae93",
"splash/img/light-3x.png": "807b0e741d7ec982b94343692f1a9684",
"splash/img/light-4x.png": "d16e591df89fa15bbdf80a2936440040",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "962873915b7f18af608bfa3f86550405",
"version.json": "c3209988ed1e3a37da5fba5b200a5a60"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
