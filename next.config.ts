import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["upload.wikimedia.org", "images.unsplash.com", 'pngimg.com', 'png.pngtree.com', 'freshfruitandvegshop.com'],
    unoptimized: true, // Required by GitHub Pages since it doesn't support Next.js image optimization
  },
  output: 'export', // Tells Next.js to build static HTML/CSS/JS
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
