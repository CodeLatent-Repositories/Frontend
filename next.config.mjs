/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: 'https://custom-webpage-static-assets-production.fermion.app/6758087080313337cad7883a-custom-zip-pages/',
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
