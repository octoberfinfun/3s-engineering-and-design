import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'static.wixstatic.com' }
    ]
  },
  poweredByHeader: false,
  reactStrictMode: true
};

export default nextConfig;
