/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Allow Next to compile TS sources in our internal workspace packages.
  transpilePackages: [
    "@rojasreport/ui",
    "@rojasreport/seo",
    "@rojasreport/config",
  ],
};

export default nextConfig;
