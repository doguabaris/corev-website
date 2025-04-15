import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    basePath: '/corev-website',
    assetPrefix: '/corev-website/',
};

export default nextConfig;
