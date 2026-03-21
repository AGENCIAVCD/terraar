/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "instagram.fcgh51-1.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "*.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "www.romptec.com.br",
      },
      {
        protocol: "https",
        hostname: "www.locagyn.com.br",
      },
      {
        protocol: "https",
        hostname: "www.galaxcms.com.br",
      },
      {
        protocol: "https",
        hostname: "scontent-sjc6-1.cdninstagram.com",
      },
    ],
  },
};

export default nextConfig;
