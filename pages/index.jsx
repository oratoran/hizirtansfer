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
      <div className="bg-true-gray-800 px-4 py-10">
        <div className="w-full max-w-screen-lg mx-auto grid grid-cols-3">
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
      <section
        className="max-w-screen-xl mx-auto h-[32rem] px-4 py-8 flex items-center gap-6"
        style={{
          backgroundImage: "url('/assets/worldmap.png')",
          backgroundSize: 'cover',
        }}
      >
        <div className="flex-1">
          <span
            className="block font-lora text-[3.5rem] font-medium text-gray-800 mb-4"
            style={{ lineHeight: '1.25em' }}
          >
            <span className="block text-yellow-400">Luxury Cars</span>
            for Maximum Satisfacion
          </span>
          <span className="block font-sans text-lg text-gray-800 leading-loose mb-6">
            Lorem debitis praesentium consequatur dolor quisquam. Fugiat officia
            sunt quaerat atque deleniti? Molestiae deserunt similique
            consequuntur temporibus blanditiis possimus.
          </span>
          <button type="button" className="block px-6 py-3 bg-yellow-300 font-lora text-xl">
            Read More
          </button>
        </div>
        <div className="flex-1">
          <div className="p-2 bg-white shadow-lg">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['home', 'hero', 'navbar'])),
  },
});
