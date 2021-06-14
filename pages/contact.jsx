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

      <div className="grid grid-cols-4 py-10">
        <ContactCard
          icon={<Location width="32px" />}
          label={t('details.location')}
          topLabel="Somewhere In Turkey"
          bottomLabel="123456"
          className="border-dashed border-r-2 border-gray-500 border-opacity-40"
        />
        <ContactCard
          icon={<Phone width="32px" />}
          label={t('details.phones')}
          topLabel="0(550) 680-34-12"
          bottomLabel="Round-the-clock"
          className="border-dashed border-r-2 border-gray-500 border-opacity-40"
        />
        <ContactCard
          icon={<Mail width="32px" />}
          label={t('details.email')}
          topLabel="info@hizirtransfer.com"
          bottomLabel="support@hizirtransfer.com"
          className="border-dashed border-r-2 border-gray-500 border-opacity-40"
        />
        <ContactCard
          icon={<Clock width="32px" />}
          label={t('details.working_hours')}
          topLabel="Opening Hours"
          bottomLabel="07:00 - 16:00"
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
          background-color: #fcd34d;
        }
      `}</style>
      <div className="pt-10 pb-20 px-4 max-w-screen-md mx-auto text-center">
        <h1 className="title relative mb-8 text-4xl font-lora font-bold text-gray-800">
          {t('form.title')}
        </h1>
        <form className="grid grid-cols-2 gap-4">
          <input
            className="p-6 py-4 border-3 border-gray-200 grid-col-1 outline-none"
            type="text"
            placeholder={t('form.name')}
          />
          <input
            className="p-6 py-4 border-3 border-gray-200 grid-col-2 outline-none"
            type="text"
            placeholder={t('form.email')}
          />
          <textarea
            className="p-6 border-3 border-gray-200 col-start-1 col-end-3 outline-none"
            placeholder={t('form.message')}
            cols="30"
            rows="10"
          />
          <button
            className="px-8 py-4 bg-yellow-300 hover:(bg-true-gray-800 text-yellow-400) transition-colors ease-out delay-50 font-lora text-xl font-medium col-start-1 col-end-3"
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
    ...(await serverSideTranslations(locale, ['navbar', 'contact'])),
  },
});
