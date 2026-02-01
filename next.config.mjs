// next.config.mjs
export default {
  experimental: {
    turbopack: false,  // Disable Turbopack for compatibility with `next export`
  },
  trailingSlash: true, // Optional: Add trailing slashes to URLs
  images: {
    unoptimized: true,  // Disable image optimization for static export
  },
  // Ensure that all pages are static
  output: 'export',
};