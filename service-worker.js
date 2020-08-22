/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "55800b7158155e470cbba60665c3b649"
  },
  {
    "url": "api/helpers.html",
    "revision": "95977e7ec34ec5588ffa45cea5f4bb5b"
  },
  {
    "url": "api/index.html",
    "revision": "a64b66d14b46da357201a05025b33dda"
  },
  {
    "url": "api/suspense.html",
    "revision": "96e9db6472afb84a55b9f55f7f8c5651"
  },
  {
    "url": "assets/css/0.styles.ade7885f.css",
    "revision": "0d45903e535ee952564bd1b4d3ccc5b6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.42324f3c.js",
    "revision": "deeec376c60719266b8306bd53790ba0"
  },
  {
    "url": "assets/js/11.8ed28e77.js",
    "revision": "085bacfd249d2d59f4a1c6177fced8d0"
  },
  {
    "url": "assets/js/12.ac785721.js",
    "revision": "ea9242cb3d994ed30d5780118f6ebb69"
  },
  {
    "url": "assets/js/13.6d102842.js",
    "revision": "a72d75c97f5bf372f6c0e727038f19c7"
  },
  {
    "url": "assets/js/14.14c267b3.js",
    "revision": "302e4cb900c418adf5a8f258b49abd63"
  },
  {
    "url": "assets/js/15.a733cc49.js",
    "revision": "964815aab868c9223d471051911f5ad9"
  },
  {
    "url": "assets/js/16.4af1349e.js",
    "revision": "76743f3fcaa4a73a35593e39117d808d"
  },
  {
    "url": "assets/js/17.db710889.js",
    "revision": "c108df59d7cc1c9f595614f12d34890f"
  },
  {
    "url": "assets/js/18.e4fb0f4b.js",
    "revision": "7428059f7f222b63436f82fde5848f26"
  },
  {
    "url": "assets/js/19.7a22ef11.js",
    "revision": "ccddcb8c30851cc046e02025317b0328"
  },
  {
    "url": "assets/js/20.53c71037.js",
    "revision": "17ca3eba8e64385776379ee7e0eea0b0"
  },
  {
    "url": "assets/js/21.52750103.js",
    "revision": "3c07b87a13a1279b35273bf22840fd60"
  },
  {
    "url": "assets/js/22.54033aa1.js",
    "revision": "b8134dd8c03e26149eb179d127ad454b"
  },
  {
    "url": "assets/js/23.d05027d2.js",
    "revision": "68b67201f2d7b27e937c163aa72fd5e8"
  },
  {
    "url": "assets/js/24.20a800b4.js",
    "revision": "f2e84c0a2be686493d553dfb5e869710"
  },
  {
    "url": "assets/js/25.8179dd7e.js",
    "revision": "ff17d7b3d0ebf2021e0776444e695bd2"
  },
  {
    "url": "assets/js/3.e53887b8.js",
    "revision": "b1373341d7415c81afd71238eb7b89b4"
  },
  {
    "url": "assets/js/4.d77273b5.js",
    "revision": "afdfdbd798565cb4394d4529121ac9da"
  },
  {
    "url": "assets/js/5.7d2e5c78.js",
    "revision": "4467b0b8ce8d7f6208cc85661d8bbc32"
  },
  {
    "url": "assets/js/6.7c161206.js",
    "revision": "657e5bfbf4e353d83c448b21a51b0f80"
  },
  {
    "url": "assets/js/7.6dd24a86.js",
    "revision": "fee6bdeab2f2283d84f1eb0c57f5f8c5"
  },
  {
    "url": "assets/js/8.fe4830a6.js",
    "revision": "e0df655c10432efef38c86b46197a0ec"
  },
  {
    "url": "assets/js/9.cd2df33f.js",
    "revision": "ec2ebc94391eccde1ee99cdfb3771086"
  },
  {
    "url": "assets/js/app.05291c6d.js",
    "revision": "7e48b75016b240b97598a66f5970cce0"
  },
  {
    "url": "assets/js/vendors~docsearch.e9a84dcc.js",
    "revision": "4f8c7596d8fdda314beb0fa96f35f60c"
  },
  {
    "url": "examples/context.html",
    "revision": "97da7d30dc15e08ab74732e6b75bfc38"
  },
  {
    "url": "examples/index.html",
    "revision": "9dbe1546f9d2dae03764c861279a7c05"
  },
  {
    "url": "examples/pomodoro-timer.html",
    "revision": "216a42c8e7512baf6c9970367bfb0a27"
  },
  {
    "url": "examples/suspense.html",
    "revision": "c86842c02bb4c0315816a852984483a6"
  },
  {
    "url": "examples/typeahead.html",
    "revision": "f93559a4590cf55c263a2766ec9c9fc7"
  },
  {
    "url": "guide/context.html",
    "revision": "2c891a5fc8a6577011626a34acfce392"
  },
  {
    "url": "guide/core-concepts.html",
    "revision": "c522c14df82271bff81418f6167ca27c"
  },
  {
    "url": "guide/gotchas.html",
    "revision": "8dba6ba49c62e14f4b9f2fb449e75d72"
  },
  {
    "url": "guide/index.html",
    "revision": "e6fae0f424fa757ed5bffed87c8f3ba4"
  },
  {
    "url": "guide/migration.html",
    "revision": "4693824ca4421dbca13aa63fc52277f4"
  },
  {
    "url": "guide/motivation.html",
    "revision": "017568b4cfdf78830ea91f076cbcdf72"
  },
  {
    "url": "guide/react-independent-epics.html",
    "revision": "a75609b4d90f59819479f35b19979b40"
  },
  {
    "url": "guide/render-as-you-fetch-suspense.html",
    "revision": "64494eacc62fe9a07e41feebd7982bad"
  },
  {
    "url": "icons/android-icon-144x144.png",
    "revision": "7a7eab0e3303cfedb2004a2c4357e600"
  },
  {
    "url": "icons/android-icon-192x192.png",
    "revision": "3898bcb83183b6253f87eb9d5e5b9c00"
  },
  {
    "url": "icons/android-icon-36x36.png",
    "revision": "ab51839615e70a1a013c81cfd55e0fef"
  },
  {
    "url": "icons/android-icon-48x48.png",
    "revision": "c4a1001f60be27aca3ea1bb5f8895c52"
  },
  {
    "url": "icons/android-icon-72x72.png",
    "revision": "09e9640acece6fd035022a5c2379ba50"
  },
  {
    "url": "icons/android-icon-96x96.png",
    "revision": "25a11c9ce7d49494fc02b25418105f89"
  },
  {
    "url": "icons/apple-icon-114x114.png",
    "revision": "8b84d4594e44362d08469deca1dce944"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "19b9fb409fda2e028390a9f8e8984697"
  },
  {
    "url": "icons/apple-icon-144x144.png",
    "revision": "7a7eab0e3303cfedb2004a2c4357e600"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "3cc6c868e59ca7a433089b3ee766b858"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "a541b4572b31e5010483834f1f86aeb7"
  },
  {
    "url": "icons/apple-icon-57x57.png",
    "revision": "b073878d967c78c7c12959602f0d2f19"
  },
  {
    "url": "icons/apple-icon-60x60.png",
    "revision": "b63605624ed9101367684b2841eba5dc"
  },
  {
    "url": "icons/apple-icon-72x72.png",
    "revision": "09e9640acece6fd035022a5c2379ba50"
  },
  {
    "url": "icons/apple-icon-76x76.png",
    "revision": "85c6aaf71eba2d0d8752830d74189be7"
  },
  {
    "url": "icons/apple-icon-precomposed.png",
    "revision": "7b7c6956ee4bdc383ee85ea5a6d531ed"
  },
  {
    "url": "icons/apple-icon.png",
    "revision": "7b7c6956ee4bdc383ee85ea5a6d531ed"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "c34f5f522034bc1eb330d1b23460c0e1"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "da6fddb2d053d9b61aabb2364bda7c5a"
  },
  {
    "url": "icons/favicon-96x96.png",
    "revision": "25a11c9ce7d49494fc02b25418105f89"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "7a7eab0e3303cfedb2004a2c4357e600"
  },
  {
    "url": "icons/ms-icon-150x150.png",
    "revision": "b3defe28047ba8d1fa3ea46f30299313"
  },
  {
    "url": "icons/ms-icon-310x310.png",
    "revision": "5fa1c24701e48383678a584ecd65b949"
  },
  {
    "url": "icons/ms-icon-70x70.png",
    "revision": "fbbd99f625d130297e3b281b52bdc1dc"
  },
  {
    "url": "index.html",
    "revision": "d816e8b64f3d1413458c9dddf950316c"
  },
  {
    "url": "logo.png",
    "revision": "62850ddbc13267344d89653ac2060d80"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
