import type { NextConfig } from "next";

const repoName = "green"; // ⚠️ replace with your actual GitHub repo name, case-sensitive

const nextConfig: NextConfig = {
  images: {
    domains: ["upload.wikimedia.org", "images.unsplash.com", 'pngimg.com', 'png.pngtree.com', 'freshfruitandvegshop.com'],
    unoptimized: true, // Required by GitHub Pages since it doesn't support Next.js image optimization
  },
  output: 'export', // Tells Next.js to build static HTML/CSS/JS
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
