import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // <--- Indispensable pour GitHub Pages
  images: {
    unoptimized: true,   // GitHub Pages ne supporte pas l'optimisation d'image native de Next
  },
  // Si ton projet est sur https://ton-nom.github.io/ton-depot/
  // décommente et ajuste la ligne suivante :
  // basePath: '/ton-nom-de-depot', 
};

export default nextConfig;
