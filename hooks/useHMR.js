import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';

// eslint-disable-next-line import/prefer-default-export
export function useHMR() {
  const { i18n } = useTranslation();

  if (process.env.NODE_ENV === 'development' && !process.browser) {
    // eslint-disable-next-line import/no-extraneous-dependencies
    import('i18next-hmr/server').then(({ applyServerHMR }) => {
      applyServerHMR(i18n);
    });
  }

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line import/no-extraneous-dependencies
      import('i18next-hmr/client').then(({ applyClientHMR }) => {
        applyClientHMR(i18n);
      });
    }
  }, [i18n]);
}
