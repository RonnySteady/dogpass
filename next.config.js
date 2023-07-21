const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['images.dog.ceo'],
    hostname: ['api-ninjas.com'],

    // loader: 'default', // Add this line to specify the default loader for external images
  },
};

module.exports = nextConfig;
