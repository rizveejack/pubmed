/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["pubmed-academy.s3.ap-southeast-1.amazonaws.com"],
  },
  async redirects() {
    return [
      {
        source: "/course/lessons",
        destination: "/course",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
