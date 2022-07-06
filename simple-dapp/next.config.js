/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_MORALIS_APP_ID: process.env.NEXT_MORALIS_APP_ID,
    NEXT_MORALIS_SERVER_URL: process.env.NEXT_MORALIS_SERVER_URL,
  },
};

module.exports = nextConfig;
