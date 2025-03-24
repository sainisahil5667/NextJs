import type { NextConfig } from "next";



const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
         hostname: "images.splash.com",
      },
    ],
  },
};



export default nextConfig;
