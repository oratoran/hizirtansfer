import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { t } = useTranslation('home');
  const [active, setActive] = useState(1);

  const resetAnimation = (el) => {
    el.classList.remove(`anim`);
    /* eslint-disable */
    void el.offsetWidth;
    el.classList.add(`anim`);
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.anim');
    let i = 0;
    const interval = setInterval(() => {
      if (i === 3) i = 0;
      setActive(i);
      resetAnimation(elements[i]);
      i++;
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx>{`
        .anim {
          animation: 20s linear 0s infinite normal zoomin;
        }

        @keyframes zoomin {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(2);
          }
        }
      `}</style>
      <header className="grid overflow-hidden relative place-items-center pt-20 w-full h-[42rem]">
        <div className="justify-self-start px-8 mx-auto mt-10 w-full max-w-screen-xl z-5">
          <h1 className="text-6xl font-semibold text-yellow-200 font-lora md:text-[9rem] z-5">
            {t('hero.limo')}
          </h1>
          <h2 className="mt-2 text-4xl font-medium text-gray-100 font-lora md:text-8xl z-5">
            {t('hero.sub')}
          </h2>
          <span className="block mt-6 text-2xl font-medium text-gray-100 font-lora md:text-4xl z-5">
            {t('hero.subsub')}
          </span>
        </div>
        <div className="absolute inset-0">
          <img
            className={`object-cover object-bottom absolute w-screen h-screen anim md:h-auto z-[-5] ${
              active === 0 ? 'visible' : 'invisible'
            }`}
            src="/assets/limo.jpg"
            alt="limo"
            style={{
              filter:
                'brightness(0.25) contrast(0.75) saturate(0.75) hue-rotate(15deg)',
            }}
          />
          <img
            className={`object-cover object-bottom absolute w-screen h-screen anim md:h-auto z-[-4] ${
              active === 1 ? 'visible' : 'invisible'
            }`}
            src="/assets/side_limo.jpg"
            alt="side_limo"
            style={{
              filter:
                'brightness(0.25) contrast(0.75) saturate(0.75) hue-rotate(15deg)',
            }}
          />
          <img
            className={`object-cover object-bottom absolute w-screen h-screen anim md:h-auto z-[-3] ${
              active === 2 ? 'visible' : 'invisible'
            }`}
            src="/assets/limo_closeup.jpg"
            alt="limo_closeup"
            style={{
              filter:
                'brightness(0.25) contrast(0.75) saturate(0.75) hue-rotate(15deg)',
            }}
          />
        </div>
      </header>
    </>
  );
}
