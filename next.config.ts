import type { NextConfig } from "next";

// GitHub Pages: `PAGES_BASE_PATH=/Nailangs-landing npm run build:pages` writes a static
// site to out/. Pages has no server, so images are served as-is and redirects are skipped.
const pagesBasePath = process.env.PAGES_BASE_PATH;
const isPages = pagesBasePath !== undefined;

const nextConfig: NextConfig = {
  ...(isPages && {
    output: "export",
    basePath: pagesBasePath || undefined,
    trailingSlash: true,
    env: { NEXT_PUBLIC_BASE_PATH: pagesBasePath },
  }),
  images: isPages ? { unoptimized: true } : { formats: ["image/avif", "image/webp"] },
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

if (isPages) delete nextConfig.redirects;

export default nextConfig;
