import Phone from '#icons/phone.svg';
import Location from '#icons/location.svg';
import Mail from '#icons/mail.svg';
import Clock from '#icons/clock.svg';
import ContactCard from '#components/ContactCard';

export default function Footer() {
  return (
    <footer className="flex flex-col bg-true-gray-800 min-h-[20rem]">
      <div className="max-w-screen-xl w-full mx-auto py-8 flex-1">
        <h1 className="font-medium text-2xl text-center text-white font-lora mb-10">
          HizirTransfer
        </h1>
        <div className="grid grid-rows-4 md:(grid-cols-4 grid-rows-1)">
          <ContactCard
            icon={<Phone className="inline" width="24px" />}
            topLabel="0(550) 680-34-12"
            bottomLabel="Round-the-clock"
            className="border-dashed py-6 border-b-2 md:border-b-0 md:border-r-2 border-true-gray-500 border-opacity-40"
            type="footer"
          />
          <ContactCard
            icon={<Location className="inline" width="24px" />}
            topLabel="Somewhere In Turkey"
            bottomLabel="123456"
            className="border-dashed py-6 border-b-2 md:border-b-0 md:border-r-2 border-true-gray-500 border-opacity-40"
            type="footer"
          />
          <ContactCard
            icon={<Mail className="inline" width="24px" />}
            topLabel="info@hizirtransfer.com"
            bottomLabel="support@hizirtransfer.com"
            className="border-dashed py-6 border-b-2 md:border-b-0 md:border-r-2 border-true-gray-500 border-opacity-40"
            type="footer"
          />
          <ContactCard
            icon={<Clock className="inline" width="24px" />}
            topLabel="Opening Hours"
            bottomLabel="07:00 - 16:00"
            className="py-6"
            type="footer"
          />
        </div>
      </div>
      <div className="bg-true-gray-900 text-center py-6 text-white">
        <span className="font-sans">Copyright &copy; 2021 - </span>
        <span className="text-yellow-400 font-medium">
          HizirTransfer
        </span>
      </div>
    </footer>
  );
}
