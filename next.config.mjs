/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placecats.com",
        port: "",
        pathname: "/neo/**",
      },
      {
        protocol: "https",
        hostname: "cdn.rescuegroups.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
