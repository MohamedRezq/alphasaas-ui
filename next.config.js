/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Custom rewrite for the login page
      {
        source: "/login",
        destination: "/api/auth/login",
      },
    ];
  },
};

module.exports = nextConfig;
