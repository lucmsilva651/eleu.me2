import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "streak-stats.demolab.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "telegra.ph",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;