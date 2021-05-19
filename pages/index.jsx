import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Hero from '#components/Hero';
import SEO from '#components/SEO';

function ServiceBox({ src, title, desc }) {
  return (
    <div className="flex items-start gap-4 p-4">
      <img
        className="rounded-full w-20 object-cover"
        src={src}
        alt={title}
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

ServiceBox.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default function Home() {
  const { t } = useTranslation('home');
  return (
    <>
      <SEO title="Home" />
      <Hero />

      <div className="bg-true-gray-800 p-8">
        <div className="w-full max-w-screen-xl mx-auto grid grid-cols-3">
          <ServiceBox
            src="/assets/one.jpg"
            alt={t('services.airport')}
            title={t('services.airport')}
            desc="Sit temporibus non eius voluptatum sequi eum necessitatibus minus? Quibusdam!"
          />
          <ServiceBox
            src="/assets/two.jpg"
            alt={t('services.business')}
            title={t('services.business')}
            desc="Sit temporibus non eius voluptatum sequi eum necessitatibus minus? Quibusdam!"
          />
          <ServiceBox
            src="/assets/three.jpg"
            alt={t('services.events')}
            title={t('services.events')}
            desc="Sit temporibus non eius voluptatum sequi eum necessitatibus minus? Quibusdam!"
          />
        </div>
      </div>
      <section className="max-w-screen-xl mx-auto h-[32rem] px-4 py-8">
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
    ...(await serverSideTranslations(locale, ['home', 'hero', 'navbar'])),
  },
});
