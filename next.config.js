const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    modules: true
  },
  experimental: {
    appDir: true,
  },
  /*
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development"
  }
  */
}
module.exports = nextConfig
//module.exports = withPWA(nextConfig)
