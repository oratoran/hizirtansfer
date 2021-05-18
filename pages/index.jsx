import Head from 'next/head';
import Image from 'next/image';
import Navbar from '#components/Navbar';
import Hero from '#components/Hero';
import SEO from '#components/SEO';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t } = useTranslation('home');
  return (
    <>
      <SEO title="Home" />
      <Hero />
      <div className="bg-gray-800"></div>
      <section className="max-w-screen-lg mx-auto h-[32rem] px-4 py-8">
        <p className="leading-relaxed">
          Ipsum voluptas laborum officia voluptatum a illum Nulla culpa
          consequuntur ipsum nam beatae Qui blanditiis maxime sint harum
          repellendus? Quas fuga iusto sapiente fugit harum. Rem quidem quas
          perferendis modi quas odio perferendis incidunt ipsum in sit?
          Assumenda iste inventore.
        </p>
        <p className="leading-relaxed">
          Ipsum voluptas laborum officia voluptatum a illum Nulla culpa
          consequuntur ipsum nam beatae Qui blanditiis maxime sint harum
          repellendus? Quas fuga iusto sapiente fugit harum. Rem quidem quas
          perferendis modi quas odio perferendis incidunt ipsum in sit?
          Assumenda iste inventore.
        </p>
        <p className="leading-relaxed">
          Ipsum voluptas laborum officia voluptatum a illum Nulla culpa
          consequuntur ipsum nam beatae Qui blanditiis maxime sint harum
          repellendus? Quas fuga iusto sapiente fugit harum. Rem quidem quas
          perferendis modi quas odio perferendis incidunt ipsum in sit?
          Assumenda iste inventore.
        </p>
      </section>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['home', 'navbar'])),
  },
});
