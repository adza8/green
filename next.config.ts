import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["upload.wikimedia.org", "images.unsplash.com", 'pngimg.com', 'png.pngtree.com', 'freshfruitandvegshop.com'], // allowed external image domains
  },
};
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Tells Next.js to build static HTML/CSS/JS
  images: {
    unoptimized: true, // Required by GitHub Pages since it doesn't support Next.js image optimization
  },
};

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // ...rest of your config
};

export default nextConfig;
