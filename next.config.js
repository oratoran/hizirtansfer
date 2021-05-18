const WindiCSSWebpackPlugin = require('windicss-webpack-plugin').default;
const path = require('path');
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.plugins.push(
      new WindiCSSWebpackPlugin({
        scan: {
          dirs: ['./'],
          exclude: ['node_modules', '.git', '.next/**/*'],
        },
      })
    );
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    ['components', 'icons'].forEach((alias) => {
      config.resolve.alias[`#${alias}`] = path.resolve(__dirname, `${alias}/`);
    });
    return config;
  },
};
