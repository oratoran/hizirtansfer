import { ReactYouTubeLite } from 'react-youtube-lite';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import Hero from '#components/Hero';
import SEO from '#components/SEO';
import Limo from '#icons/limo.svg';
import LimoAlt from '#icons/limo_alt.svg';
import Phone from '#icons/phone_call.svg';
import Time from '#icons/time.svg';
import Seat from '#icons/seat.svg';
import PriceTag from '#icons/price_tag.svg';
import Driver from '#icons/driver.svg';
import Whatsapp from '#icons/whatsapp.svg';
import Clock from '#icons/clock.svg';
import Location from '#icons/location.svg';
import Date from '#icons/date.svg';
import People from '#icons/people.svg';

function ServiceBox({ src, title, desc }) {
  return (
    <div className="flex items-start gap-4 p-4 text-true-gray-800">
      <img
        className="rounded-full w-20 h-20 object-cover"
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

export default function Home() {
  const { t } = useTranslation('home');
  return (
    <>
      <SEO title="Home" />
      <Hero />
      <div className="bg-true-gray-800 px-4 py-10">
        <div className="w-full max-w-screen-lg mx-auto grid grid-rows-3 md:grid-cols-3 md:grid-rows-1">
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
        className="max-w-screen-xl mx-auto min-h-[32rem] px-4 py-10 grid grid-rows-[1fr,2fr] md:grid-cols-2 md:grid-rows-1 items-center md:gap-6 text-true-gray-800"
        style={{
          backgroundImage: "url('/assets/worldmap.png')",
          backgroundSize: 'cover'
        }}
      >
        <div className="row-start-2 row-end-3 text-center md:row-start-auto md:row-end-auto md:text-left">
          <span
            className="block font-lora text-[3.5rem] font-medium text-gray-800 mb-4"
            style={{ lineHeight: '1.25em' }}
          >
            <span className="block text-yellow-400">{t('promo.title')}</span>
            {t('promo.subtitle')}
          </span>
          <span className="block font-sans text-lg text-gray-800 leading-loose mb-6">
            {t('promo.desc')}
          </span>
          <Link href="/services">
            <a
              href="/services"
              className="inline px-6 py-3 mx-auto md:mx-0 bg-yellow-400 hover:bg-true-gray-800 hover:text-yellow-400 transition-colors ease-out delay-50 font-lora text-xl"
            >
              {t('promo.cta')}
            </a>
          </Link>
        </div>
        <div className="p-2 bg-white shadow-lg row-start-1 row-end-2 md:row-start-auto md:row-end-auto">
          <ReactYouTubeLite
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            title="Hizirtransfer Service"
          />
        </div>
      </section>

      <section className="bg-true-gray-800 mx-auto md:min-h-[36rem] px-4 py-10">
        <h1 className="text-center text-5xl text-white font-lora font-medium mb-14">
          Providing <span className="text-yellow-400">The Best</span> Service
        </h1>
        <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 max-w-screen-xl mx-auto h-full">
          <div className="hidden md:flex relative justify-center h-full">
            <img
              className="w-[30rem] h-[32rem] absolute object-cover shadow-lg"
              src="/assets/seat.jpg"
              layout="fill"
              alt="Limousine Seat"
            />
          </div>

          <div className="row-start-1 row-end-3 md:row-start-auto md:row-end-auto flex flex-col gap-8 items-start">
            <span className="hidden md:block leading-relaxed text-white font-lora text-3xl font-medium">
              {t('features.title')}
            </span>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center text-yellow-400">
                <LimoAlt className="inline" width="2.25rem" height="2.25rem" />
                <span className="block font-lora text-md mt-3 text-white">
                  {t('features.limo')}
                </span>
              </div>
              <div className="text-center text-yellow-400">
                <Phone className="inline" width="2.25rem" height="2.25rem" />
                <span className="block font-lora text-md mt-3 text-white">
                  {t('features.phone')}
                </span>
              </div>
              <div className="text-center text-yellow-400">
                <Time className="inline" width="2.25rem" height="2.25rem" />
                <span className="block font-lora text-md mt-3 text-white">
                  {t('features.time')}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center text-yellow-400">
                <Seat className="inline" width="2.25rem" height="2.25rem" />
                <span className="block font-lora text-md mt-3 text-white">
                  {t('features.seat')}
                </span>
              </div>
              <div className="text-center text-yellow-400">
                <PriceTag className="inline" width="2.25rem" height="2.25rem" />
                <span className="block font-lora text-md mt-3 text-white">
                  {t('features.price')}
                </span>
              </div>
              <div className="text-center text-yellow-400">
                <Driver className="inline" width="2.25rem" height="2.25rem" />
                <span className="block font-lora text-md mt-3 text-white">
                  {t('features.driver')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[32rem] bg-white px-4 pb-10 pt-12 text-true-gray-800">
        <div className="min-h-[32rem] grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 md:gap-12 items-center max-w-screen-xl mx-auto">
          <div className="flex flex-col justify-center mx-auto max-w-lg md:h-full">
            <h1 className="text-4xl font-lora font-medium mb-6 md:leading-relaxed text-center md:text-left">
              {t('contact.title.use')}
              <span className="text-yellow-500">
                {' '}
                {t('contact.title.form')}
                {' '}
              </span>
              {t('contact.title.limo')}
            </h1>
            <p className="leading-loose text-gray-800 text-center md:text-left">
              {t('contact.desc')}
            </p>
            <div className="grid grid-cols-[4rem,1fr] grid-rows-[2rem,2rem] gap-x-6 mx-auto md:mx-0 mt-12 text-yellow-500">
              <Whatsapp width="4rem" height="4rem" />
              <span className="col-start-2 col-end-3 row-start-1 row-end-2 text-yellow-500 font-lora font-medium text-xl">
                {t('contact.call')}
              </span>
              <span className="col-start-2 col-end-3 row-start-2 row-end-3 text-2xl text-gray-800 font-lora">
                8-800-10-500
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-gray-100 p-10 max-w-lg">
              <form className="grid grid-cols-2 grid-rows-5 gap-4">
                <div className="flex items-center gap-2 col-start-1 col-end-3 row-start-1 p-5 bg-white border border-gray-300">
                  <Location
                    className="text-yellow-400"
                    width="22px"
                    height="22px"
                  />
                  <input
                    className="text-md text-gray-500 outline-none w-full"
                    id="location"
                    type="text"
                    placeholder="Enter Location"
                  />
                </div>
                <div className="flex items-center gap-2 col-start-1 col-end-2 row-start-2 p-5 bg-white border border-gray-300">
                  <Date
                    className="text-yellow-400"
                    width="22px"
                    height="22px"
                  />
                  <input
                    className="text-md text-gray-500 outline-none w-full"
                    id="date"
                    type="text"
                    placeholder="Order Date"
                  />
                </div>
                <div className="flex items-center gap-2 col-start-2 col-end-3 row-start-2 p-5 bg-white border border-gray-300">
                  <Clock
                    className="text-yellow-400"
                    width="22px"
                    height="22px"
                  />
                  <input
                    className="text-md text-gray-500 outline-none w-full"
                    id="time"
                    type="text"
                    placeholder="Order Time"
                  />
                </div>
                <div className="flex items-center gap-2 col-start-1 col-end-3 row-start-3 p-5 bg-white border border-gray-300">
                  <Limo
                    className="text-yellow-400"
                    width="22px"
                    height="22px"
                  />
                  <select className="text-md bg-white text-md w-full outline-none">
                    <option>Limo Class</option>
                    <option>Standard</option>
                    <option>VIP</option>
                    <option>Luxury</option>
                  </select>
                </div>
                <div className="flex items-center gap-2 col-start-1 col-end-3 row-start-4 p-5 bg-white border border-gray-300">
                  <People
                    className="text-yellow-400"
                    width="22px"
                    height="22px"
                  />
                  <select className="text-md bg-white text-md w-full outline-none">
                    <option>Passengers</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
                </div>
                <button
                  className="col-start-1 col-end-3 row-start-5 block px-6 py-3 bg-yellow-400 hover:bg-true-gray-800 hover:text-yellow-400 transition-colors ease-out delay-50 font-lora text-xl"
                  type="submit"
                >
                  Get Limousine
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['home', 'hero', 'navbar']))
  }
});
