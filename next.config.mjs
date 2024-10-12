import withMDX from "@next/mdx";

const mainMDX = withMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.hecvatpro.com"],
  },
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

export default mainMDX(nextConfig);
