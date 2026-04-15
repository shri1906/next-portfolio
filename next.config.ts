import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['github.com', 'avatars.githubusercontent.com'],
  },
  output: 'export',
  basePath: '',
};

export default nextConfig;
