/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "@phosphor-icons/react"],
  },
};

export default nextConfig;
