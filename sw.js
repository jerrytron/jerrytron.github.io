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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6901b7ee1e2d142d611996d9efb6ecfb"
  },
  {
    "url": "404/index.html",
    "revision": "e133d0e562248495ee9cece1ff15c4c6"
  },
  {
    "url": "about/index.html",
    "revision": "20d53c1a3bb5ade59a3627a32b454030"
  },
  {
    "url": "app-4228c24092c388350a72.js"
  },
  {
    "url": "app-4228c24092c388350a72.js.map",
    "revision": "bb4ed6abb8bacd6f8be0ee4b28c5466c"
  },
  {
    "url": "chunk-map.json",
    "revision": "117cf1d91acfb089bf5f2cdc43ddd131"
  },
  {
    "url": "CNAME",
    "revision": "af8fe28a25e55e0337ed5d3bafc858e0"
  },
  {
    "url": "commons-0c64c6a630dbec82ba22.js"
  },
  {
    "url": "commons-0c64c6a630dbec82ba22.js.map",
    "revision": "d276ab963977d275a1b406fab8bb5380"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-fd63b2ded98d7b7a7ff6.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-fd63b2ded98d7b7a7ff6.js.map",
    "revision": "3e0d42645d68c49bc3ee8ace4f183b83"
  },
  {
    "url": "component---src-pages-404-js-4350678620f46e12ea03.js"
  },
  {
    "url": "component---src-pages-404-js-4350678620f46e12ea03.js.map",
    "revision": "cd6ab9c9dd49dc8f0495dc4369e4c6ea"
  },
  {
    "url": "component---src-pages-about-js-db499d82d84f954e11bb.js"
  },
  {
    "url": "component---src-pages-about-js-db499d82d84f954e11bb.js.map",
    "revision": "6442e8650c40682bfc42a858d1a9837d"
  },
  {
    "url": "component---src-pages-home-md-3011d15111326180cb13.js"
  },
  {
    "url": "component---src-pages-home-md-3011d15111326180cb13.js.map",
    "revision": "273d049d6b359d0777f3140c0e8c3bca"
  },
  {
    "url": "component---src-pages-index-js-2d4be656966c761c0444.js"
  },
  {
    "url": "component---src-pages-index-js-2d4be656966c761c0444.js.map",
    "revision": "d4a7e75f64c27eea61c019da07f68711"
  },
  {
    "url": "component---src-pages-projects-js-dad1cc85cd404f703b92.js"
  },
  {
    "url": "component---src-pages-projects-js-dad1cc85cd404f703b92.js.map",
    "revision": "bfe10e1a8376f54b1a3e0bced2b7c74c"
  },
  {
    "url": "component---src-pages-sidebar-md-5470c676b3a8cc2693c5.js"
  },
  {
    "url": "component---src-pages-sidebar-md-5470c676b3a8cc2693c5.js.map",
    "revision": "ed1f1bfc893bdf86a6b2cf941d0c7654"
  },
  {
    "url": "component---src-pages-skills-js-827040de3e514cb2f6fc.js"
  },
  {
    "url": "component---src-pages-skills-js-827040de3e514cb2f6fc.js.map",
    "revision": "f22be219a4ae01c5709590e4bd0904af"
  },
  {
    "url": "component---src-pages-tags-js-26fbd3e51231b4363ab1.js"
  },
  {
    "url": "component---src-pages-tags-js-26fbd3e51231b4363ab1.js.map",
    "revision": "4c3d15cba630b1186f086fcfe99c14ed"
  },
  {
    "url": "component---src-templates-project-js-800b45f54239593872a2.js"
  },
  {
    "url": "component---src-templates-project-js-800b45f54239593872a2.js.map",
    "revision": "9f3b8aebe85c3c72314f0a6b84538bab"
  },
  {
    "url": "component---src-templates-skill-js-9dd7e257020d7fde5398.js"
  },
  {
    "url": "component---src-templates-skill-js-9dd7e257020d7fde5398.js.map",
    "revision": "952a88706bc606cdbfbe8b69fbb5f61f"
  },
  {
    "url": "component---src-templates-tag-js-35a77f786a743d3dbd49.js"
  },
  {
    "url": "component---src-templates-tag-js-35a77f786a743d3dbd49.js.map",
    "revision": "284c814db53348ac7530b86684e93564"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "b5889797c1c878b8a37b65beeb59ef07"
  },
  {
    "url": "favicon.ico",
    "revision": "ae3f3b0bcb61106b5c42c101ef61c729"
  },
  {
    "url": "files/artist_cv-jerry_belich.pdf",
    "revision": "e1495b1e5407861f8c919c7bd207dc66"
  },
  {
    "url": "files/resume-jerry_belich.pdf",
    "revision": "3712ded181664902b5f1fa9f2c93eb4a"
  },
  {
    "url": "home/index.html",
    "revision": "f3cc4f86169c2a1c042bcb1fa30ed98d"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "278851df9d62bc54914cfb4b653516cd"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "cef31c3c9b63413176cbd8b24b70d0ac"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "4387c7ee802b0c41f1684d5d9361d5fe"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "ca6aad844fbc2025a840b4f209befa54"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "86b31f9cf66cc2b60c288802ea55e448"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "22d015f85af832884b4720af6d369ddc"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "482fa342afb089caa01e580267d2d6d3"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "ad55b690a40a056f4e738ff054698777"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "e8cba076e2f80b219c637a31508267c0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "5d0cef8cfe4af6e2273f330070719409"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "75d308ca0299a930eeec7972f4e49b66"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "885296f794bc4c06d05f9cb1f0a23695"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "3ddd5d51b095997b4d473ef99898912f"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "c4a15c59667480cba2992fb17bad4699"
  },
  {
    "url": "page-data/home/page-data.json",
    "revision": "585ce4199a10d690166758a9f29817df"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "b4743181bdfbeb02ff76cab7212bc193"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/projects/afterglow/page-data.json",
    "revision": "f09feb7f871582d0b57544f7dd918e61"
  },
  {
    "url": "page-data/projects/alice-in-puzzleland/page-data.json",
    "revision": "0737dd9e49c300894b723cbff632e551"
  },
  {
    "url": "page-data/projects/alt-ctrl-award/page-data.json",
    "revision": "b6f8176a701350661c9961175909103b"
  },
  {
    "url": "page-data/projects/burning-ritual/page-data.json",
    "revision": "da03b2a96c3c86bdc6a10fdb18cd5f79"
  },
  {
    "url": "page-data/projects/channel/page-data.json",
    "revision": "32c6b9c3d34e482594d8022efbe77b06"
  },
  {
    "url": "page-data/projects/choosatron/page-data.json",
    "revision": "96268d404db0cb4e24840a2662e1e676"
  },
  {
    "url": "page-data/projects/convergence-bad-guys/page-data.json",
    "revision": "83faf46355e023a22f8a6375cae05347"
  },
  {
    "url": "page-data/projects/cosmo-casino/page-data.json",
    "revision": "b8872c729440070db57d2d4cb75a4889"
  },
  {
    "url": "page-data/projects/cute-em-up/page-data.json",
    "revision": "8af1fc2bdaa7ef6010db47d37b4bec7b"
  },
  {
    "url": "page-data/projects/cylindrus/page-data.json",
    "revision": "1ac93487ab41030bd29d2a3edc7efec7"
  },
  {
    "url": "page-data/projects/dark-side-of-balloon/page-data.json",
    "revision": "9b8d6fecc457ca617d137fcdc9a02d0c"
  },
  {
    "url": "page-data/projects/dial/page-data.json",
    "revision": "2c570e56bf649dfa698cb5e6a0fdc356"
  },
  {
    "url": "page-data/projects/dyscourse/page-data.json",
    "revision": "728dd18fa8ca15885a7c6c83a1a08f19"
  },
  {
    "url": "page-data/projects/fahrenheit-451/page-data.json",
    "revision": "efe89881c327fca0b35dd0c7646c76de"
  },
  {
    "url": "page-data/projects/final-retirement-saga/page-data.json",
    "revision": "92c028b3f694a81313301b39e81a4e50"
  },
  {
    "url": "page-data/projects/gerry-game-won/page-data.json",
    "revision": "ddab2ae772ba4c799f28f77bd43867e3"
  },
  {
    "url": "page-data/projects/ghost-dentist-vr/page-data.json",
    "revision": "83e5a2e487fd3499ac731c0262e2f381"
  },
  {
    "url": "page-data/projects/jerrytron-com/page-data.json",
    "revision": "16aa456be51648cc2d869e188d4668e2"
  },
  {
    "url": "page-data/projects/luftrausers-alt-ctrl/page-data.json",
    "revision": "37614572ed01902f688429504000e8fa"
  },
  {
    "url": "page-data/projects/luftrausers-arcade/page-data.json",
    "revision": "e69504a803c4cc032fa4e6df2e524417"
  },
  {
    "url": "page-data/projects/mathematical/page-data.json",
    "revision": "a233b9bcb893f64f1e81db59f9c4105d"
  },
  {
    "url": "page-data/projects/mini-mini-dragon-golf/page-data.json",
    "revision": "0c7faeb94a44b5869e2ce5e77200c23f"
  },
  {
    "url": "page-data/projects/mysteryphone/page-data.json",
    "revision": "f8f34e25ac6f35d7728bf8874140812d"
  },
  {
    "url": "page-data/projects/nature-machn/page-data.json",
    "revision": "7c8c7fd1d1037e69fca363ae7b2d1090"
  },
  {
    "url": "page-data/projects/page-data.json",
    "revision": "9608013af3e9b58a3b1d6825088aa8f1"
  },
  {
    "url": "page-data/projects/please-stand-by/page-data.json",
    "revision": "56201592ee6b68b79f0a77289e9dd53a"
  },
  {
    "url": "page-data/projects/polite-dinner-extreme/page-data.json",
    "revision": "c95c0544d3536a37a986d2681e4f6503"
  },
  {
    "url": "page-data/projects/q-car/page-data.json",
    "revision": "f7e983fbc66962a42db15e21ebdd6d4f"
  },
  {
    "url": "page-data/projects/robo-mamas-cooking-kitchen/page-data.json",
    "revision": "e2b7ae367665b0fd6aa58091b43fb2bf"
  },
  {
    "url": "page-data/projects/tank-top/page-data.json",
    "revision": "80dff8deb4b46865ada59d2e0524af64"
  },
  {
    "url": "page-data/projects/tastemmals/page-data.json",
    "revision": "e63ae9902662cd5603ecb258cdfeb9f8"
  },
  {
    "url": "page-data/projects/tiny-tombstones/page-data.json",
    "revision": "c556a9fe05b542a9b9153b4312bcd97a"
  },
  {
    "url": "page-data/projects/utopia-room/page-data.json",
    "revision": "c488278bb7460de12fc7e2515cc8c004"
  },
  {
    "url": "page-data/projects/zig-zegg/page-data.json",
    "revision": "59ec3d5d7551d862fdf33cf18dac098c"
  },
  {
    "url": "page-data/sidebar/page-data.json",
    "revision": "ac714fe07c264d936677cf2dd8d92665"
  },
  {
    "url": "page-data/skills/animation/page-data.json",
    "revision": "8e9c8ddf1d35e351c81a606da5c87cbe"
  },
  {
    "url": "page-data/skills/flavor-text/page-data.json",
    "revision": "02ee55d7b8db1d6f67eb8a0a58b27d8e"
  },
  {
    "url": "page-data/skills/game-design/page-data.json",
    "revision": "7e7bae42f2cd9fc34c827ca8eb5c59b0"
  },
  {
    "url": "page-data/skills/narrative-storytelling/page-data.json",
    "revision": "4e277a71c34e4d4419854868656377e7"
  },
  {
    "url": "page-data/skills/page-data.json",
    "revision": "33430278f139ce8df89aceb522ce91f2"
  },
  {
    "url": "page-data/skills/physical-experience/page-data.json",
    "revision": "90236dfab63e64b7979eccb79b56fe3c"
  },
  {
    "url": "page-data/skills/project-management/page-data.json",
    "revision": "9b108863e7a353f0a19cbc979584a3d7"
  },
  {
    "url": "page-data/skills/simulation/page-data.json",
    "revision": "f5e6e48637003e71f180538b818ae989"
  },
  {
    "url": "page-data/skills/software-dev/page-data.json",
    "revision": "13a49119affa2d1f79f6a8ded4d0d3d1"
  },
  {
    "url": "page-data/skills/testing/page-data.json",
    "revision": "7dbc891e34800269bbe979b320599756"
  },
  {
    "url": "page-data/skills/voice-over/page-data.json",
    "revision": "f177275521cebb28bf820db5b193785b"
  },
  {
    "url": "page-data/skills/web-dev/page-data.json",
    "revision": "fce40c654c42c014cea2ea890d1811da"
  },
  {
    "url": "page-data/tags/alt-ctrl/page-data.json",
    "revision": "0e6b27a57066d3aaea4744ac70b5fe6f"
  },
  {
    "url": "page-data/tags/animation-fx/page-data.json",
    "revision": "d25b901ffbbb5ec975000f10e98d865e"
  },
  {
    "url": "page-data/tags/client-work/page-data.json",
    "revision": "59668093a1ace41fff88589eda560afe"
  },
  {
    "url": "page-data/tags/commissioned/page-data.json",
    "revision": "4680462bae7f7c93fc3cfa5519398084"
  },
  {
    "url": "page-data/tags/crowdfunding/page-data.json",
    "revision": "8703b73dbf4410e30fd376e3b0add53f"
  },
  {
    "url": "page-data/tags/digital/page-data.json",
    "revision": "486bc7d9c9b678f1a50087d862d02a1f"
  },
  {
    "url": "page-data/tags/escape-room/page-data.json",
    "revision": "c5897c20586cbe4fb083892d011192c3"
  },
  {
    "url": "page-data/tags/experience-design/page-data.json",
    "revision": "82ce91f7959ffe134b1d2f68e5bcccfe"
  },
  {
    "url": "page-data/tags/game-design/page-data.json",
    "revision": "baed78444d1cde8f37bc490d9b133a40"
  },
  {
    "url": "page-data/tags/game-jam/page-data.json",
    "revision": "bc0c477369a75fa8b4f7d7893b02fe5e"
  },
  {
    "url": "page-data/tags/gatsby/page-data.json",
    "revision": "472df525419eb12b5eb86abc9532307b"
  },
  {
    "url": "page-data/tags/installation/page-data.json",
    "revision": "c96ce9f004ce9d9f5290225500efcebf"
  },
  {
    "url": "page-data/tags/interactive-fiction/page-data.json",
    "revision": "684693803c38086fa2f735008ff20c5d"
  },
  {
    "url": "page-data/tags/live-theatre/page-data.json",
    "revision": "fc3eed1279bf52cb9cccba9f73b999bd"
  },
  {
    "url": "page-data/tags/location-based-game/page-data.json",
    "revision": "a542c3d4ad679260e1cfbd3897a34807"
  },
  {
    "url": "page-data/tags/location-based/page-data.json",
    "revision": "e56de9d73c84ebc69e7ff472976ae75b"
  },
  {
    "url": "page-data/tags/narrative/page-data.json",
    "revision": "bd27824b3bfaa2d68b28332ab8c50443"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "4885ec18e0d0cf2febe9688463325611"
  },
  {
    "url": "page-data/tags/physical-tech/page-data.json",
    "revision": "b7176a116b6d36f9760f7e205389d63e"
  },
  {
    "url": "page-data/tags/poetry/page-data.json",
    "revision": "629cf4a1bd48504bf2e824d022975463"
  },
  {
    "url": "page-data/tags/prototyping-for-play/page-data.json",
    "revision": "a639fe0639b36131f7b8dd73bec10a42"
  },
  {
    "url": "page-data/tags/static-generation/page-data.json",
    "revision": "7ec6accd065cafa64ba947515914d7e7"
  },
  {
    "url": "page-data/tags/tabletop/page-data.json",
    "revision": "894304a7c71ba43b5048cca542b2463e"
  },
  {
    "url": "page-data/tags/test/page-data.json",
    "revision": "9271ec33d065910f9eb18c65d8101de7"
  },
  {
    "url": "page-data/tags/twitter/page-data.json",
    "revision": "e687ca5462be5a959ff73564bd58a555"
  },
  {
    "url": "page-data/tags/voice-over/page-data.json",
    "revision": "b7b49670b2cde87f16654a13975bb92b"
  },
  {
    "url": "page-data/tags/vr/page-data.json",
    "revision": "9665a24077c0cb39d8998f569ee59296"
  },
  {
    "url": "page-data/tags/writing/page-data.json",
    "revision": "12a87f7e59d0ab582632ca7ebd1e2159"
  },
  {
    "url": "projects/afterglow/index.html",
    "revision": "ad2ce3136e6dbf7b32bc0fafc192ceb8"
  },
  {
    "url": "projects/alice-in-puzzleland/index.html",
    "revision": "d5029959ce51cc3294e56fea46182253"
  },
  {
    "url": "projects/alt-ctrl-award/index.html",
    "revision": "e947af83e25a4ba8985e1c4001c1d841"
  },
  {
    "url": "projects/burning-ritual/index.html",
    "revision": "986600473ec73293269e45030eb582d5"
  },
  {
    "url": "projects/channel/index.html",
    "revision": "f6badc2764be6b6c2df420b007c6f030"
  },
  {
    "url": "projects/choosatron/index.html",
    "revision": "15b6e55f9f32c69ada80f1c7c6ddae54"
  },
  {
    "url": "projects/convergence-bad-guys/index.html",
    "revision": "f412300cc76b0928018440e5ad2bed86"
  },
  {
    "url": "projects/cosmo-casino/index.html",
    "revision": "d7c74fafef383d49d97463be859fa770"
  },
  {
    "url": "projects/cute-em-up/index.html",
    "revision": "cec1c5632eb4b4a15acaee4170d97248"
  },
  {
    "url": "projects/cylindrus/index.html",
    "revision": "8c6c16a3d86572acb1cbf33f84500f22"
  },
  {
    "url": "projects/dark-side-of-balloon/index.html",
    "revision": "749548430fa23829155fe1c27ce5e011"
  },
  {
    "url": "projects/dial/index.html",
    "revision": "c7d6cf2c4c2a26784116d0321bcfbf4f"
  },
  {
    "url": "projects/dyscourse/index.html",
    "revision": "f9d2c15f93cc8257390a809b178eec79"
  },
  {
    "url": "projects/fahrenheit-451/index.html",
    "revision": "382e3f257ced437be1f9585653848250"
  },
  {
    "url": "projects/final-retirement-saga/index.html",
    "revision": "b01d9cd0693842000f1145c8b45dbf62"
  },
  {
    "url": "projects/gerry-game-won/index.html",
    "revision": "f8a619c695d8d2859c69590d4af9228d"
  },
  {
    "url": "projects/ghost-dentist-vr/index.html",
    "revision": "14328602f629ccc7263ae0560899fb5e"
  },
  {
    "url": "projects/index.html",
    "revision": "2fb67a7ec7b7907d63fd95bfccf6dba9"
  },
  {
    "url": "projects/jerrytron-com/index.html",
    "revision": "a6c71910cc6e126db00b2c900fb4247e"
  },
  {
    "url": "projects/luftrausers-alt-ctrl/index.html",
    "revision": "a5a6c46890d19e289e10de63072d45c5"
  },
  {
    "url": "projects/luftrausers-arcade/index.html",
    "revision": "06381c3fb1f1a01f80866361d4d29bed"
  },
  {
    "url": "projects/mathematical/index.html",
    "revision": "e8bae7e6675ad0a4ab3192512dba3f55"
  },
  {
    "url": "projects/mini-mini-dragon-golf/index.html",
    "revision": "d2d6762d5efb67a4cf8f59323b0de99f"
  },
  {
    "url": "projects/mysteryphone/index.html",
    "revision": "4e6df3299d35e2ca572ccde8af937901"
  },
  {
    "url": "projects/nature-machn/index.html",
    "revision": "f1e5aeef335d777ab22e45d2e2cdd204"
  },
  {
    "url": "projects/please-stand-by/index.html",
    "revision": "f2c2ad2a96e03c7cb3f225094676924b"
  },
  {
    "url": "projects/polite-dinner-extreme/index.html",
    "revision": "46e58e6fb0ee40a4727f5e13f36a7c45"
  },
  {
    "url": "projects/q-car/index.html",
    "revision": "c5e76de4576a85f04cb85ebba19c69f6"
  },
  {
    "url": "projects/robo-mamas-cooking-kitchen/index.html",
    "revision": "8059588476a176107780b4bd320f5d45"
  },
  {
    "url": "projects/tank-top/index.html",
    "revision": "1286afe2d50502afb73b7553481a14da"
  },
  {
    "url": "projects/tastemmals/index.html",
    "revision": "77a9725749362f6ffae8586ef0b16793"
  },
  {
    "url": "projects/tiny-tombstones/index.html",
    "revision": "a84a9568bc37d24c2d03428898468526"
  },
  {
    "url": "projects/utopia-room/index.html",
    "revision": "88edd24037039381043f611f43c75c7c"
  },
  {
    "url": "projects/zig-zegg/index.html",
    "revision": "f5a20d346bf1e0ee7d56c20988959f8e"
  },
  {
    "url": "robots.txt",
    "revision": "dc090332768a8ef58f478aba504f13a9"
  },
  {
    "url": "sidebar/index.html",
    "revision": "3c999c1ac16b3baf0b0ea078b79cd289"
  },
  {
    "url": "skills/animation/index.html",
    "revision": "5544f7aff19f4f36cddbd1965e3226e2"
  },
  {
    "url": "skills/flavor-text/index.html",
    "revision": "60178c65a5ff24a02125e816eb1dc3a1"
  },
  {
    "url": "skills/game-design/index.html",
    "revision": "8e28e8e7da51099940084c207412607e"
  },
  {
    "url": "skills/index.html",
    "revision": "de3b38b51f99fb69ff0767c64c06dc47"
  },
  {
    "url": "skills/narrative-storytelling/index.html",
    "revision": "2b1c5f5c15d13822e146b259e7c1a7db"
  },
  {
    "url": "skills/physical-experience/index.html",
    "revision": "13c1184d7a2693b719fe7a712e53528f"
  },
  {
    "url": "skills/project-management/index.html",
    "revision": "e42b6084a858c4acef43d0a0adda5362"
  },
  {
    "url": "skills/simulation/index.html",
    "revision": "0a2831ef4df036272d539ee3118ec5a9"
  },
  {
    "url": "skills/software-dev/index.html",
    "revision": "81c602e939a0ad098e8280617daed550"
  },
  {
    "url": "skills/testing/index.html",
    "revision": "535ac37eaa3fb5f5df94f288a7dbfd0a"
  },
  {
    "url": "skills/voice-over/index.html",
    "revision": "4ff599e665a6b8668c44c3681b242275"
  },
  {
    "url": "skills/web-dev/index.html",
    "revision": "5545ec48edf7119eda65dbacae83ddd3"
  },
  {
    "url": "static/031af23c768d88387211d6c1cc4823b5/0cfb8/polite-dinner-extreme-grid.jpg"
  },
  {
    "url": "static/031af23c768d88387211d6c1cc4823b5/10245/polite-dinner-extreme-grid.jpg"
  },
  {
    "url": "static/031af23c768d88387211d6c1cc4823b5/4f15e/polite-dinner-extreme-grid.jpg"
  },
  {
    "url": "static/031af23c768d88387211d6c1cc4823b5/5d440/polite-dinner-extreme-grid.jpg"
  },
  {
    "url": "static/031af23c768d88387211d6c1cc4823b5/70281/polite-dinner-extreme-grid.jpg"
  },
  {
    "url": "static/031af23c768d88387211d6c1cc4823b5/8674f/polite-dinner-extreme-grid.jpg"
  },
  {
    "url": "static/031af23c768d88387211d6c1cc4823b5/93753/polite-dinner-extreme-grid.jpg"
  },
  {
    "url": "static/031af23c768d88387211d6c1cc4823b5/bfaba/polite-dinner-extreme-grid.jpg"
  },
  {
    "url": "static/031af23c768d88387211d6c1cc4823b5/c9430/polite-dinner-extreme-grid.jpg"
  },
  {
    "url": "static/031af23c768d88387211d6c1cc4823b5/e2c05/polite-dinner-extreme-grid.jpg"
  },
  {
    "url": "static/031af23c768d88387211d6c1cc4823b5/f605f/polite-dinner-extreme-grid.jpg"
  },
  {
    "url": "static/0a1b5eb8369315a2edd99ce873244b1e/0dd14/afterglow-green.jpg"
  },
  {
    "url": "static/0a1b5eb8369315a2edd99ce873244b1e/255e3/afterglow-green.jpg"
  },
  {
    "url": "static/0a1b5eb8369315a2edd99ce873244b1e/4e109/afterglow-green.jpg"
  },
  {
    "url": "static/0a1b5eb8369315a2edd99ce873244b1e/59e89/afterglow-green.jpg"
  },
  {
    "url": "static/0a1b5eb8369315a2edd99ce873244b1e/5fd83/afterglow-green.jpg"
  },
  {
    "url": "static/0a1b5eb8369315a2edd99ce873244b1e/7223d/afterglow-green.jpg"
  },
  {
    "url": "static/0a1b5eb8369315a2edd99ce873244b1e/7a47b/afterglow-green.jpg"
  },
  {
    "url": "static/0a1b5eb8369315a2edd99ce873244b1e/7cf8a/afterglow-green.jpg"
  },
  {
    "url": "static/0a1b5eb8369315a2edd99ce873244b1e/aebdd/afterglow-green.jpg"
  },
  {
    "url": "static/0a1b5eb8369315a2edd99ce873244b1e/d7667/afterglow-green.jpg"
  },
  {
    "url": "static/0e21c4c27eb93486aa6ebfb6ed47f85d/0cfb8/cylindrus-destroyed.jpg"
  },
  {
    "url": "static/0e21c4c27eb93486aa6ebfb6ed47f85d/10245/cylindrus-destroyed.jpg"
  },
  {
    "url": "static/0e21c4c27eb93486aa6ebfb6ed47f85d/1bee7/cylindrus-destroyed.jpg"
  },
  {
    "url": "static/0e21c4c27eb93486aa6ebfb6ed47f85d/4f15e/cylindrus-destroyed.jpg"
  },
  {
    "url": "static/0e21c4c27eb93486aa6ebfb6ed47f85d/5d440/cylindrus-destroyed.jpg"
  },
  {
    "url": "static/0e21c4c27eb93486aa6ebfb6ed47f85d/70281/cylindrus-destroyed.jpg"
  },
  {
    "url": "static/0e21c4c27eb93486aa6ebfb6ed47f85d/76f22/cylindrus-destroyed.jpg"
  },
  {
    "url": "static/0e21c4c27eb93486aa6ebfb6ed47f85d/8674f/cylindrus-destroyed.jpg"
  },
  {
    "url": "static/0e21c4c27eb93486aa6ebfb6ed47f85d/93753/cylindrus-destroyed.jpg"
  },
  {
    "url": "static/0e21c4c27eb93486aa6ebfb6ed47f85d/bfaba/cylindrus-destroyed.jpg"
  },
  {
    "url": "static/0e21c4c27eb93486aa6ebfb6ed47f85d/e2c05/cylindrus-destroyed.jpg"
  },
  {
    "url": "static/1360c5b262cb5c36b9059a81e1ba8df4/0cfb8/burning-ritual-play-02.jpg"
  },
  {
    "url": "static/1360c5b262cb5c36b9059a81e1ba8df4/10245/burning-ritual-play-02.jpg"
  },
  {
    "url": "static/1360c5b262cb5c36b9059a81e1ba8df4/4e109/burning-ritual-play-02.jpg"
  },
  {
    "url": "static/1360c5b262cb5c36b9059a81e1ba8df4/4f15e/burning-ritual-play-02.jpg"
  },
  {
    "url": "static/1360c5b262cb5c36b9059a81e1ba8df4/59e89/burning-ritual-play-02.jpg"
  },
  {
    "url": "static/1360c5b262cb5c36b9059a81e1ba8df4/5b147/burning-ritual-play-02.jpg"
  },
  {
    "url": "static/1360c5b262cb5c36b9059a81e1ba8df4/5d440/burning-ritual-play-02.jpg"
  },
  {
    "url": "static/1360c5b262cb5c36b9059a81e1ba8df4/70281/burning-ritual-play-02.jpg"
  },
  {
    "url": "static/1360c5b262cb5c36b9059a81e1ba8df4/7223d/burning-ritual-play-02.jpg"
  },
  {
    "url": "static/1360c5b262cb5c36b9059a81e1ba8df4/8674f/burning-ritual-play-02.jpg"
  },
  {
    "url": "static/1360c5b262cb5c36b9059a81e1ba8df4/9352a/burning-ritual-play-02.jpg"
  },
  {
    "url": "static/1360c5b262cb5c36b9059a81e1ba8df4/93753/burning-ritual-play-02.jpg"
  },
  {
    "url": "static/1360c5b262cb5c36b9059a81e1ba8df4/bfaba/burning-ritual-play-02.jpg"
  },
  {
    "url": "static/1360c5b262cb5c36b9059a81e1ba8df4/c26c2/burning-ritual-play-02.jpg"
  },
  {
    "url": "static/1360c5b262cb5c36b9059a81e1ba8df4/e2c05/burning-ritual-play-02.jpg"
  },
  {
    "url": "static/1360c5b262cb5c36b9059a81e1ba8df4/ef4af/burning-ritual-play-02.jpg"
  },
  {
    "url": "static/169cf4ee39097006f1d85d28289608a8/0cfb8/mysteryphone-banner.jpg"
  },
  {
    "url": "static/169cf4ee39097006f1d85d28289608a8/10245/mysteryphone-banner.jpg"
  },
  {
    "url": "static/169cf4ee39097006f1d85d28289608a8/4f15e/mysteryphone-banner.jpg"
  },
  {
    "url": "static/169cf4ee39097006f1d85d28289608a8/5b147/mysteryphone-banner.jpg"
  },
  {
    "url": "static/169cf4ee39097006f1d85d28289608a8/5d440/mysteryphone-banner.jpg"
  },
  {
    "url": "static/169cf4ee39097006f1d85d28289608a8/70281/mysteryphone-banner.jpg"
  },
  {
    "url": "static/169cf4ee39097006f1d85d28289608a8/8674f/mysteryphone-banner.jpg"
  },
  {
    "url": "static/169cf4ee39097006f1d85d28289608a8/9352a/mysteryphone-banner.jpg"
  },
  {
    "url": "static/169cf4ee39097006f1d85d28289608a8/93753/mysteryphone-banner.jpg"
  },
  {
    "url": "static/169cf4ee39097006f1d85d28289608a8/bfaba/mysteryphone-banner.jpg"
  },
  {
    "url": "static/169cf4ee39097006f1d85d28289608a8/e2c05/mysteryphone-banner.jpg"
  },
  {
    "url": "static/169cf4ee39097006f1d85d28289608a8/ef4af/mysteryphone-banner.jpg"
  },
  {
    "url": "static/18f4cf9d3e45a62a8ed8bd0c0cd11775/0cfb8/mini-mini-dragon-golf-01.jpg"
  },
  {
    "url": "static/18f4cf9d3e45a62a8ed8bd0c0cd11775/10245/mini-mini-dragon-golf-01.jpg"
  },
  {
    "url": "static/18f4cf9d3e45a62a8ed8bd0c0cd11775/4f15e/mini-mini-dragon-golf-01.jpg"
  },
  {
    "url": "static/18f4cf9d3e45a62a8ed8bd0c0cd11775/5d440/mini-mini-dragon-golf-01.jpg"
  },
  {
    "url": "static/18f4cf9d3e45a62a8ed8bd0c0cd11775/70281/mini-mini-dragon-golf-01.jpg"
  },
  {
    "url": "static/18f4cf9d3e45a62a8ed8bd0c0cd11775/8674f/mini-mini-dragon-golf-01.jpg"
  },
  {
    "url": "static/18f4cf9d3e45a62a8ed8bd0c0cd11775/8ce7d/mini-mini-dragon-golf-01.jpg"
  },
  {
    "url": "static/18f4cf9d3e45a62a8ed8bd0c0cd11775/93753/mini-mini-dragon-golf-01.jpg"
  },
  {
    "url": "static/18f4cf9d3e45a62a8ed8bd0c0cd11775/a2a79/mini-mini-dragon-golf-01.jpg"
  },
  {
    "url": "static/18f4cf9d3e45a62a8ed8bd0c0cd11775/bfaba/mini-mini-dragon-golf-01.jpg"
  },
  {
    "url": "static/18f4cf9d3e45a62a8ed8bd0c0cd11775/e2c05/mini-mini-dragon-golf-01.jpg"
  },
  {
    "url": "static/1daa1e2b4589ed30000ccd1c03fc4f43/0cfb8/dark-side-of-balloon-grid.jpg"
  },
  {
    "url": "static/1daa1e2b4589ed30000ccd1c03fc4f43/10245/dark-side-of-balloon-grid.jpg"
  },
  {
    "url": "static/1daa1e2b4589ed30000ccd1c03fc4f43/4f15e/dark-side-of-balloon-grid.jpg"
  },
  {
    "url": "static/1daa1e2b4589ed30000ccd1c03fc4f43/5d440/dark-side-of-balloon-grid.jpg"
  },
  {
    "url": "static/1daa1e2b4589ed30000ccd1c03fc4f43/70281/dark-side-of-balloon-grid.jpg"
  },
  {
    "url": "static/1daa1e2b4589ed30000ccd1c03fc4f43/8674f/dark-side-of-balloon-grid.jpg"
  },
  {
    "url": "static/1daa1e2b4589ed30000ccd1c03fc4f43/93753/dark-side-of-balloon-grid.jpg"
  },
  {
    "url": "static/1daa1e2b4589ed30000ccd1c03fc4f43/bfaba/dark-side-of-balloon-grid.jpg"
  },
  {
    "url": "static/1daa1e2b4589ed30000ccd1c03fc4f43/c9430/dark-side-of-balloon-grid.jpg"
  },
  {
    "url": "static/1daa1e2b4589ed30000ccd1c03fc4f43/e2c05/dark-side-of-balloon-grid.jpg"
  },
  {
    "url": "static/1daa1e2b4589ed30000ccd1c03fc4f43/f605f/dark-side-of-balloon-grid.jpg"
  },
  {
    "url": "static/1f30a73b7503b61c7643d25ae9d42c53/0cfb8/cute-em-up-screenshot-01.jpg"
  },
  {
    "url": "static/1f30a73b7503b61c7643d25ae9d42c53/10245/cute-em-up-screenshot-01.jpg"
  },
  {
    "url": "static/1f30a73b7503b61c7643d25ae9d42c53/4f15e/cute-em-up-screenshot-01.jpg"
  },
  {
    "url": "static/1f30a73b7503b61c7643d25ae9d42c53/5b147/cute-em-up-screenshot-01.jpg"
  },
  {
    "url": "static/1f30a73b7503b61c7643d25ae9d42c53/5d440/cute-em-up-screenshot-01.jpg"
  },
  {
    "url": "static/1f30a73b7503b61c7643d25ae9d42c53/70281/cute-em-up-screenshot-01.jpg"
  },
  {
    "url": "static/1f30a73b7503b61c7643d25ae9d42c53/8674f/cute-em-up-screenshot-01.jpg"
  },
  {
    "url": "static/1f30a73b7503b61c7643d25ae9d42c53/9352a/cute-em-up-screenshot-01.jpg"
  },
  {
    "url": "static/1f30a73b7503b61c7643d25ae9d42c53/93753/cute-em-up-screenshot-01.jpg"
  },
  {
    "url": "static/1f30a73b7503b61c7643d25ae9d42c53/bfaba/cute-em-up-screenshot-01.jpg"
  },
  {
    "url": "static/1f30a73b7503b61c7643d25ae9d42c53/e2c05/cute-em-up-screenshot-01.jpg"
  },
  {
    "url": "static/1f30a73b7503b61c7643d25ae9d42c53/ef4af/cute-em-up-screenshot-01.jpg"
  },
  {
    "url": "static/317ff379aa192026ede418983cbd0d2a/0cfb8/tank-top-banner.jpg"
  },
  {
    "url": "static/317ff379aa192026ede418983cbd0d2a/10245/tank-top-banner.jpg"
  },
  {
    "url": "static/317ff379aa192026ede418983cbd0d2a/4f15e/tank-top-banner.jpg"
  },
  {
    "url": "static/317ff379aa192026ede418983cbd0d2a/5d440/tank-top-banner.jpg"
  },
  {
    "url": "static/317ff379aa192026ede418983cbd0d2a/70281/tank-top-banner.jpg"
  },
  {
    "url": "static/317ff379aa192026ede418983cbd0d2a/8674f/tank-top-banner.jpg"
  },
  {
    "url": "static/317ff379aa192026ede418983cbd0d2a/93753/tank-top-banner.jpg"
  },
  {
    "url": "static/317ff379aa192026ede418983cbd0d2a/bfaba/tank-top-banner.jpg"
  },
  {
    "url": "static/317ff379aa192026ede418983cbd0d2a/c26c2/tank-top-banner.jpg"
  },
  {
    "url": "static/317ff379aa192026ede418983cbd0d2a/e2c05/tank-top-banner.jpg"
  },
  {
    "url": "static/317ff379aa192026ede418983cbd0d2a/ef4af/tank-top-banner.jpg"
  },
  {
    "url": "static/32db04da6d2e9767d1ba3454420e1b9a/4e109/burning-ritual-play-05.jpg"
  },
  {
    "url": "static/32db04da6d2e9767d1ba3454420e1b9a/59e89/burning-ritual-play-05.jpg"
  },
  {
    "url": "static/32db04da6d2e9767d1ba3454420e1b9a/5d440/burning-ritual-play-05.jpg"
  },
  {
    "url": "static/32db04da6d2e9767d1ba3454420e1b9a/7223d/burning-ritual-play-05.jpg"
  },
  {
    "url": "static/32db04da6d2e9767d1ba3454420e1b9a/9352a/burning-ritual-play-05.jpg"
  },
  {
    "url": "static/32db04da6d2e9767d1ba3454420e1b9a/c26c2/burning-ritual-play-05.jpg"
  },
  {
    "url": "static/412d7bd485d494170f2a324e0e59bfb5/0cfb8/convergence-bad-guys-title.jpg"
  },
  {
    "url": "static/412d7bd485d494170f2a324e0e59bfb5/10245/convergence-bad-guys-title.jpg"
  },
  {
    "url": "static/412d7bd485d494170f2a324e0e59bfb5/4f15e/convergence-bad-guys-title.jpg"
  },
  {
    "url": "static/412d7bd485d494170f2a324e0e59bfb5/5b147/convergence-bad-guys-title.jpg"
  },
  {
    "url": "static/412d7bd485d494170f2a324e0e59bfb5/5d440/convergence-bad-guys-title.jpg"
  },
  {
    "url": "static/412d7bd485d494170f2a324e0e59bfb5/70281/convergence-bad-guys-title.jpg"
  },
  {
    "url": "static/412d7bd485d494170f2a324e0e59bfb5/8674f/convergence-bad-guys-title.jpg"
  },
  {
    "url": "static/412d7bd485d494170f2a324e0e59bfb5/9352a/convergence-bad-guys-title.jpg"
  },
  {
    "url": "static/412d7bd485d494170f2a324e0e59bfb5/93753/convergence-bad-guys-title.jpg"
  },
  {
    "url": "static/412d7bd485d494170f2a324e0e59bfb5/bfaba/convergence-bad-guys-title.jpg"
  },
  {
    "url": "static/412d7bd485d494170f2a324e0e59bfb5/e2c05/convergence-bad-guys-title.jpg"
  },
  {
    "url": "static/412d7bd485d494170f2a324e0e59bfb5/ef4af/convergence-bad-guys-title.jpg"
  },
  {
    "url": "static/4fc0dc4357d384ea2788035d3e426b78/4e109/burning-ritual-play-01.jpg"
  },
  {
    "url": "static/4fc0dc4357d384ea2788035d3e426b78/59e89/burning-ritual-play-01.jpg"
  },
  {
    "url": "static/4fc0dc4357d384ea2788035d3e426b78/5d440/burning-ritual-play-01.jpg"
  },
  {
    "url": "static/4fc0dc4357d384ea2788035d3e426b78/7223d/burning-ritual-play-01.jpg"
  },
  {
    "url": "static/4fc0dc4357d384ea2788035d3e426b78/9352a/burning-ritual-play-01.jpg"
  },
  {
    "url": "static/4fc0dc4357d384ea2788035d3e426b78/c26c2/burning-ritual-play-01.jpg"
  },
  {
    "url": "static/522969c8a1fafc6ad224cc12593a5149/0cfb8/q-car.jpg"
  },
  {
    "url": "static/522969c8a1fafc6ad224cc12593a5149/10245/q-car.jpg"
  },
  {
    "url": "static/522969c8a1fafc6ad224cc12593a5149/4f15e/q-car.jpg"
  },
  {
    "url": "static/522969c8a1fafc6ad224cc12593a5149/5b147/q-car.jpg"
  },
  {
    "url": "static/522969c8a1fafc6ad224cc12593a5149/5d440/q-car.jpg"
  },
  {
    "url": "static/522969c8a1fafc6ad224cc12593a5149/70281/q-car.jpg"
  },
  {
    "url": "static/522969c8a1fafc6ad224cc12593a5149/8674f/q-car.jpg"
  },
  {
    "url": "static/522969c8a1fafc6ad224cc12593a5149/9352a/q-car.jpg"
  },
  {
    "url": "static/522969c8a1fafc6ad224cc12593a5149/93753/q-car.jpg"
  },
  {
    "url": "static/522969c8a1fafc6ad224cc12593a5149/bfaba/q-car.jpg"
  },
  {
    "url": "static/522969c8a1fafc6ad224cc12593a5149/e2c05/q-car.jpg"
  },
  {
    "url": "static/522969c8a1fafc6ad224cc12593a5149/ef4af/q-car.jpg"
  },
  {
    "url": "static/675739b2de93f25d3a601f9270dee715/0cfb8/mathematical-banner.jpg"
  },
  {
    "url": "static/675739b2de93f25d3a601f9270dee715/10245/mathematical-banner.jpg"
  },
  {
    "url": "static/675739b2de93f25d3a601f9270dee715/4f15e/mathematical-banner.jpg"
  },
  {
    "url": "static/675739b2de93f25d3a601f9270dee715/5d440/mathematical-banner.jpg"
  },
  {
    "url": "static/675739b2de93f25d3a601f9270dee715/70281/mathematical-banner.jpg"
  },
  {
    "url": "static/675739b2de93f25d3a601f9270dee715/8674f/mathematical-banner.jpg"
  },
  {
    "url": "static/675739b2de93f25d3a601f9270dee715/93753/mathematical-banner.jpg"
  },
  {
    "url": "static/675739b2de93f25d3a601f9270dee715/bfaba/mathematical-banner.jpg"
  },
  {
    "url": "static/675739b2de93f25d3a601f9270dee715/c26c2/mathematical-banner.jpg"
  },
  {
    "url": "static/675739b2de93f25d3a601f9270dee715/e2c05/mathematical-banner.jpg"
  },
  {
    "url": "static/675739b2de93f25d3a601f9270dee715/ef4af/mathematical-banner.jpg"
  },
  {
    "url": "static/768ec9597e62bf41852149c6b9971d51/0cfb8/dyscourse-banner.jpg"
  },
  {
    "url": "static/768ec9597e62bf41852149c6b9971d51/10245/dyscourse-banner.jpg"
  },
  {
    "url": "static/768ec9597e62bf41852149c6b9971d51/4f15e/dyscourse-banner.jpg"
  },
  {
    "url": "static/768ec9597e62bf41852149c6b9971d51/5d440/dyscourse-banner.jpg"
  },
  {
    "url": "static/768ec9597e62bf41852149c6b9971d51/70281/dyscourse-banner.jpg"
  },
  {
    "url": "static/768ec9597e62bf41852149c6b9971d51/8674f/dyscourse-banner.jpg"
  },
  {
    "url": "static/768ec9597e62bf41852149c6b9971d51/93753/dyscourse-banner.jpg"
  },
  {
    "url": "static/768ec9597e62bf41852149c6b9971d51/bfaba/dyscourse-banner.jpg"
  },
  {
    "url": "static/768ec9597e62bf41852149c6b9971d51/c9430/dyscourse-banner.jpg"
  },
  {
    "url": "static/768ec9597e62bf41852149c6b9971d51/e2c05/dyscourse-banner.jpg"
  },
  {
    "url": "static/768ec9597e62bf41852149c6b9971d51/f605f/dyscourse-banner.jpg"
  },
  {
    "url": "static/786f969667e66bb1ae4a7cb0242bf023/0cfb8/choosatron-wood-01.jpg"
  },
  {
    "url": "static/786f969667e66bb1ae4a7cb0242bf023/10245/choosatron-wood-01.jpg"
  },
  {
    "url": "static/786f969667e66bb1ae4a7cb0242bf023/4f15e/choosatron-wood-01.jpg"
  },
  {
    "url": "static/786f969667e66bb1ae4a7cb0242bf023/5b147/choosatron-wood-01.jpg"
  },
  {
    "url": "static/786f969667e66bb1ae4a7cb0242bf023/5d440/choosatron-wood-01.jpg"
  },
  {
    "url": "static/786f969667e66bb1ae4a7cb0242bf023/70281/choosatron-wood-01.jpg"
  },
  {
    "url": "static/786f969667e66bb1ae4a7cb0242bf023/8674f/choosatron-wood-01.jpg"
  },
  {
    "url": "static/786f969667e66bb1ae4a7cb0242bf023/9352a/choosatron-wood-01.jpg"
  },
  {
    "url": "static/786f969667e66bb1ae4a7cb0242bf023/93753/choosatron-wood-01.jpg"
  },
  {
    "url": "static/786f969667e66bb1ae4a7cb0242bf023/bfaba/choosatron-wood-01.jpg"
  },
  {
    "url": "static/786f969667e66bb1ae4a7cb0242bf023/e2c05/choosatron-wood-01.jpg"
  },
  {
    "url": "static/786f969667e66bb1ae4a7cb0242bf023/ef4af/choosatron-wood-01.jpg"
  },
  {
    "url": "static/78d41ed38e971de0d078faf4caa8cb45/0cfb8/cosmo-casino-grid.jpg"
  },
  {
    "url": "static/78d41ed38e971de0d078faf4caa8cb45/10245/cosmo-casino-grid.jpg"
  },
  {
    "url": "static/78d41ed38e971de0d078faf4caa8cb45/4f15e/cosmo-casino-grid.jpg"
  },
  {
    "url": "static/78d41ed38e971de0d078faf4caa8cb45/5d440/cosmo-casino-grid.jpg"
  },
  {
    "url": "static/78d41ed38e971de0d078faf4caa8cb45/70281/cosmo-casino-grid.jpg"
  },
  {
    "url": "static/78d41ed38e971de0d078faf4caa8cb45/8674f/cosmo-casino-grid.jpg"
  },
  {
    "url": "static/78d41ed38e971de0d078faf4caa8cb45/93753/cosmo-casino-grid.jpg"
  },
  {
    "url": "static/78d41ed38e971de0d078faf4caa8cb45/bfaba/cosmo-casino-grid.jpg"
  },
  {
    "url": "static/78d41ed38e971de0d078faf4caa8cb45/c9430/cosmo-casino-grid.jpg"
  },
  {
    "url": "static/78d41ed38e971de0d078faf4caa8cb45/e2c05/cosmo-casino-grid.jpg"
  },
  {
    "url": "static/78d41ed38e971de0d078faf4caa8cb45/f605f/cosmo-casino-grid.jpg"
  },
  {
    "url": "static/7a6003236ab9ceac120f00ea78bb3bba/4e109/burning-ritual-play-04.jpg"
  },
  {
    "url": "static/7a6003236ab9ceac120f00ea78bb3bba/59e89/burning-ritual-play-04.jpg"
  },
  {
    "url": "static/7a6003236ab9ceac120f00ea78bb3bba/5d440/burning-ritual-play-04.jpg"
  },
  {
    "url": "static/7a6003236ab9ceac120f00ea78bb3bba/7223d/burning-ritual-play-04.jpg"
  },
  {
    "url": "static/7a6003236ab9ceac120f00ea78bb3bba/9352a/burning-ritual-play-04.jpg"
  },
  {
    "url": "static/7a6003236ab9ceac120f00ea78bb3bba/c26c2/burning-ritual-play-04.jpg"
  },
  {
    "url": "static/8ac609151ce44ee440b0a169bc88da83/0cfb8/please-stand-by-grid.jpg"
  },
  {
    "url": "static/8ac609151ce44ee440b0a169bc88da83/10245/please-stand-by-grid.jpg"
  },
  {
    "url": "static/8ac609151ce44ee440b0a169bc88da83/4f15e/please-stand-by-grid.jpg"
  },
  {
    "url": "static/8ac609151ce44ee440b0a169bc88da83/5d440/please-stand-by-grid.jpg"
  },
  {
    "url": "static/8ac609151ce44ee440b0a169bc88da83/70281/please-stand-by-grid.jpg"
  },
  {
    "url": "static/8ac609151ce44ee440b0a169bc88da83/8674f/please-stand-by-grid.jpg"
  },
  {
    "url": "static/8ac609151ce44ee440b0a169bc88da83/93753/please-stand-by-grid.jpg"
  },
  {
    "url": "static/8ac609151ce44ee440b0a169bc88da83/bfaba/please-stand-by-grid.jpg"
  },
  {
    "url": "static/8ac609151ce44ee440b0a169bc88da83/c9430/please-stand-by-grid.jpg"
  },
  {
    "url": "static/8ac609151ce44ee440b0a169bc88da83/e2c05/please-stand-by-grid.jpg"
  },
  {
    "url": "static/8ac609151ce44ee440b0a169bc88da83/f605f/please-stand-by-grid.jpg"
  },
  {
    "url": "static/8b432b6445c449a3978911695e251762/4e109/burning-ritual-melted-candle.jpg"
  },
  {
    "url": "static/8b432b6445c449a3978911695e251762/59e89/burning-ritual-melted-candle.jpg"
  },
  {
    "url": "static/8b432b6445c449a3978911695e251762/5d440/burning-ritual-melted-candle.jpg"
  },
  {
    "url": "static/8b432b6445c449a3978911695e251762/7223d/burning-ritual-melted-candle.jpg"
  },
  {
    "url": "static/8b432b6445c449a3978911695e251762/c26c2/burning-ritual-melted-candle.jpg"
  },
  {
    "url": "static/8c3bc600b4a0195300d512a8bde25b8e/4e109/burning-ritual-candles.jpg"
  },
  {
    "url": "static/8c3bc600b4a0195300d512a8bde25b8e/59e89/burning-ritual-candles.jpg"
  },
  {
    "url": "static/8c3bc600b4a0195300d512a8bde25b8e/5d440/burning-ritual-candles.jpg"
  },
  {
    "url": "static/8c3bc600b4a0195300d512a8bde25b8e/7223d/burning-ritual-candles.jpg"
  },
  {
    "url": "static/8c3bc600b4a0195300d512a8bde25b8e/c26c2/burning-ritual-candles.jpg"
  },
  {
    "url": "static/8cb87f79ad579141f6bd139991d0ecad/255e3/afterglow-proto.jpg"
  },
  {
    "url": "static/8cb87f79ad579141f6bd139991d0ecad/4e109/afterglow-proto.jpg"
  },
  {
    "url": "static/8cb87f79ad579141f6bd139991d0ecad/59e89/afterglow-proto.jpg"
  },
  {
    "url": "static/8cb87f79ad579141f6bd139991d0ecad/5d440/afterglow-proto.jpg"
  },
  {
    "url": "static/8cb87f79ad579141f6bd139991d0ecad/7223d/afterglow-proto.jpg"
  },
  {
    "url": "static/8cb87f79ad579141f6bd139991d0ecad/7a47b/afterglow-proto.jpg"
  },
  {
    "url": "static/8cb87f79ad579141f6bd139991d0ecad/7cf8a/afterglow-proto.jpg"
  },
  {
    "url": "static/8cb87f79ad579141f6bd139991d0ecad/aebdd/afterglow-proto.jpg"
  },
  {
    "url": "static/8cb87f79ad579141f6bd139991d0ecad/b4791/afterglow-proto.jpg"
  },
  {
    "url": "static/8cb87f79ad579141f6bd139991d0ecad/c26c2/afterglow-proto.jpg"
  },
  {
    "url": "static/8cb87f79ad579141f6bd139991d0ecad/d7667/afterglow-proto.jpg"
  },
  {
    "url": "static/8e99ff7769314e823471f1e12d06b222/4e109/burning-ritual-setup.jpg"
  },
  {
    "url": "static/8e99ff7769314e823471f1e12d06b222/59e89/burning-ritual-setup.jpg"
  },
  {
    "url": "static/8e99ff7769314e823471f1e12d06b222/5d440/burning-ritual-setup.jpg"
  },
  {
    "url": "static/8e99ff7769314e823471f1e12d06b222/7223d/burning-ritual-setup.jpg"
  },
  {
    "url": "static/8e99ff7769314e823471f1e12d06b222/9352a/burning-ritual-setup.jpg"
  },
  {
    "url": "static/8e99ff7769314e823471f1e12d06b222/c26c2/burning-ritual-setup.jpg"
  },
  {
    "url": "static/8ff92cdc23ccef9fcd50c21ca977a7c0/0cfb8/afterglow-red.jpg"
  },
  {
    "url": "static/8ff92cdc23ccef9fcd50c21ca977a7c0/10245/afterglow-red.jpg"
  },
  {
    "url": "static/8ff92cdc23ccef9fcd50c21ca977a7c0/255e3/afterglow-red.jpg"
  },
  {
    "url": "static/8ff92cdc23ccef9fcd50c21ca977a7c0/4e109/afterglow-red.jpg"
  },
  {
    "url": "static/8ff92cdc23ccef9fcd50c21ca977a7c0/4f15e/afterglow-red.jpg"
  },
  {
    "url": "static/8ff92cdc23ccef9fcd50c21ca977a7c0/59e89/afterglow-red.jpg"
  },
  {
    "url": "static/8ff92cdc23ccef9fcd50c21ca977a7c0/5d440/afterglow-red.jpg"
  },
  {
    "url": "static/8ff92cdc23ccef9fcd50c21ca977a7c0/70281/afterglow-red.jpg"
  },
  {
    "url": "static/8ff92cdc23ccef9fcd50c21ca977a7c0/7223d/afterglow-red.jpg"
  },
  {
    "url": "static/8ff92cdc23ccef9fcd50c21ca977a7c0/7a47b/afterglow-red.jpg"
  },
  {
    "url": "static/8ff92cdc23ccef9fcd50c21ca977a7c0/7cf8a/afterglow-red.jpg"
  },
  {
    "url": "static/8ff92cdc23ccef9fcd50c21ca977a7c0/8674f/afterglow-red.jpg"
  },
  {
    "url": "static/8ff92cdc23ccef9fcd50c21ca977a7c0/93753/afterglow-red.jpg"
  },
  {
    "url": "static/8ff92cdc23ccef9fcd50c21ca977a7c0/aebdd/afterglow-red.jpg"
  },
  {
    "url": "static/8ff92cdc23ccef9fcd50c21ca977a7c0/b4791/afterglow-red.jpg"
  },
  {
    "url": "static/8ff92cdc23ccef9fcd50c21ca977a7c0/bfaba/afterglow-red.jpg"
  },
  {
    "url": "static/8ff92cdc23ccef9fcd50c21ca977a7c0/c26c2/afterglow-red.jpg"
  },
  {
    "url": "static/8ff92cdc23ccef9fcd50c21ca977a7c0/d7667/afterglow-red.jpg"
  },
  {
    "url": "static/8ff92cdc23ccef9fcd50c21ca977a7c0/e2c05/afterglow-red.jpg"
  },
  {
    "url": "static/8ff92cdc23ccef9fcd50c21ca977a7c0/ef4af/afterglow-red.jpg"
  },
  {
    "url": "static/9535ccee782638fd697badd0de347e54/0cfb8/tiny-tombstones-puzzle.jpg"
  },
  {
    "url": "static/9535ccee782638fd697badd0de347e54/10245/tiny-tombstones-puzzle.jpg"
  },
  {
    "url": "static/9535ccee782638fd697badd0de347e54/4f15e/tiny-tombstones-puzzle.jpg"
  },
  {
    "url": "static/9535ccee782638fd697badd0de347e54/5d440/tiny-tombstones-puzzle.jpg"
  },
  {
    "url": "static/9535ccee782638fd697badd0de347e54/70281/tiny-tombstones-puzzle.jpg"
  },
  {
    "url": "static/9535ccee782638fd697badd0de347e54/8674f/tiny-tombstones-puzzle.jpg"
  },
  {
    "url": "static/9535ccee782638fd697badd0de347e54/93753/tiny-tombstones-puzzle.jpg"
  },
  {
    "url": "static/9535ccee782638fd697badd0de347e54/bfaba/tiny-tombstones-puzzle.jpg"
  },
  {
    "url": "static/9535ccee782638fd697badd0de347e54/c9430/tiny-tombstones-puzzle.jpg"
  },
  {
    "url": "static/9535ccee782638fd697badd0de347e54/e2c05/tiny-tombstones-puzzle.jpg"
  },
  {
    "url": "static/9535ccee782638fd697badd0de347e54/f605f/tiny-tombstones-puzzle.jpg"
  },
  {
    "url": "static/98933acfeebe16c79591a58375ac3919/0cfb8/nature-machn-grid.jpg"
  },
  {
    "url": "static/98933acfeebe16c79591a58375ac3919/10245/nature-machn-grid.jpg"
  },
  {
    "url": "static/98933acfeebe16c79591a58375ac3919/4f15e/nature-machn-grid.jpg"
  },
  {
    "url": "static/98933acfeebe16c79591a58375ac3919/5d440/nature-machn-grid.jpg"
  },
  {
    "url": "static/98933acfeebe16c79591a58375ac3919/70281/nature-machn-grid.jpg"
  },
  {
    "url": "static/98933acfeebe16c79591a58375ac3919/8674f/nature-machn-grid.jpg"
  },
  {
    "url": "static/98933acfeebe16c79591a58375ac3919/93753/nature-machn-grid.jpg"
  },
  {
    "url": "static/98933acfeebe16c79591a58375ac3919/bfaba/nature-machn-grid.jpg"
  },
  {
    "url": "static/98933acfeebe16c79591a58375ac3919/c9430/nature-machn-grid.jpg"
  },
  {
    "url": "static/98933acfeebe16c79591a58375ac3919/e2c05/nature-machn-grid.jpg"
  },
  {
    "url": "static/98933acfeebe16c79591a58375ac3919/f605f/nature-machn-grid.jpg"
  },
  {
    "url": "static/98dec20cc9fc70f9fd4a46ce0128373e/0cfb8/luftrausers-alt-ctrl-banner.jpg"
  },
  {
    "url": "static/98dec20cc9fc70f9fd4a46ce0128373e/10245/luftrausers-alt-ctrl-banner.jpg"
  },
  {
    "url": "static/98dec20cc9fc70f9fd4a46ce0128373e/4f15e/luftrausers-alt-ctrl-banner.jpg"
  },
  {
    "url": "static/98dec20cc9fc70f9fd4a46ce0128373e/5d440/luftrausers-alt-ctrl-banner.jpg"
  },
  {
    "url": "static/98dec20cc9fc70f9fd4a46ce0128373e/70281/luftrausers-alt-ctrl-banner.jpg"
  },
  {
    "url": "static/98dec20cc9fc70f9fd4a46ce0128373e/8674f/luftrausers-alt-ctrl-banner.jpg"
  },
  {
    "url": "static/98dec20cc9fc70f9fd4a46ce0128373e/93753/luftrausers-alt-ctrl-banner.jpg"
  },
  {
    "url": "static/98dec20cc9fc70f9fd4a46ce0128373e/bfaba/luftrausers-alt-ctrl-banner.jpg"
  },
  {
    "url": "static/98dec20cc9fc70f9fd4a46ce0128373e/e1b16/luftrausers-alt-ctrl-banner.jpg"
  },
  {
    "url": "static/98dec20cc9fc70f9fd4a46ce0128373e/e2c05/luftrausers-alt-ctrl-banner.jpg"
  },
  {
    "url": "static/98dec20cc9fc70f9fd4a46ce0128373e/ea9e8/luftrausers-alt-ctrl-banner.jpg"
  },
  {
    "url": "static/98dec20cc9fc70f9fd4a46ce0128373e/ef4af/luftrausers-alt-ctrl-banner.jpg"
  },
  {
    "url": "static/9a687820920f116ed580280d68b5b3d0/0cfb8/luftrausers-arcade-banner.jpg"
  },
  {
    "url": "static/9a687820920f116ed580280d68b5b3d0/10245/luftrausers-arcade-banner.jpg"
  },
  {
    "url": "static/9a687820920f116ed580280d68b5b3d0/4f15e/luftrausers-arcade-banner.jpg"
  },
  {
    "url": "static/9a687820920f116ed580280d68b5b3d0/5d440/luftrausers-arcade-banner.jpg"
  },
  {
    "url": "static/9a687820920f116ed580280d68b5b3d0/70281/luftrausers-arcade-banner.jpg"
  },
  {
    "url": "static/9a687820920f116ed580280d68b5b3d0/8674f/luftrausers-arcade-banner.jpg"
  },
  {
    "url": "static/9a687820920f116ed580280d68b5b3d0/93753/luftrausers-arcade-banner.jpg"
  },
  {
    "url": "static/9a687820920f116ed580280d68b5b3d0/bfaba/luftrausers-arcade-banner.jpg"
  },
  {
    "url": "static/9a687820920f116ed580280d68b5b3d0/c26c2/luftrausers-arcade-banner.jpg"
  },
  {
    "url": "static/9a687820920f116ed580280d68b5b3d0/e2c05/luftrausers-arcade-banner.jpg"
  },
  {
    "url": "static/9a687820920f116ed580280d68b5b3d0/ef4af/luftrausers-arcade-banner.jpg"
  },
  {
    "url": "static/9f0e19fc3f17c047ac65fb63938f9731/0cfb8/ghost-dentist-vr-grid.jpg"
  },
  {
    "url": "static/9f0e19fc3f17c047ac65fb63938f9731/10245/ghost-dentist-vr-grid.jpg"
  },
  {
    "url": "static/9f0e19fc3f17c047ac65fb63938f9731/4f15e/ghost-dentist-vr-grid.jpg"
  },
  {
    "url": "static/9f0e19fc3f17c047ac65fb63938f9731/5d440/ghost-dentist-vr-grid.jpg"
  },
  {
    "url": "static/9f0e19fc3f17c047ac65fb63938f9731/70281/ghost-dentist-vr-grid.jpg"
  },
  {
    "url": "static/9f0e19fc3f17c047ac65fb63938f9731/8674f/ghost-dentist-vr-grid.jpg"
  },
  {
    "url": "static/9f0e19fc3f17c047ac65fb63938f9731/93753/ghost-dentist-vr-grid.jpg"
  },
  {
    "url": "static/9f0e19fc3f17c047ac65fb63938f9731/bfaba/ghost-dentist-vr-grid.jpg"
  },
  {
    "url": "static/9f0e19fc3f17c047ac65fb63938f9731/c9430/ghost-dentist-vr-grid.jpg"
  },
  {
    "url": "static/9f0e19fc3f17c047ac65fb63938f9731/e2c05/ghost-dentist-vr-grid.jpg"
  },
  {
    "url": "static/9f0e19fc3f17c047ac65fb63938f9731/f605f/ghost-dentist-vr-grid.jpg"
  },
  {
    "url": "static/acfea34af85ab6dd4de73aefec44346d/255e3/afterglow-play.jpg"
  },
  {
    "url": "static/acfea34af85ab6dd4de73aefec44346d/4e109/afterglow-play.jpg"
  },
  {
    "url": "static/acfea34af85ab6dd4de73aefec44346d/59e89/afterglow-play.jpg"
  },
  {
    "url": "static/acfea34af85ab6dd4de73aefec44346d/5d440/afterglow-play.jpg"
  },
  {
    "url": "static/acfea34af85ab6dd4de73aefec44346d/7223d/afterglow-play.jpg"
  },
  {
    "url": "static/acfea34af85ab6dd4de73aefec44346d/7a47b/afterglow-play.jpg"
  },
  {
    "url": "static/acfea34af85ab6dd4de73aefec44346d/7cf8a/afterglow-play.jpg"
  },
  {
    "url": "static/acfea34af85ab6dd4de73aefec44346d/aebdd/afterglow-play.jpg"
  },
  {
    "url": "static/acfea34af85ab6dd4de73aefec44346d/b4791/afterglow-play.jpg"
  },
  {
    "url": "static/acfea34af85ab6dd4de73aefec44346d/c26c2/afterglow-play.jpg"
  },
  {
    "url": "static/acfea34af85ab6dd4de73aefec44346d/d7667/afterglow-play.jpg"
  },
  {
    "url": "static/afbab82335b088aa16fe9b872aab0fa9/0cfb8/channel-board.jpg"
  },
  {
    "url": "static/afbab82335b088aa16fe9b872aab0fa9/10245/channel-board.jpg"
  },
  {
    "url": "static/afbab82335b088aa16fe9b872aab0fa9/4f15e/channel-board.jpg"
  },
  {
    "url": "static/afbab82335b088aa16fe9b872aab0fa9/5b147/channel-board.jpg"
  },
  {
    "url": "static/afbab82335b088aa16fe9b872aab0fa9/5d440/channel-board.jpg"
  },
  {
    "url": "static/afbab82335b088aa16fe9b872aab0fa9/70281/channel-board.jpg"
  },
  {
    "url": "static/afbab82335b088aa16fe9b872aab0fa9/8674f/channel-board.jpg"
  },
  {
    "url": "static/afbab82335b088aa16fe9b872aab0fa9/9352a/channel-board.jpg"
  },
  {
    "url": "static/afbab82335b088aa16fe9b872aab0fa9/93753/channel-board.jpg"
  },
  {
    "url": "static/afbab82335b088aa16fe9b872aab0fa9/bfaba/channel-board.jpg"
  },
  {
    "url": "static/afbab82335b088aa16fe9b872aab0fa9/e2c05/channel-board.jpg"
  },
  {
    "url": "static/afbab82335b088aa16fe9b872aab0fa9/ef4af/channel-board.jpg"
  },
  {
    "url": "static/b0328b299cc53887a8b90f99780a8102/4e109/burning-ritual-play-03.jpg"
  },
  {
    "url": "static/b0328b299cc53887a8b90f99780a8102/59e89/burning-ritual-play-03.jpg"
  },
  {
    "url": "static/b0328b299cc53887a8b90f99780a8102/5d440/burning-ritual-play-03.jpg"
  },
  {
    "url": "static/b0328b299cc53887a8b90f99780a8102/7223d/burning-ritual-play-03.jpg"
  },
  {
    "url": "static/b0328b299cc53887a8b90f99780a8102/c26c2/burning-ritual-play-03.jpg"
  },
  {
    "url": "static/b354155118f67acb3468e4d29dfcb29c/3e561/fahrenheit-451-ray-bradbury.jpg"
  },
  {
    "url": "static/b354155118f67acb3468e4d29dfcb29c/4e109/fahrenheit-451-ray-bradbury.jpg"
  },
  {
    "url": "static/b354155118f67acb3468e4d29dfcb29c/59e89/fahrenheit-451-ray-bradbury.jpg"
  },
  {
    "url": "static/b354155118f67acb3468e4d29dfcb29c/7223d/fahrenheit-451-ray-bradbury.jpg"
  },
  {
    "url": "static/b57368fa40712308f719e7c717710043/0cfb8/dial-banner.jpg"
  },
  {
    "url": "static/b57368fa40712308f719e7c717710043/10245/dial-banner.jpg"
  },
  {
    "url": "static/b57368fa40712308f719e7c717710043/4f15e/dial-banner.jpg"
  },
  {
    "url": "static/b57368fa40712308f719e7c717710043/5d440/dial-banner.jpg"
  },
  {
    "url": "static/b57368fa40712308f719e7c717710043/70281/dial-banner.jpg"
  },
  {
    "url": "static/b57368fa40712308f719e7c717710043/8674f/dial-banner.jpg"
  },
  {
    "url": "static/b57368fa40712308f719e7c717710043/93753/dial-banner.jpg"
  },
  {
    "url": "static/b57368fa40712308f719e7c717710043/bfaba/dial-banner.jpg"
  },
  {
    "url": "static/b57368fa40712308f719e7c717710043/c26c2/dial-banner.jpg"
  },
  {
    "url": "static/b57368fa40712308f719e7c717710043/e2c05/dial-banner.jpg"
  },
  {
    "url": "static/b57368fa40712308f719e7c717710043/ef4af/dial-banner.jpg"
  },
  {
    "url": "static/b5cbf48a12b39ea73a12ccf92d285a18/0cfb8/final-retirement-saga-title.jpg"
  },
  {
    "url": "static/b5cbf48a12b39ea73a12ccf92d285a18/10245/final-retirement-saga-title.jpg"
  },
  {
    "url": "static/b5cbf48a12b39ea73a12ccf92d285a18/4f15e/final-retirement-saga-title.jpg"
  },
  {
    "url": "static/b5cbf48a12b39ea73a12ccf92d285a18/5b147/final-retirement-saga-title.jpg"
  },
  {
    "url": "static/b5cbf48a12b39ea73a12ccf92d285a18/5d440/final-retirement-saga-title.jpg"
  },
  {
    "url": "static/b5cbf48a12b39ea73a12ccf92d285a18/70281/final-retirement-saga-title.jpg"
  },
  {
    "url": "static/b5cbf48a12b39ea73a12ccf92d285a18/8674f/final-retirement-saga-title.jpg"
  },
  {
    "url": "static/b5cbf48a12b39ea73a12ccf92d285a18/9352a/final-retirement-saga-title.jpg"
  },
  {
    "url": "static/b5cbf48a12b39ea73a12ccf92d285a18/93753/final-retirement-saga-title.jpg"
  },
  {
    "url": "static/b5cbf48a12b39ea73a12ccf92d285a18/bfaba/final-retirement-saga-title.jpg"
  },
  {
    "url": "static/b5cbf48a12b39ea73a12ccf92d285a18/e2c05/final-retirement-saga-title.jpg"
  },
  {
    "url": "static/b5cbf48a12b39ea73a12ccf92d285a18/ef4af/final-retirement-saga-title.jpg"
  },
  {
    "url": "static/b897d3a81da3c15cc0e0174f73050e4e/06d9b/alice-in-puzzleland.jpg"
  },
  {
    "url": "static/b897d3a81da3c15cc0e0174f73050e4e/0cfb8/alice-in-puzzleland.jpg"
  },
  {
    "url": "static/b897d3a81da3c15cc0e0174f73050e4e/10245/alice-in-puzzleland.jpg"
  },
  {
    "url": "static/b897d3a81da3c15cc0e0174f73050e4e/4f15e/alice-in-puzzleland.jpg"
  },
  {
    "url": "static/b897d3a81da3c15cc0e0174f73050e4e/5d440/alice-in-puzzleland.jpg"
  },
  {
    "url": "static/b897d3a81da3c15cc0e0174f73050e4e/70281/alice-in-puzzleland.jpg"
  },
  {
    "url": "static/b897d3a81da3c15cc0e0174f73050e4e/8674f/alice-in-puzzleland.jpg"
  },
  {
    "url": "static/b897d3a81da3c15cc0e0174f73050e4e/93753/alice-in-puzzleland.jpg"
  },
  {
    "url": "static/b897d3a81da3c15cc0e0174f73050e4e/b9a3b/alice-in-puzzleland.jpg"
  },
  {
    "url": "static/b897d3a81da3c15cc0e0174f73050e4e/bfaba/alice-in-puzzleland.jpg"
  },
  {
    "url": "static/b897d3a81da3c15cc0e0174f73050e4e/e2c05/alice-in-puzzleland.jpg"
  },
  {
    "url": "static/b897d3a81da3c15cc0e0174f73050e4e/ef4af/alice-in-puzzleland.jpg"
  },
  {
    "url": "static/bbbc976c6c1c0343bdf10356416ff25f/37e9e/jerry-pixel-tiny.png"
  },
  {
    "url": "static/bbbc976c6c1c0343bdf10356416ff25f/ba806/jerry-pixel-tiny.png"
  },
  {
    "url": "static/bbbc976c6c1c0343bdf10356416ff25f/bcec0/jerry-pixel-tiny.png"
  },
  {
    "url": "static/bd47a7d692f5b8e6a2f5c2edb0b8ebba/0aa32/home-jerry-belich.jpg"
  },
  {
    "url": "static/bd47a7d692f5b8e6a2f5c2edb0b8ebba/4e109/home-jerry-belich.jpg"
  },
  {
    "url": "static/bd47a7d692f5b8e6a2f5c2edb0b8ebba/4f15e/home-jerry-belich.jpg"
  },
  {
    "url": "static/bd47a7d692f5b8e6a2f5c2edb0b8ebba/59e89/home-jerry-belich.jpg"
  },
  {
    "url": "static/bd47a7d692f5b8e6a2f5c2edb0b8ebba/5b147/home-jerry-belich.jpg"
  },
  {
    "url": "static/bd47a7d692f5b8e6a2f5c2edb0b8ebba/70281/home-jerry-belich.jpg"
  },
  {
    "url": "static/bd47a7d692f5b8e6a2f5c2edb0b8ebba/7223d/home-jerry-belich.jpg"
  },
  {
    "url": "static/bd47a7d692f5b8e6a2f5c2edb0b8ebba/9352a/home-jerry-belich.jpg"
  },
  {
    "url": "static/bd47a7d692f5b8e6a2f5c2edb0b8ebba/93753/home-jerry-belich.jpg"
  },
  {
    "url": "static/bd47a7d692f5b8e6a2f5c2edb0b8ebba/bfaba/home-jerry-belich.jpg"
  },
  {
    "url": "static/bd47a7d692f5b8e6a2f5c2edb0b8ebba/e2c05/home-jerry-belich.jpg"
  },
  {
    "url": "static/bd47a7d692f5b8e6a2f5c2edb0b8ebba/ef4af/home-jerry-belich.jpg"
  },
  {
    "url": "static/bdf29d58a1b7cf8241a40168d40e7657/0cfb8/alt-ctrl-award.jpg"
  },
  {
    "url": "static/bdf29d58a1b7cf8241a40168d40e7657/10245/alt-ctrl-award.jpg"
  },
  {
    "url": "static/bdf29d58a1b7cf8241a40168d40e7657/4f15e/alt-ctrl-award.jpg"
  },
  {
    "url": "static/bdf29d58a1b7cf8241a40168d40e7657/5b147/alt-ctrl-award.jpg"
  },
  {
    "url": "static/bdf29d58a1b7cf8241a40168d40e7657/5d440/alt-ctrl-award.jpg"
  },
  {
    "url": "static/bdf29d58a1b7cf8241a40168d40e7657/70281/alt-ctrl-award.jpg"
  },
  {
    "url": "static/bdf29d58a1b7cf8241a40168d40e7657/8674f/alt-ctrl-award.jpg"
  },
  {
    "url": "static/bdf29d58a1b7cf8241a40168d40e7657/9352a/alt-ctrl-award.jpg"
  },
  {
    "url": "static/bdf29d58a1b7cf8241a40168d40e7657/93753/alt-ctrl-award.jpg"
  },
  {
    "url": "static/bdf29d58a1b7cf8241a40168d40e7657/bfaba/alt-ctrl-award.jpg"
  },
  {
    "url": "static/bdf29d58a1b7cf8241a40168d40e7657/e2c05/alt-ctrl-award.jpg"
  },
  {
    "url": "static/bdf29d58a1b7cf8241a40168d40e7657/ef4af/alt-ctrl-award.jpg"
  },
  {
    "url": "static/c2f977dcc4a91475dc3a14bbd2acfbd8/0cfb8/utopia-room-grid.jpg"
  },
  {
    "url": "static/c2f977dcc4a91475dc3a14bbd2acfbd8/10245/utopia-room-grid.jpg"
  },
  {
    "url": "static/c2f977dcc4a91475dc3a14bbd2acfbd8/4f15e/utopia-room-grid.jpg"
  },
  {
    "url": "static/c2f977dcc4a91475dc3a14bbd2acfbd8/5d440/utopia-room-grid.jpg"
  },
  {
    "url": "static/c2f977dcc4a91475dc3a14bbd2acfbd8/70281/utopia-room-grid.jpg"
  },
  {
    "url": "static/c2f977dcc4a91475dc3a14bbd2acfbd8/8674f/utopia-room-grid.jpg"
  },
  {
    "url": "static/c2f977dcc4a91475dc3a14bbd2acfbd8/93753/utopia-room-grid.jpg"
  },
  {
    "url": "static/c2f977dcc4a91475dc3a14bbd2acfbd8/bfaba/utopia-room-grid.jpg"
  },
  {
    "url": "static/c2f977dcc4a91475dc3a14bbd2acfbd8/c9430/utopia-room-grid.jpg"
  },
  {
    "url": "static/c2f977dcc4a91475dc3a14bbd2acfbd8/e2c05/utopia-room-grid.jpg"
  },
  {
    "url": "static/c2f977dcc4a91475dc3a14bbd2acfbd8/f605f/utopia-room-grid.jpg"
  },
  {
    "url": "static/c443a2d1f42a918c71a3d0516f303c37/4e109/burning-ritual-play-06.jpg"
  },
  {
    "url": "static/c443a2d1f42a918c71a3d0516f303c37/59e89/burning-ritual-play-06.jpg"
  },
  {
    "url": "static/c443a2d1f42a918c71a3d0516f303c37/5d440/burning-ritual-play-06.jpg"
  },
  {
    "url": "static/c443a2d1f42a918c71a3d0516f303c37/7223d/burning-ritual-play-06.jpg"
  },
  {
    "url": "static/c443a2d1f42a918c71a3d0516f303c37/9352a/burning-ritual-play-06.jpg"
  },
  {
    "url": "static/c443a2d1f42a918c71a3d0516f303c37/c26c2/burning-ritual-play-06.jpg"
  },
  {
    "url": "static/c70ee681460cbf3ee7bb7c3cb44bd8ba/0cfb8/zig-zegg-egg.jpg"
  },
  {
    "url": "static/c70ee681460cbf3ee7bb7c3cb44bd8ba/10245/zig-zegg-egg.jpg"
  },
  {
    "url": "static/c70ee681460cbf3ee7bb7c3cb44bd8ba/4f15e/zig-zegg-egg.jpg"
  },
  {
    "url": "static/c70ee681460cbf3ee7bb7c3cb44bd8ba/5b147/zig-zegg-egg.jpg"
  },
  {
    "url": "static/c70ee681460cbf3ee7bb7c3cb44bd8ba/5d440/zig-zegg-egg.jpg"
  },
  {
    "url": "static/c70ee681460cbf3ee7bb7c3cb44bd8ba/70281/zig-zegg-egg.jpg"
  },
  {
    "url": "static/c70ee681460cbf3ee7bb7c3cb44bd8ba/8674f/zig-zegg-egg.jpg"
  },
  {
    "url": "static/c70ee681460cbf3ee7bb7c3cb44bd8ba/9352a/zig-zegg-egg.jpg"
  },
  {
    "url": "static/c70ee681460cbf3ee7bb7c3cb44bd8ba/93753/zig-zegg-egg.jpg"
  },
  {
    "url": "static/c70ee681460cbf3ee7bb7c3cb44bd8ba/bfaba/zig-zegg-egg.jpg"
  },
  {
    "url": "static/c70ee681460cbf3ee7bb7c3cb44bd8ba/e2c05/zig-zegg-egg.jpg"
  },
  {
    "url": "static/c70ee681460cbf3ee7bb7c3cb44bd8ba/ef4af/zig-zegg-egg.jpg"
  },
  {
    "url": "static/d/3771023317.json"
  },
  {
    "url": "static/de029b4c2394c72c4c71b1218c796c83/0cfb8/tastemmals-taste-em-all-sunshine-02.jpg"
  },
  {
    "url": "static/de029b4c2394c72c4c71b1218c796c83/10245/tastemmals-taste-em-all-sunshine-02.jpg"
  },
  {
    "url": "static/de029b4c2394c72c4c71b1218c796c83/4f15e/tastemmals-taste-em-all-sunshine-02.jpg"
  },
  {
    "url": "static/de029b4c2394c72c4c71b1218c796c83/5b147/tastemmals-taste-em-all-sunshine-02.jpg"
  },
  {
    "url": "static/de029b4c2394c72c4c71b1218c796c83/5d440/tastemmals-taste-em-all-sunshine-02.jpg"
  },
  {
    "url": "static/de029b4c2394c72c4c71b1218c796c83/70281/tastemmals-taste-em-all-sunshine-02.jpg"
  },
  {
    "url": "static/de029b4c2394c72c4c71b1218c796c83/8674f/tastemmals-taste-em-all-sunshine-02.jpg"
  },
  {
    "url": "static/de029b4c2394c72c4c71b1218c796c83/9352a/tastemmals-taste-em-all-sunshine-02.jpg"
  },
  {
    "url": "static/de029b4c2394c72c4c71b1218c796c83/93753/tastemmals-taste-em-all-sunshine-02.jpg"
  },
  {
    "url": "static/de029b4c2394c72c4c71b1218c796c83/bfaba/tastemmals-taste-em-all-sunshine-02.jpg"
  },
  {
    "url": "static/de029b4c2394c72c4c71b1218c796c83/e2c05/tastemmals-taste-em-all-sunshine-02.jpg"
  },
  {
    "url": "static/de029b4c2394c72c4c71b1218c796c83/ef4af/tastemmals-taste-em-all-sunshine-02.jpg"
  },
  {
    "url": "static/de220d994a2f84491956850339da8a1c/0cfb8/jerrytron-com-home.jpg"
  },
  {
    "url": "static/de220d994a2f84491956850339da8a1c/10245/jerrytron-com-home.jpg"
  },
  {
    "url": "static/de220d994a2f84491956850339da8a1c/4f15e/jerrytron-com-home.jpg"
  },
  {
    "url": "static/de220d994a2f84491956850339da8a1c/5b147/jerrytron-com-home.jpg"
  },
  {
    "url": "static/de220d994a2f84491956850339da8a1c/5d440/jerrytron-com-home.jpg"
  },
  {
    "url": "static/de220d994a2f84491956850339da8a1c/70281/jerrytron-com-home.jpg"
  },
  {
    "url": "static/de220d994a2f84491956850339da8a1c/8674f/jerrytron-com-home.jpg"
  },
  {
    "url": "static/de220d994a2f84491956850339da8a1c/9352a/jerrytron-com-home.jpg"
  },
  {
    "url": "static/de220d994a2f84491956850339da8a1c/93753/jerrytron-com-home.jpg"
  },
  {
    "url": "static/de220d994a2f84491956850339da8a1c/bfaba/jerrytron-com-home.jpg"
  },
  {
    "url": "static/de220d994a2f84491956850339da8a1c/e2c05/jerrytron-com-home.jpg"
  },
  {
    "url": "static/de220d994a2f84491956850339da8a1c/ef4af/jerrytron-com-home.jpg"
  },
  {
    "url": "static/e83931844e23f68dfa36f60e72b26f2c/0cfb8/fahrenheit-451-poster.jpg"
  },
  {
    "url": "static/e83931844e23f68dfa36f60e72b26f2c/10245/fahrenheit-451-poster.jpg"
  },
  {
    "url": "static/e83931844e23f68dfa36f60e72b26f2c/1acdc/fahrenheit-451-poster.jpg"
  },
  {
    "url": "static/e83931844e23f68dfa36f60e72b26f2c/3180b/fahrenheit-451-poster.jpg"
  },
  {
    "url": "static/e83931844e23f68dfa36f60e72b26f2c/4e109/fahrenheit-451-poster.jpg"
  },
  {
    "url": "static/e83931844e23f68dfa36f60e72b26f2c/4f15e/fahrenheit-451-poster.jpg"
  },
  {
    "url": "static/e83931844e23f68dfa36f60e72b26f2c/59e89/fahrenheit-451-poster.jpg"
  },
  {
    "url": "static/e83931844e23f68dfa36f60e72b26f2c/70281/fahrenheit-451-poster.jpg"
  },
  {
    "url": "static/e83931844e23f68dfa36f60e72b26f2c/7223d/fahrenheit-451-poster.jpg"
  },
  {
    "url": "static/e83931844e23f68dfa36f60e72b26f2c/8674f/fahrenheit-451-poster.jpg"
  },
  {
    "url": "static/e83931844e23f68dfa36f60e72b26f2c/93753/fahrenheit-451-poster.jpg"
  },
  {
    "url": "static/e83931844e23f68dfa36f60e72b26f2c/bfaba/fahrenheit-451-poster.jpg"
  },
  {
    "url": "static/ebae8962285db12fe8f27e4e38f9dab3/0cfb8/robo-mamas-cooking-kitchen-cropped.jpg"
  },
  {
    "url": "static/ebae8962285db12fe8f27e4e38f9dab3/10245/robo-mamas-cooking-kitchen-cropped.jpg"
  },
  {
    "url": "static/ebae8962285db12fe8f27e4e38f9dab3/4f15e/robo-mamas-cooking-kitchen-cropped.jpg"
  },
  {
    "url": "static/ebae8962285db12fe8f27e4e38f9dab3/5b147/robo-mamas-cooking-kitchen-cropped.jpg"
  },
  {
    "url": "static/ebae8962285db12fe8f27e4e38f9dab3/5d440/robo-mamas-cooking-kitchen-cropped.jpg"
  },
  {
    "url": "static/ebae8962285db12fe8f27e4e38f9dab3/70281/robo-mamas-cooking-kitchen-cropped.jpg"
  },
  {
    "url": "static/ebae8962285db12fe8f27e4e38f9dab3/8674f/robo-mamas-cooking-kitchen-cropped.jpg"
  },
  {
    "url": "static/ebae8962285db12fe8f27e4e38f9dab3/9352a/robo-mamas-cooking-kitchen-cropped.jpg"
  },
  {
    "url": "static/ebae8962285db12fe8f27e4e38f9dab3/93753/robo-mamas-cooking-kitchen-cropped.jpg"
  },
  {
    "url": "static/ebae8962285db12fe8f27e4e38f9dab3/bfaba/robo-mamas-cooking-kitchen-cropped.jpg"
  },
  {
    "url": "static/ebae8962285db12fe8f27e4e38f9dab3/e2c05/robo-mamas-cooking-kitchen-cropped.jpg"
  },
  {
    "url": "static/ebae8962285db12fe8f27e4e38f9dab3/ef4af/robo-mamas-cooking-kitchen-cropped.jpg"
  },
  {
    "url": "static/ee2d4061627585d19be7d6c2740984c7/0cfb8/gerry-game-won-play-01.jpg"
  },
  {
    "url": "static/ee2d4061627585d19be7d6c2740984c7/10245/gerry-game-won-play-01.jpg"
  },
  {
    "url": "static/ee2d4061627585d19be7d6c2740984c7/4f15e/gerry-game-won-play-01.jpg"
  },
  {
    "url": "static/ee2d4061627585d19be7d6c2740984c7/70281/gerry-game-won-play-01.jpg"
  },
  {
    "url": "static/ee2d4061627585d19be7d6c2740984c7/7223d/gerry-game-won-play-01.jpg"
  },
  {
    "url": "static/ee2d4061627585d19be7d6c2740984c7/93753/gerry-game-won-play-01.jpg"
  },
  {
    "url": "static/ee2d4061627585d19be7d6c2740984c7/bfaba/gerry-game-won-play-01.jpg"
  },
  {
    "url": "styles-9f40c905dcba193f90ce.js"
  },
  {
    "url": "styles-9f40c905dcba193f90ce.js.map",
    "revision": "7893363a704eadd00838c7dbc3b63785"
  },
  {
    "url": "styles.90ead3133ffae35e8c2c.css"
  },
  {
    "url": "tags/alt-ctrl/index.html",
    "revision": "5b92aef003818a2f139f6872c401c9dd"
  },
  {
    "url": "tags/animation-fx/index.html",
    "revision": "4ca4b7191e1e5c968139a8b3b1a36088"
  },
  {
    "url": "tags/client-work/index.html",
    "revision": "54803a6793bcb2e0a37cc2a173246461"
  },
  {
    "url": "tags/commissioned/index.html",
    "revision": "cca823db5df65c3b9a2506962bdec4e8"
  },
  {
    "url": "tags/crowdfunding/index.html",
    "revision": "f95bd7560a42f49a621446def7653dc7"
  },
  {
    "url": "tags/digital/index.html",
    "revision": "d00d1ac53615840ea18411239c63b582"
  },
  {
    "url": "tags/escape-room/index.html",
    "revision": "ed90ee6f966bd8f173acf15589fa8550"
  },
  {
    "url": "tags/experience-design/index.html",
    "revision": "b67f5c5391750d05f146baa187eca30c"
  },
  {
    "url": "tags/game-design/index.html",
    "revision": "6457d367372bef847f37f1ad5459d6ac"
  },
  {
    "url": "tags/game-jam/index.html",
    "revision": "53ed46db87a42a9c11729362cda9b72e"
  },
  {
    "url": "tags/gatsby/index.html",
    "revision": "474968c020537faea4db9a72118b2164"
  },
  {
    "url": "tags/index.html",
    "revision": "1d59a5695c98fa5bfed4c059cd6f4dc4"
  },
  {
    "url": "tags/installation/index.html",
    "revision": "844a019827b76d4c8e282ce8db659732"
  },
  {
    "url": "tags/interactive-fiction/index.html",
    "revision": "4e63b70aed37bd6ef80836840b46949c"
  },
  {
    "url": "tags/live-theatre/index.html",
    "revision": "ab9b6ee0caeeca601f4850f3324dfc09"
  },
  {
    "url": "tags/location-based-game/index.html",
    "revision": "f46aa2965215354dc7ee490ef51d6cb1"
  },
  {
    "url": "tags/location-based/index.html",
    "revision": "e3d28dc637fca15c8ad6ca14d0dbb0fc"
  },
  {
    "url": "tags/narrative/index.html",
    "revision": "f37ba179d457d22815149b44d00e14be"
  },
  {
    "url": "tags/physical-tech/index.html",
    "revision": "605ea314db8750ece5c80a656cd84339"
  },
  {
    "url": "tags/poetry/index.html",
    "revision": "801aa72f1e4148d544f51a30416b3a0b"
  },
  {
    "url": "tags/prototyping-for-play/index.html",
    "revision": "7e542a18a50e67af3f53e2801fddbcd2"
  },
  {
    "url": "tags/static-generation/index.html",
    "revision": "8348cb4dd586c23e3461afc3bcbaaa96"
  },
  {
    "url": "tags/tabletop/index.html",
    "revision": "387b620cec7bd6d7682d258ae63cd476"
  },
  {
    "url": "tags/test/index.html",
    "revision": "ed407246eb9ce5287dc96599263ad58b"
  },
  {
    "url": "tags/twitter/index.html",
    "revision": "830fe6b9fad17c314169f855f800055d"
  },
  {
    "url": "tags/voice-over/index.html",
    "revision": "dd50a89d698253d7cbc8a36a132cddfe"
  },
  {
    "url": "tags/vr/index.html",
    "revision": "e6c8f028e8dd5a6689102115a3c9e7fc"
  },
  {
    "url": "tags/writing/index.html",
    "revision": "9fd9db1692e88a3c49ba6d56ad65f969"
  },
  {
    "url": "webpack-runtime-83753adf8f48d26a0331.js"
  },
  {
    "url": "webpack-runtime-83753adf8f48d26a0331.js.map",
    "revision": "f8d5d60162fb54406b769220584d8e82"
  },
  {
    "url": "webpack.stats.json",
    "revision": "6c5422629029f66c5e1ea864583b82ec"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-4228c24092c388350a72.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
