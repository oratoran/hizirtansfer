import { useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SEO from '#components/SEO';
import Clock from '#icons/clock_alt.svg';
import Location from '#icons/location_alt.svg';
import Mail from '#icons/mail_alt.svg';
import Phone from '#icons/phone_alt.svg';
import ContactCard from '#components/ContactCard';

export default function Contact() {
  const submitButton = useRef(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const { t } = useTranslation('contact');

  const sendMessage = (e) => {
    e.preventDefault();

    const data = {
      email,
      name,
      message,
    };

    submitButton.current.disabled = true;

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        // eslint-disable-next-line no-alert
        alert('Your message has been sent!');
        setEmail('');
        setName('');
        setMessage('');
        submitButton.current.disabled = false;
      }
    });
  };

  return (
    <>
      <SEO title={t('title')} />
      <header className="grid relative place-items-center pt-24 w-full h-[32rem]">
        <div
          className="absolute inset-0 bg-fixed bg-center bg z-[-5]"
          style={{
            backgroundImage: 'url("/assets/slide-1.jpeg")',
            filter:
              'brightness(0.25) contrast(0.75) saturate(0.75) hue-rotate(15deg)',
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
          label={t('details.location.label')}
          topLabel={t('details.location.top')}
          bottomLabel={t('details.location.bottom')}
          className="py-6 border-b-2 border-gray-400 border-opacity-40 border-dashed md:border-b-0 md:py-0 md:border-r-2"
        />
        <ContactCard
          icon={<Phone className="inline" width="32px" />}
          label={t('details.phones.label')}
          topLabel={t('details.phones.top')}
          bottomLabel={t('details.phones.bottom')}
          className="py-6 border-b-2 border-gray-400 border-opacity-40 border-dashed md:border-b-0 md:py-0 md:border-r-2"
        />
        <ContactCard
          icon={<Mail className="inline" width="32px" />}
          label={t('details.email.label')}
          topLabel={t('details.email.top')}
          bottomLabel={t('details.email.bottom')}
          className="py-6 border-b-2 border-gray-400 border-opacity-40 border-dashed md:border-b-0 md:py-0 md:border-r-2"
        />
        <ContactCard
          icon={<Clock className="inline" width="32px" />}
          label={t('details.working_hours.label')}
          topLabel={t('details.email.top')}
          bottomLabel={t('details.email.bottom')}
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
          background-color: #e6c473;
        }
      `}</style>
      <div className="px-4 pt-10 pb-20 mx-auto max-w-screen-md text-center">
        <h1 className="relative mb-8 text-4xl font-bold text-gray-800 title font-lora">
          {t('form.title')}
        </h1>
        <form
          className="grid grid-cols-2 gap-4"
          onSubmit={(e) => sendMessage(e)}
        >
          <input
            className="col-start-1 col-end-3 p-6 py-4 border-2 border-gray-200 outline-none md:col-end-2"
            type="text"
            placeholder={t('form.name')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="col-start-1 col-end-3 p-6 py-4 border-2 border-gray-200 outline-none md:col-start-2 md:col-end-3"
            type="email"
            placeholder={t('form.email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="col-start-1 col-end-3 p-6 border-2 border-gray-200 outline-none"
            placeholder={t('form.message')}
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            className="col-start-1 col-end-3 py-4 px-8 text-xl font-medium bg-yellow-400 transition-colors ease-out hover:bg-true-gray-800 hover:text-yellow-400 delay-50 font-lora outline-none disabled:bg-true-gray-300 disabled:text-true-gray-400 disabled:cursor-not-allowed"
            type="submit"
            ref={submitButton}
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
    ...(await serverSideTranslations(locale, ['navbar', 'contact', 'footer'])),
  },
});
