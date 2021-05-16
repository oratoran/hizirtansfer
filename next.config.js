const WindiCSSWebpackPlugin = require('windicss-webpack-plugin').default;
const path = require('path');

module.exports = {
  future: {
    webpack5: true,
  },
  webpack: config => {
    config.plugins.push(
      new WindiCSSWebpackPlugin({
        scan: {
          dirs: ['./'],
          exclude: ['node_modules', '.git', '.next/**/*'],
        },
      })
    );
    config.resolve.alias['#components'] = path.resolve(
      __dirname,
      'components/'
    );
    return config;
  },
};
