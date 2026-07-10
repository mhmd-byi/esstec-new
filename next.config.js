/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        minimumCacheTTL: 60 * 60 * 24 * 60, // 60 days, in seconds
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            }
        ],
    },
};

export default nextConfig;
