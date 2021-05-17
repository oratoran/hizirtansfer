import Head from 'next/head';
import Image from 'next/image';
import Navbar from '#components/Navbar';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t } = useTranslation('home');
  return (
    <>
      <header className="relative grid w-full place-items-center h-[34rem] pt-24">
        <div
          className="bg bg-fixed bg-center absolute inset-0 -z-5"
          style={{
            backgroundImage: 'url("/assets/limo.jpg")',
            filter:
              'brightness(0.25) contrast(0.75) saturate(0.75) hue-rotate(15deg)',
          }}
        />
        <div className="flex flex-col gap-6">
          <h1 className="font-lora font-medium text-6xl text-white">
            {t('title')}
          </h1>
          <div className="flex items-center justify-center gap-4 font-sans">
            <span className="text-amber-300 font-medium text-md">
              {t('parent')}
            </span>
            <span className="text-gray-400 font-bold text-sm">{'//'}</span>
            <span className="text-white text-md">{t('title')}</span>
          </div>
        </div>
      </header>
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
