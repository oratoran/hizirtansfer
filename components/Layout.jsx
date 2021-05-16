import Navbar from '#components/Navbar';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      {children}
    </>
  );
}
