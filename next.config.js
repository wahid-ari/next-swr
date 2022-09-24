/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    token: "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",
    // API_URL: "http://localhost:3000",
    API_URL: "https://next-swr-lake.vercel.app",
  },
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "avatars.githubusercontent.com"],
  },
}

module.exports = nextConfig
