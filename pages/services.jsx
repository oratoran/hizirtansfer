import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import SEO from '#components/SEO';

function FeatureCard({ title, desc, img, reversed }) {
  return (
    <div
      className={`flex ${
        reversed
          ? '<md:flex-col md:flex-row-reverse'
          : '<md:flex-col md:flex-row'
      } w-full gap-8 my-10`}
    >
      <img
        className="block <md:w-full md:w-96 rounded-md shadow-lg object-cover"
        src={img}
        style={{ aspectRatio: '16/9' }}
      />
      <div className="flex flex-col justify-center gap-4">
        <h1 className="font-lora font-semibold text-2xl">{title}</h1>
        <p className="font-sans leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function TestimoniCard({ content, name, middle }) {
  return (
    <div className={`px-6 pt-10 pb-14 ${middle ? 'bg-gray-100' : ''}`}>
      <span className="block text-6xl font-lora font-bold text-yellow-400 italic">
        &quot;
      </span>
      <p className="font-sans text-gray-600">{content}</p>
      <span className="block font-medium text-gray-800 mt-10 font-lora text-md">
        {name}
      </span>
    </div>
  );
}

export default function Services() {
  const { t } = useTranslation('services');

  return (
    <>
      <SEO title={t('title')} />
      <header className="relative grid w-full place-items-center h-[32rem] pt-24">
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
            <span className="text-gray-400 font-bold text-sm">&#47;&#47;</span>
            <span className="text-white text-md">{t('title')}</span>
          </div>
        </div>
      </header>

      <section className="max-w-screen-lg mx-auto px-4 py-10">
        <FeatureCard
          title={t('showcase.first.title')}
          desc={t('showcase.first.desc')}
          img="/assets/white_seat.jpg"
        />
        <FeatureCard
          title={t('showcase.second.title')}
          desc={t('showcase.second.desc')}
          img="/assets/amber_seat.jpg"
          reversed
        />
        <FeatureCard
          title={t('showcase.third.title')}
          desc={t('showcase.third.desc')}
          img="/assets/blue_seat.jpg"
        />
        <FeatureCard
          title={t('showcase.fourth.title')}
          desc={t('showcase.fourth.desc')}
          img="/assets/brown_seat.jpg"
          reversed
        />
      </section>

      <style jsx>{`
        .title::before {
          content: '';
          position: absolute;
          left: 18rem;
          right: 18rem;
          bottom: -0.75rem;
          height: 3px;
          background-color: #e5e7eb;
        }
        .title::after {
          content: '';
          position: absolute;
          left: 25rem;
          right: 25rem;
          bottom: -0.75rem;
          height: 3px;
          background-color: #fcd34d;
        }
      `}</style>
      <div className="pt-10 pb-20 px-4 max-w-screen-lg mx-auto text-center">
        <span className="block mb-2 text-2xl font-semibold font-lora italic text-yellow-400">
          {t('testimoni.pre-title')}
        </span>
        <h1 className="title relative mb-12 text-4xl font-lora font-bold text-gray-800">
          {t('testimoni.title')}
        </h1>
        <div className="grid <md:grid-rows-3 md:grid-cols-3 gap-8 w-full">
          <TestimoniCard
            content={t('testimoni.items.first.content')}
            name={t('testimoni.items.first.name')}
          />
          <TestimoniCard
            content={t('testimoni.items.second.content')}
            name={t('testimoni.items.second.name')}
            middle
          />
          <TestimoniCard
            content={t('testimoni.items.third.content')}
            name={t('testimoni.items.third.name')}
          />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['navbar', 'services'])),
  },
});
