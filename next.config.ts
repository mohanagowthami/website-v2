// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

const nextConfig = {
  // instead of default `.next`
  experimental: {
    turbo: {
      rules: {},
    },
  },
  images: {
    domains: ['framerusercontent.com'],
  },
};

module.exports = nextConfig;
