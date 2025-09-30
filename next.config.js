/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        minimumCacheTTL: 60 * 60 * 24 * 60 * 1000,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            }
        ],
    },
};

export default nextConfig;
