import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Facebook from '#icons/facebook.svg';
import Twitter from '#icons/twitter.svg';
import Whatsapp from '#icons/whatsapp.svg';

export default function Navbar() {
  const [isScrolledDown, setScrolledDown] = useState(false);
  const [isToggled, setToggled] = useState(false);
  const { t } = useTranslation('navbar');

  useEffect(() => {
    window.addEventListener(
      'scroll',
      () => setScrolledDown(window.pageYOffset > 80),
      { passive: true }
    );
  }, []);

  return (
    <>
      <nav
        className={`fixed text-white border-b-2 transition-all duration-300 w-screen h-22 z-40 text-white
        ${
          isScrolledDown || isToggled
            ? 'text-gray-700 bg-white'
            : 'border-dashed border-gray-200 border-opacity-40'
        }`}
        style={{
          backgroundImage:
            isScrolledDown || isToggled
              ? ''
              : 'linear-gradient( to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))',
        }}
      >
        <div className="max-w-screen-xl px-4 grid grid-cols-3 justify-center items-center mx-auto h-full">
          <Link href="/">
            <h1 className="font-bold font-lora text-xl <sm:(col-start-2 col-end-3)">
              HizirTransfer
            </h1>
          </Link>
          <div className="font-sans flex items-center justify-between <sm:hidden">
            {['home', 'about', 'contact', 'services'].map((r, idx) => (
              <Link href={`/${r === 'home' ? '' : r}`} key={idx}>
                <a
                  href={`/${r === 'home' ? '' : r}`}
                  className={`text-sm transition-color duration-100 ease-in ${
                    isScrolledDown
                      ? 'text-gray-700 hover:(text-amber-600 underline)'
                      : 'text-white hover:(text-amber-500 underline)'
                  }`}
                >
                  {t(r)}
                </a>
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-end gap-5 <sm:hidden">
            <Link href="https://facebook.com">
              <a
                href="https://facebook.com"
                className={isScrolledDown ? 'text-gray-700' : 'text-white'}
              >
                <Facebook />
              </a>
            </Link>
            <Link href="https://twitter.com">
              <a
                href="https://facebook.com"
                className={isScrolledDown ? 'text-gray-700' : 'text-white'}
              >
                <Twitter />
              </a>
            </Link>
            <Link href="https://whatsapp.com">
              <a
                href="https://facebook.com"
                className={isScrolledDown ? 'text-gray-700' : 'text-white'}
              >
                <Whatsapp />
              </a>
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setToggled((prev) => !prev)}
            className="<md:(grid col-start-3 col-end-4) hidden grid-rows-3 gap-2 justify-self-end gap-1 w-8 h-4"
          >
            <span
              className={`${
                isScrolledDown || isToggled ? 'bg-gray-800' : 'bg-white'
              } w-full h-full`}
            />
            <span
              className={`${
                isScrolledDown || isToggled ? 'bg-gray-800' : 'bg-white'
              } w-full h-full`}
            />
            <span
              className={`${
                isScrolledDown || isToggled ? 'bg-gray-800' : 'bg-white'
              } w-full h-full`}
            />
          </button>
        </div>
      </nav>
      {isToggled && (
        <div className="fixed z-20 inset-0 bg-white flex flex-col items-center justify-center gap-8">
          {['home', 'about', 'contact', 'services'].map((r, idx) => (
            <Link href={`/${r === 'home' ? '' : r}`} key={idx}>
              <a
                href={`/${r === 'home' ? '' : r}`}
                className="text-2xl transition-color duration-100 ease-in text-gray-700 hover:(text-amber-600 underline)"
              >
                {t(r)}
              </a>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
