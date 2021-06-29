const path = require('path');
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  webpack5: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    ['components', 'icons'].forEach(alias => {
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias[`#${alias}`] = path.resolve(__dirname, `${alias}/`);
    });
    return config;
  }
};
