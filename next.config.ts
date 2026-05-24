import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/online-shop',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
