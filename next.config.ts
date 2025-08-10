import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stfloristaueastdev01.blob.core.windows.net",
        port: "",
        pathname: "/web/**",
      },
    ],
  },
};

export default nextConfig;
