import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function About() {
  const { t } = useTranslation('about');

  return (
    <>
      <header className="relative grid w-full place-items-center h-[30rem] pt-24">
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

      <div className="bg-white">
        <article className="max-w-screen-xl grid grid-cols-2 pt-10 mx-auto">
          <div className="px-4">
            <p className="text-lg leading-relaxed">
              Ipsum laborum exercitationem libero eveniet aliquid voluptatem
              Fugiat accusamus dolore voluptatem sunt eum repellat cumque
              Provident fugiat nisi ab hic aliquid. Sequi assumenda culpa
              deserunt temporibus perspiciatis. Itaque libero incidunt maiores
              hic id praesentium? Consequatur obcaecati officiis porro ab
              consectetur!
            </p>
            <p className="text-lg leading-relaxed">
              Ipsum laborum exercitationem libero eveniet aliquid voluptatem
              Fugiat accusamus dolore voluptatem sunt eum repellat cumque
              Provident fugiat nisi ab hic aliquid. Sequi assumenda culpa
              deserunt temporibus perspiciatis. Itaque libero incidunt maiores
              hic id praesentium? Consequatur obcaecati officiis porro ab
              consectetur!
            </p>
            <p className="text-lg leading-relaxed">
              Ipsum laborum exercitationem libero eveniet aliquid voluptatem
              Fugiat accusamus dolore voluptatem sunt eum repellat cumque
              Provident fugiat nisi ab hic aliquid. Sequi assumenda culpa
              deserunt temporibus perspiciatis. Itaque libero incidunt maiores
              hic id praesentium? Consequatur obcaecati officiis porro ab
              consectetur!
            </p>
          </div>
          <div className="px-4">
            <p>
              Ipsum laborum exercitationem libero eveniet aliquid voluptatem
              Fugiat accusamus dolore voluptatem sunt eum repellat cumque
              Provident fugiat nisi ab hic aliquid. Sequi assumenda culpa
              deserunt temporibus perspiciatis. Itaque libero incidunt maiores
              hic id praesentium? Consequatur obcaecati officiis porro ab
              consectetur!
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
