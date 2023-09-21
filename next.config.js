/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
