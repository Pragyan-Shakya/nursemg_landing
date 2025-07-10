import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '011403120524.neetcrack.com',
      },
    ],
  },
};

export default nextConfig;
