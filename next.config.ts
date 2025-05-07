import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: { 
    remotePatterns: [ 
      { 
        protocol: 'https', 
        hostname: 'picsum.photos', 
      },
      {
        protocol: 'https',
        hostname: 'eatonqrebmdlrwesndrf.supabase.co'
      } 
    ], 
  },
  experimental: { 
    serverActions: { 
      bodySizeLimit: '5mb', // 必要に応じて値を変更 
    }, 
  },
  eslint: {
    ignoreDuringBuilds: true, // ← build時もeslintエラー無視
  },
  webpack: (config) => {
    config.externals = [...config.externals, '@prisma/client'];
    return config;
  },
};

export default nextConfig;
