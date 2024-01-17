/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: "standalone",
    basePath: '',
    trailingSlash: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                pathname: "**",
            },
        ],
    },
};

module.exports = (phase, defaultConfig) => {
    return withBundleAnalyzer(defaultConfig)
}

module.exports = nextConfig