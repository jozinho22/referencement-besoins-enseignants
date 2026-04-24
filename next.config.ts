import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? "/referencement-besoins-enseignants" : "",
  assetPrefix: process.env.NODE_ENV === 'production' ? "/referencement-besoins-enseignants" : "",
  trailingSlash: true
};

export default nextConfig;