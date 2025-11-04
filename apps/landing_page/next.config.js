/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",         // where the service worker & assets are generated
  register: true,         // auto register the service worker
  skipWaiting: true,      // activate new SW immediately
  disable: process.env.NODE_ENV === "development", // disable PWA in dev
});

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "api.vetone.cafesiran.ir",
      "api.vet-one.ir",
      "trustseal.enamad.ir",
    ],
  },
};

module.exports = withPWA(nextConfig);
