/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co", "firebasestorage.googleapis.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
