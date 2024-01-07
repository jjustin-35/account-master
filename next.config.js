/** @type {import('next').NextConfig} */
const secureEnv = require('secure-env');

global.env = secureEnv({secret: `blue-bird${process.env.PASSWORD}`});

const nextConfig = {
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    ENV: process.env.ENV,
  },
  experimental: { serverComponentsExternalPackages: ['mongoose'] },
  compiler: {
    styledComponents: { displayName: true, ssr: true },
  },
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };

    return config;
  },
};

module.exports = nextConfig;
