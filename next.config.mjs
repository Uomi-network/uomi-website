import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
 
/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions`` to include MDX files
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	// Optionally, add any other Next.js config below
	output: "export", // Will export all routes as static html
  // Configure the image loader to use Akamai
  images: {
    loader: "akamai",
    path: "",
		unoptimized: true
  },
};
 
const withMDX = createMDX({
	// Add markdown plugins here, as desired
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [],
	},
});
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig);