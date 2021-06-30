import { useTranslation } from 'next-i18next';
import { useRef, useState } from 'react';
// import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Clock from '#icons/clock.svg';
import DateIcon from '#icons/date.svg';
import Limo from '#icons/limo.svg';
import Location from '#icons/location.svg';
import People from '#icons/people.svg';
import 'react-day-picker/lib/style.css';

export default function OrderForm() {
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const timeRef = useRef(null);
  const [time, setTime] = useState('');
  const [limoClass, setLimoClass] = useState('');
  const [passengers, setPassengers] = useState('');
  const { t } = useTranslation('home');

  const sendMail = (e) => {
    e.preventDefault();

    const data = {
      email,
      location,
      date,
      time,
      limoClass,
      passengers,
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        console.log('Response succeeded!');
        setEmail('');
        setLocation('');
        setDate('');
        setTime('');
        setLimoClass('');
        setPassengers('');
      }
    });
  };

  return (
    <form
      className="grid grid-cols-2 grid-rows-6 gap-4"
      onSubmit={(e) => sendMail(e)}
    >
      <div className="flex col-start-1 col-end-3 row-start-1 gap-2 items-center p-5 bg-white border border-gray-300">
        <input
          className="w-full text-gray-500 outline-none text-md"
          id="email"
          type="email"
          autoComplete="off"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex col-start-1 col-end-3 row-start-2 gap-2 items-center p-5 bg-white border border-gray-300">
        <Location className="text-yellow-400" width="22px" height="22px" />
        <input
          className="w-full text-gray-500 outline-none text-md"
          id="location"
          type="text"
          autoComplete="off"
          placeholder={t('contact.form.location')}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="relative flex col-start-1 col-end-2 row-start-3 gap-2 items-center p-5 bg-white border border-gray-300">
        <DateIcon className="text-yellow-400" width="22px" height="22px" />
        <DayPickerInput
          dayPickerProps={{
            disabledDays: [{ before: new Date(Date.now()) }],
          }}
          inputProps={{
            className:
              'w-full text-gray-500 outline-none text-md cursor-pointer',
          }}
          onDayChange={(day) => setDate(day)}
          value={date}
        />
      </div>
      <div className="flex col-start-2 col-end-3 row-start-3 gap-2 items-center p-5 bg-white border border-gray-300">
        <Clock className="text-yellow-400" width="22px" height="22px" />
        <style jsx>{`
          input[type='time']::-webkit-calendar-picker-indicator {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: none;
            cursor: pointer;
          }
        `}</style>
        <input
          className="relative w-full text-gray-500 outline-none text-md box-border"
          id="time"
          type="time"
          min="08:00"
          max="21:00"
          ref={timeRef}
          placeholder={t('contact.form.ordertime')}
          onMouseDown={(e) => e.preventDefault()}
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="flex col-start-1 col-end-3 row-start-4 gap-2 items-center p-5 bg-white border border-gray-300">
        <Limo className="text-yellow-400" width="22px" height="22px" />
        <select
          className="w-full bg-white outline-none text-md"
          value={limoClass}
          onChange={(e) => setLimoClass(e.target.value)}
        >
          <option>{t('contact.form.class.title')}</option>
          <option>{t('contact.form.class.standard')}</option>
          <option>{t('contact.form.class.vip')}</option>
          <option>{t('contact.form.class.luxury')}</option>
        </select>
      </div>
      <div className="flex col-start-1 col-end-3 row-start-5 gap-2 items-center p-5 bg-white border border-gray-300">
        <People className="text-yellow-400" width="22px" height="22px" />
        <select
          className="w-full bg-white outline-none text-md"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
        >
          <option>{t('contact.form.passengers')}</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
      </div>
      <button
        className="block col-start-1 col-end-3 row-start-6 py-3 px-6 text-xl bg-yellow-400 transition-colors ease-out hover:bg-true-gray-800 hover:text-yellow-400 delay-50 font-lora"
        type="submit"
      >
        {t('contact.form.cta')}
      </button>
    </form>
  );
}
