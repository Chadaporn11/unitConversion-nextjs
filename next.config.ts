import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        port: '',
        pathname: 'cdn.prod.website-files.com/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
