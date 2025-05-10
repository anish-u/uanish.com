import type { NextConfig } from "next";

import "@/env/server";

const nextConfig: NextConfig = {
  devIndicators: false,
  transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core"],
  output: "standalone",
};

export default nextConfig;
