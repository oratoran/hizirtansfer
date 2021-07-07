import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SEO from '#components/SEO';

export default function About() {
  const { t } = useTranslation('about');

  return (
    <>
      <SEO title={t('title')} />
      <header className="grid relative place-items-center pt-24 w-full h-[32rem]">
        <div
          className="absolute inset-0 bg-fixed bg-center bg z-[-5]"
          style={{
            backgroundImage: 'url("/assets/slide-1.jpeg")',
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

      <div className="py-10 text-true-gray-800 bg-white">
        <article className="grid gap-10 mx-auto max-w-screen-xl grid-rows-auto md:grid-cols-2">
          <div className="p-4">
            <span className="block mb-6 text-3xl font-semibold font-lora">
              {t('left.top.title')}
            </span>
            <p className="mb-4 text-lg leading-loose">{t('left.top.desc')}</p>
            <ul className="font-sans list-none list-inside">
              {[
                t('left.top.items.first'),
                t('left.top.items.second'),
                t('left.top.items.third'),
                t('left.top.items.fourth')
              ].map((item, idx) => (
                <li className="flex gap-2 mt-2 text-lg" key={idx + 1}>
                  <span className="font-bold text-yellow-600">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <span className="block mt-8 mb-6 text-3xl font-semibold font-lora">
              {t('left.help.title')}
            </span>
            <p className="mb-4 text-lg leading-loose">{t('left.top.desc')}</p>
            <Link href="/contact">
              <a
                type="button"
                href="/contact"
                className="inline-block py-3 px-6 mx-auto text-xl bg-yellow-400 transition-colors ease-out md:mx-0 hover:bg-true-gray-800 hover:text-yellow-400 delay-50 font-lora"
              >
                {t('left.help.cta')}
              </a>
            </Link>
          </div>
          <div className="p-4">
            <p className="mb-6 font-sans text-lg leading-loose">
              {t('right.first')}
            </p>
            <p className="mb-6 font-sans text-lg leading-loose">
              {t('right.second')}
            </p>
            <p className="mb-6 font-sans text-lg leading-loose">
              {t('right.third')}
            </p>
            <p className="mb-6 font-sans text-lg leading-loose">
              {t('right.fourth')}
            </p>
          </div>
        </article>
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['navbar', 'about', 'footer']))
  }
});
