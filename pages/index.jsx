import Head from 'next/head';
import Image from 'next/image';
import Navbar from '#components/Navbar';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <>
      <div className="grid place-items-center h-screen">
        <h1 className="text-4xl font-bold text-center">Hello, 世界！</h1>
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['navbar'])),
  },
});
