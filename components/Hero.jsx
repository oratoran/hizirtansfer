import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade } from 'swiper/core';
import { useTranslation } from 'next-i18next';

SwiperCore.use([Autoplay, EffectFade]);

export default function Hero() {
  const resetAnimation = (el) => {
    el.classList.remove('anim');
    /* eslint-disable */
    void el.offsetWidth;
    el.classList.add('anim');
  };

  const { t } = useTranslation('home');

  return (
    <>
      <style jsx>{`
        .anim {
          animation: 15s linear 0s infinite normal zoomin;
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
      <header className="relative grid w-full place-items-center h-[42rem] pt-24 overflow-hidden">
        <div className="pt-20 w-full max-w-screen-xl mx-auto px-8 justify-self-start z-5 mt-10">
          <h1 className="text-yellow-200 font-lora font-semibold text-[9rem] z-5">
            {t('hero.limo')}
          </h1>
          <h2 className="mt-2 text-gray-100 font-lora font-medium text-8xl z-5">
            {t('hero.sub')}
          </h2>
          <span className="block mt-6 text-gray-100 font-lora font-medium text-4xl z-5">
            {t('hero.subsub')}
          </span>
        </div>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          autoplay={{ delay: 5000 }}
          fadeEffect={{ crossFade: true }}
          onSlideChange={(swiper) => resetAnimation(swiper.el)}
          loop
        >
          <SwiperSlide>
            <img
              className="anim object-bottom"
              src="/assets/limo.jpg"
              alt="limo"
              style={{
                filter:
                  'brightness(0.25) contrast(0.75) saturate(0.75) hue-rotate(15deg)',
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="anim object-bottom"
              src="/assets/side_limo.jpg"
              alt="side_limo"
              style={{
                filter:
                  'brightness(0.25) contrast(0.75) saturate(0.75) hue-rotate(15deg)',
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="anim object-bottom"
              src="/assets/limo_closeup.jpg"
              alt="limo_closeup"
              style={{
                filter:
                  'brightness(0.25) contrast(0.75) saturate(0.75) hue-rotate(15deg)',
              }}
            />
          </SwiperSlide>
        </Swiper>
      </header>
    </>
  );
}
