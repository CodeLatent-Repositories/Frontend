import { productionCdnPrefix } from './cdn-cofig.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: productionCdnPrefix,
  images: {
    remotePatterns: [
      {
        protocol: 'https', 
        hostname: 'media.licdn.com',
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;
