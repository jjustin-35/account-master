/** @type {import('next').NextConfig} */
const secureEnv = require('secure-env');
const webpack = require('webpack');

global.env = secureEnv({secret: `blue-bird${process.env.PASSWORD}`});
const isDev = process.env.NODE_ENV !== 'production';

const env = isDev ? global.env : process.env;
const envObj = Object.keys(env).reduce((acc, key) => {
  return {
    ...acc,
    [key]: JSON.stringify(env[key]),
  }
}, {});

const nextConfig = {
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    ENV: process.env.ENV,
  },
  compiler: {
    styledComponents: { displayName: true, ssr: true },
  },
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          ...envObj,
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          ENV: JSON.stringify(process.env.ENV),
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
