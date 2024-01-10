/** @type {import('next').NextConfig} */
const {
	withHydrationOverlay,
} = require("@builder.io/react-hydration-overlay/next");
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
			},
		],
	},
};

module.exports = nextConfig;

