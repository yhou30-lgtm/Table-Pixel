/** Static export: builds plain HTML files that Cloudflare Pages can serve. */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  devIndicators: false, // hides the Next.js "N" badge in dev mode
};
export default nextConfig;
