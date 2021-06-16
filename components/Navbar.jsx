import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Facebook from '#icons/facebook.svg';
import Twitter from '#icons/twitter.svg';
import Chat from '#icons/chat.svg';

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
        className={`fixed z-40 w-screen text-white border-b-2 transition-all duration-300 h-[5.25rem]
        ${
          isScrolledDown || isToggled
            ? 'text-true-gray-800 bg-white border-gray-200 border-solid'
            : 'border-gray-200 border-opacity-40 border-dashed'
        }`}
        style={{
          backgroundImage:
            isScrolledDown || isToggled
              ? ''
              : 'linear-gradient( to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))'
        }}
      >
        <div className="grid grid-cols-3 justify-center items-center px-4 mx-auto max-w-screen-xl h-full">
          <Link href="/">
            <h1 className="col-start-2 col-end-3 text-xl font-bold font-lora md:col-start-auto md:col-end-auto">
              HizirTransfer
            </h1>
          </Link>
          <div className="hidden justify-between items-center font-sans md:flex">
            {['home', 'about', 'contact', 'services'].map((r, idx) => (
              <Link href={`/${r === 'home' ? '' : r}`} key={idx}>
                <a
                  href={`/${r === 'home' ? '' : r}`}
                  className={`text-sm ${
                    isScrolledDown
                      ? 'text-true-gray-800 hover:text-yellow-400 hover:underline'
                      : 'text-white hover:text-yellow-400 hover:underline'
                  }`}
                >
                  {t(r)}
                </a>
              </Link>
            ))}
          </div>
          <div className="hidden gap-5 justify-end items-center md:flex">
            <Link href="https://facebook.com">
              <a
                aria-label="facebook"
                href="https://facebook.com"
                className={`hover:text-yellow-400 ${
                  isScrolledDown ? 'text-true-gray-800' : 'text-white'
                }`}
              >
                <Facebook />
              </a>
            </Link>
            <Link href="https://twitter.com">
              <a
                aria-label="twitter"
                href="https://twitter.com"
                className={`hover:text-yellow-400 ${isScrolledDown ? 'text-true-gray-800' : 'text-white'}`}
              >
                <Twitter />
              </a>
            </Link>
            <Link href="https://whatsapp.com">
              <a
                aria-label="whatsapp"
                href="https://whatsapp.com"
                className={`hover:text-yellow-400 ${isScrolledDown ? 'text-true-gray-800' : 'text-white'}`}
              >
                <Chat />
              </a>
            </Link>
          </div>
          <button
            type="button"
            aria-label="mobile menu"
            onClick={() => setToggled(prev => !prev)}
            className="grid col-start-3 col-end-4 grid-rows-3 gap-1 gap-2 justify-self-end w-8 h-4 md:hidden"
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
        <div className="flex fixed inset-0 z-20 flex-col gap-8 justify-center items-center bg-white">
          {['home', 'about', 'contact', 'services'].map((r, idx) => (
            <Link href={`/${r === 'home' ? '' : r}`} key={idx}>
              <a
                href={`/${r === 'home' ? '' : r}`}
                className="text-2xl text-true-gray-800 hover:text-amber-600 hover:underline"
                onClick={() => setToggled(prev => !prev)}
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
