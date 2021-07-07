import { useTranslation } from 'next-i18next';
import Phone from '#icons/phone.svg';
import Location from '#icons/location.svg';
import Mail from '#icons/mail.svg';
import Clock from '#icons/clock.svg';
import ContactCard from '#components/ContactCard';

export default function Footer() {
  const { t } = useTranslation('footer');

  return (
    <footer className="flex flex-col bg-true-gray-800 min-h-[20rem]">
      <div className="flex-1 py-8 mx-auto w-full max-w-screen-xl">
        <h1 className="mb-10 text-2xl font-medium text-center text-white font-lora">
          HizirTransfer
        </h1>
        <div className="grid grid-rows-4 md:grid-cols-4 md:grid-rows-1">
          <ContactCard
            icon={<Phone className="inline" width="24px" />}
            topLabel={t('footer.phones.top')}
            bottomLabel={t('footer.phones.bottom')}
            className="py-6 border-b-2 border-true-gray-500 border-opacity-40 border-dashed md:border-b-0 md:border-r-2"
            type="footer"
          />
          <ContactCard
            icon={<Location className="inline" width="24px" />}
            topLabel={t('footer.location.top')}
            bottomLabel={t('footer.location.bottom')}
            className="py-6 border-b-2 border-true-gray-500 border-opacity-40 border-dashed md:border-b-0 md:border-r-2"
            type="footer"
          />
          <ContactCard
            icon={<Mail className="inline" width="24px" />}
            topLabel={t('footer.email.top')}
            bottomLabel={t('footer.email.bottom')}
            className="py-6 border-b-2 border-true-gray-500 border-opacity-40 border-dashed md:border-b-0 md:border-r-2"
            type="footer"
          />
          <ContactCard
            icon={<Clock className="inline" width="24px" />}
            topLabel={t('footer.working_hours.top')}
            bottomLabel={t('footer.working_hours.bottom')}
            className="py-6"
            type="footer"
          />
        </div>
      </div>
      <div className="py-6 text-center text-white bg-true-gray-900">
        <span className="font-sans">Copyright &copy; 2021 - </span>
        <span className="font-medium text-yellow-400">HizirTransfer</span>
      </div>
    </footer>
  );
}
