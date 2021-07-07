import { ReactYouTubeLite } from 'react-youtube-lite';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import Hero from '#components/Hero';
import SEO from '#components/SEO';
import LimoAlt from '#icons/limo_alt.svg';
import Phone from '#icons/phone_call.svg';
import Time from '#icons/time.svg';
import Seat from '#icons/seat.svg';
import PriceTag from '#icons/price_tag.svg';
import Driver from '#icons/driver.svg';
import Whatsapp from '#icons/whatsapp.svg';
import OrderForm from '#components/OrderForm';

function ServiceBox({ src, title, desc }) {
  return (
    <div className="flex gap-4 items-start p-4 text-true-gray-800">
      <img
        className="object-cover w-20 h-20 rounded-full"
        src={src}
        alt={title}
        style={{ aspectRatio: '1 / 1' }}
      />
      <div>
        <span className="block text-2xl font-medium text-yellow-200 font-lora">
          {title}
        </span>
        <span className="font-sans text-sm leading-relaxed text-true-gray-200">
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
      <div className="py-12 px-4 bg-true-gray-800">
        <div className="grid grid-rows-3 mx-auto w-full max-w-screen-lg md:grid-cols-3 md:grid-rows-1">
          <ServiceBox
            src="/assets/one.jpg"
            alt={t('services.airport.title')}
            title={t('services.airport.title')}
            desc={t('services.airport.desc')}
          />
          <ServiceBox
            src="/assets/two.jpg"
            alt={t('services.business.title')}
            title={t('services.business.title')}
            desc={t('services.business.desc')}
          />
          <ServiceBox
            src="/assets/three.jpg"
            alt={t('services.events.title')}
            title={t('services.events.title')}
            desc={t('services.business.desc')}
          />
        </div>
      </div>

      <section
        className="grid items-center py-10 px-4 mx-auto max-w-screen-xl text-true-gray-800 min-h-[32rem] grid-rows-[1fr,2fr] md:grid-cols-2 md:grid-rows-1 md:gap-6"
        style={{
          backgroundImage: "url('/assets/worldmap.png')",
          backgroundSize: 'cover',
        }}
      >
        <div className="row-start-2 row-end-3 text-center md:row-start-auto md:row-end-auto md:text-left">
          <span
            className="block mb-4 font-medium text-gray-800 font-lora text-[3.5rem]"
            style={{ lineHeight: '1.25em' }}
          >
            <span className="block text-yellow-400">{t('promo.title')}</span>
            {t('promo.subtitle')}
          </span>
          <span className="block mb-6 font-sans text-lg leading-loose text-gray-800">
            {t('promo.desc')}
          </span>
          <Link href="/services">
            <a
              href="/services"
              className="inline py-3 px-6 mx-auto text-xl bg-yellow-400 transition-colors ease-out md:mx-0 hover:bg-true-gray-800 hover:text-yellow-400 delay-50 font-lora"
            >
              {t('promo.cta')}
            </a>
          </Link>
        </div>
        <div className="row-start-1 row-end-2 p-2 bg-white shadow-lg md:row-start-auto md:row-end-auto">
          <ReactYouTubeLite
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            title="Hizirtransfer Service"
          />
        </div>
      </section>

      <section className="py-10 px-4 mx-auto bg-true-gray-800 md:min-h-[36rem]">
        <h1 className="mb-14 text-5xl font-medium text-center text-white font-lora">
          Providing <span className="text-yellow-400">The Best</span> Service
        </h1>
        <div className="grid grid-rows-2 mx-auto max-w-screen-xl h-full md:grid-cols-2 md:grid-rows-1">
          <div className="hidden relative justify-center h-full md:flex">
            <img
              className="object-cover absolute shadow-lg w-[30rem] h-[32rem]"
              src="/assets/seat.jpg"
              layout="fill"
              alt="Limousine Seat"
            />
          </div>

          <div className="flex flex-col row-start-1 row-end-3 gap-8 items-start md:row-start-auto md:row-end-auto">
            <span className="hidden text-3xl font-medium leading-relaxed text-white md:block font-lora">
              {t('features.title')}
            </span>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center text-yellow-400">
                <LimoAlt className="inline" width="2.25rem" height="2.25rem" />
                <span className="block mt-3 text-white font-lora text-md">
                  {t('features.limo')}
                </span>
              </div>
              <div className="text-center text-yellow-400">
                <Phone className="inline" width="2.25rem" height="2.25rem" />
                <span className="block mt-3 text-white font-lora text-md">
                  {t('features.phone')}
                </span>
              </div>
              <div className="text-center text-yellow-400">
                <Time className="inline" width="2.25rem" height="2.25rem" />
                <span className="block mt-3 text-white font-lora text-md">
                  {t('features.time')}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center text-yellow-400">
                <Seat className="inline" width="2.25rem" height="2.25rem" />
                <span className="block mt-3 text-white font-lora text-md">
                  {t('features.seat')}
                </span>
              </div>
              <div className="text-center text-yellow-400">
                <PriceTag className="inline" width="2.25rem" height="2.25rem" />
                <span className="block mt-3 text-white font-lora text-md">
                  {t('features.price')}
                </span>
              </div>
              <div className="text-center text-yellow-400">
                <Driver className="inline" width="2.25rem" height="2.25rem" />
                <span className="block mt-3 text-white font-lora text-md">
                  {t('features.driver')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-12 pb-10 text-true-gray-800 bg-white min-h-[32rem]">
        <div className="grid grid-rows-2 items-center mx-auto max-w-screen-xl min-h-[32rem] md:grid-rows-1 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center mx-auto max-w-lg md:h-full">
            <h1 className="mb-6 text-4xl font-medium text-center font-lora md:leading-relaxed md:text-left">
              {t('contact.title.use')}
              <span className="text-yellow-500">
                {' '}
                {t('contact.title.form')}{' '}
              </span>
              {t('contact.title.limo')}
            </h1>
            <p className="leading-loose text-center text-gray-800 md:text-left">
              {t('contact.desc')}
            </p>
            <div className="grid gap-x-6 mx-auto mt-12 text-yellow-500 grid-cols-[4rem,1fr] grid-rows-[2rem,2rem] md:mx-0">
              <Whatsapp width="4rem" height="4rem" />
              <span className="col-start-2 col-end-3 row-start-1 row-end-2 text-xl font-medium text-yellow-500 font-lora">
                {t('contact.call')}
              </span>
              <span className="col-start-2 col-end-3 row-start-2 row-end-3 text-2xl text-gray-800 font-lora">
                8-800-10-500
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="p-10 max-w-lg bg-gray-100">
              <OrderForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['navbar', 'home', 'hero', 'footer'])),
  },
});
