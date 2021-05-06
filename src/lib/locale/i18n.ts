import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('$lib/locale/data/en.json'));
register('en-US', () => import('$lib/locale/data/en.json'));
register('tr', () => import('$lib/locale/data/tr.json'));

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});
