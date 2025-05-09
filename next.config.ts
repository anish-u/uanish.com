import type { NextConfig } from "next";

import "@/env/server";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core"],
};

export default nextConfig;
