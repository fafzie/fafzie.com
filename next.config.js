/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production';
const isProd = false;

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: isProd ? 'https://renebitter.github.io/' : '',
  },
};

module.exports = nextConfig;
