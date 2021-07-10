const { resolve } = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const { I18NextHMRPlugin } = require('i18next-hmr/plugin');
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  webpack5: true,
  webpack: (config, context) => {
    if (!context.isServer && context.dev) {
      config.plugins.push(
        new I18NextHMRPlugin({ localesDir: resolve('public/locales') })
      );
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    ['components', 'icons'].forEach((alias) => {
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias[`#${alias}`] = resolve(__dirname, `${alias}/`);
    });
    return config;
  },
};
