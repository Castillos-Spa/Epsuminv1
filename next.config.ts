import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "drive.google.com",
      "raw.githubusercontent.com",
      "www.epsumin.cl",
      "epsumin.cl",
      "cdn.discordapp.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
        pathname: "/uc/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        port: "",
        pathname: "/attachments/**",
      },
    ],
  },

};

export default nextConfig;
