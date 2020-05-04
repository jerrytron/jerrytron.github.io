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
    "url": "webpack-runtime-045930ebe520f53c7438.js"
  },
  {
    "url": "commons-7ae0fcecb7f118fa5038.js"
  },
  {
    "url": "app-4a30414a8358c0ed82fa.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0767b214c26ab8f7729d86700a82104b"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-fd63b2ded98d7b7a7ff6.js"
  },
  {
    "url": "styles.fb50ab7acfdb8928f108.css"
  },
  {
    "url": "styles-9f40c905dcba193f90ce.js"
  },
  {
    "url": "component---src-templates-project-js-2d9281903d4b992d5691.js"
  },
  {
    "url": "page-data/projects/afterglow/page-data.json",
    "revision": "13d5404ba0ff777f281586af3d0fc02e"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "443666ef7ffb24f54d071b2fcfc7e416"
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
    "revision": "643d546825bd9e18ed105f46f2d26c54"
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
    "revision": "fbc61257078d6431ef88ded483e920f9"
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
    "url": "component---src-pages-projects-js-dad1cc85cd404f703b92.js"
  },
  {
    "url": "page-data/projects/page-data.json",
    "revision": "ff9652d6373f5e21feee7882ac1624cc"
  },
  {
    "url": "page-data/projects/jerrytron-com/page-data.json",
    "revision": "9534c5180956a9e6aecb0d7e5473e48e"
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
    "url": "component---src-templates-tag-js-62ab9ce331e0b0b9a0e8.js"
  },
  {
    "url": "page-data/tags/alt-ctrl/page-data.json",
    "revision": "0e6b27a57066d3aaea4744ac70b5fe6f"
  },
  {
    "url": "page-data/tags/animation-fx/page-data.json",
    "revision": "b0ee6f601aa571e40db44b1349ca4cef"
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
    "url": "component---src-pages-tags-js-26fbd3e51231b4363ab1.js"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "4885ec18e0d0cf2febe9688463325611"
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
    "revision": "2e22d48ef0f91a993d3b70893d7a4067"
  },
  {
    "url": "page-data/tags/location-based/page-data.json",
    "revision": "e56de9d73c84ebc69e7ff472976ae75b"
  },
  {
    "url": "page-data/tags/location-based-game/page-data.json",
    "revision": "a542c3d4ad679260e1cfbd3897a34807"
  },
  {
    "url": "page-data/tags/narrative/page-data.json",
    "revision": "bd27824b3bfaa2d68b28332ab8c50443"
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
    "url": "manifest.webmanifest",
    "revision": "79660eb263ce95ad985171577dc643e7"
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
  if (!resources || !(await caches.match(`/app-4a30414a8358c0ed82fa.js`))) {
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
