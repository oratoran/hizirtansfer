import Phone from '#icons/phone.svg';
import Location from '#icons/location.svg';
import Mail from '#icons/mail.svg';
import Clock from '#icons/clock.svg';

function ContactCard({ topLabel, bottomLabel, icon }) {
  return (
    <div className="text-center text-yellow-400">
      {icon}
      <span className="block mt-8 text-white font-medium font-lora">
        {topLabel}
      </span>
      <span className="block text-white font-medium font-lora">
        {bottomLabel}
      </span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="bg-gray-900 h-[20rem]"
      style={{
        backgroundImage: 'url(/assets/world.png)',
        backgroundSize: 'contain',
      }}
    >
      <div className="max-w-screen-lg mx-auto py-8">
        <h1 className="font-medium text-2xl text-center text-white font-lora mb-4">
          HizirTransfer
        </h1>
        <div className="grid grid-cols-4 gap-4">
          <ContactCard
            icon={<Phone width="24px" />}
            topLabel="0(550) 680-34-12"
            bottomLabel="Round-the-clock"
          />
          <ContactCard
            icon={<Location width="24px" />}
            topLabel="1353 Locust St. Kansas City. MO"
            bottomLabel="64106"
          />
          <ContactCard
            icon={<Mail width="24px" />}
            topLabel="info@limme-theme.com"
            bottomLabel="suppoer@limme-theme.com"
          />
          <ContactCard
            icon={<Clock width="24px" />}
            topLabel="Mo-Sa: 07:00 - 12:00"
            bottomLabel="Su: 07:00 - 16:00"
          />
        </div>
      </div>
    </footer>
  );
}
