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
        className={`fixed text-white border-b-2 transition-all duration-300 w-screen h-[5.25rem] z-40 text-white
        ${
          isScrolledDown || isToggled
            ? 'border-solid border-gray-200 text-true-gray-800 bg-white'
            : 'border-dashed border-gray-200 border-opacity-40'
        }`}
        style={{
          backgroundImage:
            isScrolledDown || isToggled
              ? ''
              : 'linear-gradient( to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))'
        }}
      >
        <div className="max-w-screen-xl px-4 grid grid-cols-3 justify-center items-center mx-auto h-full">
          <Link href="/">
            <h1 className="font-bold font-lora text-xl col-start-2 col-end-3 md:col-start-auto md:col-end-auto">
              HizirTransfer
            </h1>
          </Link>
          <div className="md:flex hidden font-sans items-center justify-between">
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
          <div className="md:flex hidden items-center justify-end gap-5">
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
            className="grid col-start-3 col-end-4 md:hidden grid-rows-3 gap-2 justify-self-end gap-1 w-8 h-4"
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
