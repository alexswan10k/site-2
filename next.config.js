/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function() {
    return {
      "/": { page: "/" },
      "/test": { page: "/test" },
    } 
  },
  "images": {
    "loader": "default",
  }
}

module.exports = nextConfig
