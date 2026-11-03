import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["shark-kind-barnacle.ngrok-free.app"],
  experimental: {
    agentFeedback: true,
    serverActions: {
      allowedOrigins: ["shark-kind-barnacle.ngrok-free.app", "localhost:3000"],
    },
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
