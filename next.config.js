/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only used when CLAUDE_TEST_BUILD=1 is set (ad-hoc verification
  // builds run alongside your own `npm run dev`) so they write to a
  // separate folder instead of corrupting your dev server's .next
  // cache. Your normal `npm run dev` / `npm run build` are unaffected.
  ...(process.env.CLAUDE_TEST_BUILD ? { distDir: ".next-test" } : {}),
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
};

module.exports = nextConfig;
