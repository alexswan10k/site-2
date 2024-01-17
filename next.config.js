/** @type {import('next').NextConfig} */
const nextConfig = {
  // assetPrefix: './',
  reactStrictMode: true,
  exportPathMap: async function() {
    return {
      "/": { page: "/" },
      "/about-us": { page: "/about-us"},
      "/test": { page: "/test" },
      "/organizator/privacy-policy": { page: "/organizator/privacy-policy" },
    } 
  },
  experimental: {
    images: {
      unoptimized: true
    }
  },
}

module.exports = nextConfig
