import 'windi.css';
import '../styles/globals.css';
import Layout from '#components/Layout';
import { appWithTranslation } from 'next-i18next';
import 'swiper/swiper-bundle.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp);
