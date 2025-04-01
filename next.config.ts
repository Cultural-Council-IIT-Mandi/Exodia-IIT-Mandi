import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // hostname: 'utfs.io', // allow all images 
        hostname: '**',
      },
    ]
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/i,
      loader: 'file-loader',
      options: {
        name: 'static/media/[name].[hash].[ext]', // Customize the filename pattern
      },
    });

    return config;
  },
};

export default nextConfig;
