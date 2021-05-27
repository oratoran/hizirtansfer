import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import SEO from '#components/SEO';

export default function About() {
  const { t } = useTranslation('about');

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

      <div className="bg-white py-10">
        <article className="max-w-screen-xl grid grid-rows-2 md:grid-cols-2 mx-auto">
          <div className="px-4">
            <span className="block font-lora font-semibold text-3xl mb-6">
              Every day help for our customers
            </span>
            <p className="text-lg leading-loose mb-4">
              Adipisicing inventore adipisicing sint quasi aut Dignissimos
              delectus excepturi doloribus amet eveniet Voluptates sapiente
              molestias sequi dolore reprehenderit maiores magnam? Inventore at
              nihil quam repellat fuga ipsa Quae quis blanditiis.
            </p>
            <ul className="font-sans list-none list-inside">
              {['Management', 'Analytics', 'Consultation', 'Engineering'].map(
                (item, idx) => (
                  <li className="flex gap-2 text-lg mt-2" key={idx}>
                    <span className="font-bold text-yellow-600">&#10003;</span>
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
            <span className="block font-lora font-semibold text-3xl mt-8 mb-6">
              If you need more help
            </span>
            <p className="text-lg leading-loose mb-4">
              Adipisicing inventore adipisicing sint quasi aut Dignissimos
              delectus excepturi doloribus amet eveniet Voluptates sapiente
              molestias sequi dolore.
            </p>
            <button
              type="button"
              className="block px-6 py-3 bg-yellow-400 font-lora text-xl"
            >
              Read More
            </button>
          </div>
          <div className="px-4">
            <p className="leading-loose font-sans text-lg mb-6">
              Ipsum laborum exercitationem libero eveniet aliquid voluptatem
              Fugiat accusamus dolore voluptatem sunt eum repellat cumque
              Provident fugiat nisi ab hic aliquid. Sequi assumenda culpa
              deserunt temporibus perspiciatis.
            </p>
            <p className="leading-loose font-sans text-lg mb-6">
              Ipsum laborum exercitationem libero eveniet aliquid voluptatem
              Fugiat accusamus dolore voluptatem sunt eum repellat cumque
              Provident fugiat nisi ab hic aliquid. Sequi assumenda culpa
              deserunt temporibus perspiciatis.
            </p>
            <p className="leading-loose font-sans text-lg mb-6">
              Ipsum laborum exercitationem libero eveniet aliquid voluptatem
              Fugiat accusamus dolore voluptatem sunt eum repellat cumque
              Provident fugiat nisi ab hic aliquid. Sequi assumenda culpa
              deserunt temporibus perspiciatis.
            </p>
            <p className="leading-loose font-sans text-lg mb-6">
              Ipsum laborum exercitationem libero eveniet aliquid voluptatem
              Fugiat accusamus dolore voluptatem sunt eum repellat cumque
              Provident fugiat nisi ab hic aliquid. Sequi assumenda culpa
              deserunt temporibus perspiciatis.
            </p>
          </div>
        </article>
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['navbar', 'about'])),
  },
});
