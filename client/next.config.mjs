/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_API_URL_SERVER_SIDE: process.env.NEXT_PUBLIC_API_URL_SERVER_SIDE,
        NEXT_PUBLIC_API_URL_CLIENT_SIDE: process.env.NEXT_PUBLIC_API_URL_CLIENT_SIDE,
    },
};

export default nextConfig;
