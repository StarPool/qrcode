importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

workbox.routing.registerRoute(
    '/qrcode',
    new workbox.strategies.NetworkFirst()
)

workbox.routing.registerRoute(
    new RegExp(/(.*\.js|.*\.css|.*\.jpg|.*\.png|.*\.ico)/),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'assets',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 20
            }),
        ],
    })
)
