/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // exportPathMap: async function() {
  //   return {
  //     "/": { page: "/" },
  //     "/test": { page: "/test" },
  //   } 
  // },
  experimental: {
    images: {
      unoptimized: true
    }
  },
}

module.exports = nextConfig
