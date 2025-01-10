import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.cdn.printful.com",
        pathname: "/**",
      },
    ],
  },
};
pepe aprende

export default nextConfig;
