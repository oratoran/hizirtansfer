const HttpBackend = require('i18next-http-backend/cjs');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
  },
  react: {
    useSuspense: true,
  },
  use: process.browser ? [HttpBackend] : [],
};
