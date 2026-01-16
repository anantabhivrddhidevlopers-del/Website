// next.config.mjs
export default {
  // NOTE: Removed `experimental.turbopack` (unrecognized by newer Next.js)
  // NOTE: Removed `output: 'export'` so that API routes (e.g. /api/contact) will work on Vercel.

  trailingSlash: true, // Optional: Add trailing slashes to URLs
  images: {
    unoptimized: true,
  },
};
