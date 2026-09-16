/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plain-apac-prod-public.komododecks.com' },
      { protocol: 'https', hostname: 'zemyaivf.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'webleadingindia.com' },
      { protocol: 'https', hostname: 'img.youtube.com' },
    ],
  },
};

export default nextConfig;
