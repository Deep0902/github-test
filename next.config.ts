import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export', // Enable static HTML export for GitHub Pages
  images: {
    unoptimized: true, // Disable Image Optimization API for static export
  },
};

export default nextConfig;
