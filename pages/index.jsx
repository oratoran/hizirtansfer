import Head from 'next/head';
import Image from 'next/image';
import Navbar from '#components/Navbar';
import Hero from '#components/Hero';
import SEO from '#components/SEO';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

function ServiceBox({ src, alt, title, desc }) {
  return (
    <div className="flex items-start gap-4 p-4">
      <img
        className="rounded-full w-20 object-cover"
        src={src}
        alt="alt"
        style={{ aspectRatio: '1 / 1' }}
      />
      <div>
        <span className="block font-lora font-medium text-2xl text-yellow-200">
          {title}
        </span>
        <span className="font-sans text-sm text-true-gray-200 leading-relaxed">
          {desc}
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  const { t } = useTranslation('home');
  return (
    <>
      <SEO title="Home" />
      <Hero />

      <div className="bg-true-gray-800 p-8">
        <div className="w-full max-w-screen-lg mx-auto grid grid-cols-3">
          <ServiceBox
            src="/assets/one.jpg"
            title="Airport Transfers"
            desc=" Sit temporibus non eius voluptatum sequi eum necessitatibus minus? Quibusdam!"
          />
          <ServiceBox
            src="/assets/two.jpg"
            title="Business Transfers"
            desc=" Sit temporibus non eius voluptatum sequi eum necessitatibus minus? Quibusdam!"
          />
          <ServiceBox
            src="/assets/three.jpg"
            title="Events & Wedding"
            desc=" Sit temporibus non eius voluptatum sequi eum necessitatibus minus? Quibusdam!"
          />
        </div>
      </div>
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
