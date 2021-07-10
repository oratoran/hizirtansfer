/* eslint-disable */
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import { useHMR } from '../hooks/useHMR';
import Layout from '#components/Layout';

function MyApp({ Component, pageProps }) {
  useHMR();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp);
