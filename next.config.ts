import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.neuroflip.com',
      },
    ],
  },
};

export default nextConfig;
