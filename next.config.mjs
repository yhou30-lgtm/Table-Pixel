/** Static export: builds plain HTML files that Cloudflare Pages can serve. */
const base = process.env.BASE_PATH || ""; // set only for GitHub Pages sub-path hosting
const nextConfig = {
  basePath: base,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  devIndicators: false, // hides the Next.js "N" badge in dev mode
};
export default nextConfig;
