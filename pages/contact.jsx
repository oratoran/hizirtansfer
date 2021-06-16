import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SEO from '#components/SEO';
import Clock from '#icons/clock_alt.svg';
import Location from '#icons/location_alt.svg';
import Mail from '#icons/mail_alt.svg';
import Phone from '#icons/phone_alt.svg';
import ContactCard from '#components/ContactCard';

export default function Contact() {
  const { t } = useTranslation('contact');

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

      <div className="grid grid-rows-4 py-10 md:grid-rows-1 md:grid-cols-4">
        <ContactCard
          icon={<Location className="inline" width="32px" />}
          label={t('details.location')}
          topLabel="Somewhere In Turkey"
          bottomLabel="123456"
          className="py-6 border-b-2 border-gray-400 border-opacity-40 border-dashed md:border-b-0 md:py-0 md:border-r-2"
        />
        <ContactCard
          icon={<Phone className="inline" width="32px" />}
          label={t('details.phones')}
          topLabel="0(550) 680-34-12"
          bottomLabel="Round-the-clock"
          className="py-6 border-b-2 border-gray-400 border-opacity-40 border-dashed md:border-b-0 md:py-0 md:border-r-2"
        />
        <ContactCard
          icon={<Mail className="inline" width="32px" />}
          label={t('details.email')}
          topLabel="info@hizirtransfer.com"
          bottomLabel="support@hizirtransfer.com"
          className="py-6 border-b-2 border-gray-400 border-opacity-40 border-dashed md:border-b-0 md:py-0 md:border-r-2"
        />
        <ContactCard
          icon={<Clock className="inline" width="32px" />}
          label={t('details.working_hours')}
          topLabel="Opening Hours"
          bottomLabel="07:00 - 16:00"
          className="py-6 md:py-0"
        />
      </div>

      <style jsx>{`
        .title::before {
          content: '';
          position: absolute;
          left: 12rem;
          right: 12rem;
          bottom: -0.75rem;
          height: 3px;
          background-color: #e5e7eb;
        }
        .title::after {
          content: '';
          position: absolute;
          left: 18.5rem;
          right: 18.5rem;
          bottom: -0.75rem;
          height: 3px;
          background-color: #E6C473;
        }
      `}</style>
      <div className="px-4 pt-10 pb-20 mx-auto max-w-screen-md text-center">
        <h1 className="relative mb-8 text-4xl font-bold text-gray-800 title font-lora">
          {t('form.title')}
        </h1>
        <form className="grid grid-cols-2 gap-4">
          <input
            className="col-start-1 col-end-3 p-6 py-4 border-2 border-gray-200 outline-none md:col-end-2"
            type="text"
            placeholder={t('form.name')}
          />
          <input
            className="col-start-1 col-end-3 p-6 py-4 border-2 border-gray-200 outline-none md:col-start-2 md:col-end-3"
            type="text"
            placeholder={t('form.email')}
          />
          <textarea
            className="col-start-1 col-end-3 p-6 border-2 border-gray-200 outline-none"
            placeholder={t('form.message')}
            cols="30"
            rows="10"
          />
          <button
            className="col-start-1 col-end-3 py-4 px-8 text-xl font-medium bg-yellow-400 transition-colors ease-out hover:bg-true-gray-800 hover:text-yellow-400 delay-50 font-lora"
            type="submit"
          >
            {t('form.submit')}
          </button>
        </form>
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['navbar', 'contact']))
  }
});
