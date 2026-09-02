import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    qualities: [45, 75],
    minimumCacheTTL: 2678400, // 31 days — these are static marketing photos that rarely change
    // Default imageSizes jumps 384 -> 640, overshooting fixed-width assets like
    // the Logo (max ~192px CSS width) at common 2.5-3x mobile DPR (~504-576px needed).
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 576, 640],
  },
};

export default nextConfig;
