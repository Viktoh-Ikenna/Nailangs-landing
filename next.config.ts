import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  poweredByHeader: false,
  // Tailwind CSS v4 through its Turbopack loader (no PostCSS step).
  turbopack: {
    rules: {
      "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" },
    },
  },
  // Old WordPress addresses, so links and search results keep working.
  async redirects() {
    return [
      { source: "/features", destination: "/#features", permanent: true },
      { source: "/features-clone", destination: "/about", permanent: true },
      { source: "/nkb", destination: "/keyboard-cover", permanent: true },
      { source: "/services", destination: "/about", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/home", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
