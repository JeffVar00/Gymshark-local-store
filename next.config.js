/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        formats: ['image/avif', 'image/webp'],
        loader: 'custom',
        loaderFile: './loader.js',
        remotePatterns: [
            {
                protocol: "https",
                hostname: "static.wixstatic.com",
            },
        ],
    },
}

module.exports = nextConfig
