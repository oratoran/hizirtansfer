import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import SEO from '#components/SEO';

function FeatureCard({ title, desc, img, reversed }) {
  return (
    <div
      className={`flex gap-8 my-10 w-full ${
        reversed ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'
      }`}
    >
      <img
        className="block object-cover w-full rounded-md shadow-lg md:w-96"
        src={img}
        alt={title}
        style={{ aspectRatio: '16/9' }}
      />
      <div className="flex flex-col gap-4 justify-center text-true-gray-800">
        <h1 className="text-2xl font-semibold font-lora">{title}</h1>
        <p className="font-sans leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function TestimoniCard({ content, name, middle }) {
  return (
    <div className={`px-6 pt-10 pb-14 ${middle ? 'bg-gray-100' : ''}`}>
      <span className="block text-6xl italic font-bold text-yellow-400 font-lora">
        &quot;
      </span>
      <p className="font-sans text-true-gray-600">{content}</p>
      <span className="block mt-10 font-medium text-true-gray-800 font-lora text-md">
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
      <header className="grid relative place-items-center pt-24 w-full h-[32rem]">
        <div
          className="absolute inset-0 bg-fixed bg-center bg z-[-5]"
          style={{
            backgroundImage: 'url("/assets/limo.jpg")',
            filter:
              'brightness(0.25) contrast(0.75) saturate(0.75) hue-rotate(15deg)'
          }}
        />
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl font-medium text-white font-lora">
            {t('title')}
          </h1>
          <div className="flex gap-4 justify-center items-center font-sans">
            <span className="font-medium text-yellow-400 text-md">
              {t('parent')}
            </span>
            <span className="text-sm font-bold text-gray-400">&#47;&#47;</span>
            <span className="text-white text-md">{t('title')}</span>
          </div>
        </div>
      </header>

      <section className="py-10 px-4 mx-auto max-w-screen-lg">
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
          background-color: #E6C473;
        }
      `}</style>
      <div className="px-4 pt-10 pb-20 mx-auto max-w-screen-lg text-center">
        <span className="block mb-2 text-2xl italic font-semibold text-yellow-500 font-lora">
          {t('testimoni.pre-title')}
        </span>
        <h1 className="relative mb-12 text-4xl font-bold text-gray-800 title font-lora">
          {t('testimoni.title')}
        </h1>
        <div className="grid grid-rows-3 gap-8 w-full md:grid-rows-1 md:grid-cols-3">
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
    ...(await serverSideTranslations(locale, ['navbar', 'services']))
  }
});
