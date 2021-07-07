import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Chat from '#icons/chat.svg';
import Facebook from '#icons/facebook.svg';
import Twitter from '#icons/twitter.svg';

export default function Navbar() {
  const [isScrolledDown, setScrolledDown] = useState(false);
  const [isToggled, setToggled] = useState(false);
  const { t, i18n } = useTranslation('navbar');
  const { pathname, push } = useRouter();

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
              : 'linear-gradient( to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))',
        }}
      >
        <div className="grid grid-cols-3 justify-center items-center px-4 mx-auto max-w-screen-xl h-full">
          <Link href="/">
            <h1 className="col-start-2 col-end-3 text-xl font-bold font-lora md:col-start-auto md:col-end-auto cursor-pointer hover:text-yellow-400">
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
                className={`hover:text-yellow-400 ${
                  isScrolledDown ? 'text-true-gray-800' : 'text-white'
                }`}
              >
                <Twitter />
              </a>
            </Link>
            <Link href="https://whatsapp.com">
              <a
                aria-label="whatsapp"
                href="https://whatsapp.com"
                className={`hover:text-yellow-400 ${
                  isScrolledDown ? 'text-true-gray-800' : 'text-white'
                }`}
              >
                <Chat />
              </a>
            </Link>
            <select
              className="bg-transparent appearance-none cursor-pointer"
              value={i18n.language}
              onChange={(e) => {
                push(pathname, pathname, { locale: e.target.value });
              }}
            >
              <option className="text-gray-800" value="en">
                EN
              </option>
              <option className="text-gray-800" value="tr">
                TR
              </option>
            </select>
            {i18n.language === 'en' ? (
              <img
                className="h-6 -ml-2 rounded-full"
                src="/assets/uk.png"
                alt="english"
                style={{ aspectRatio: '1/1' }}
              />
            ) : (
              <img
                className="h-6 -ml-2 rounded-full"
                src="/assets/tr.png"
                alt="turkey"
                style={{ aspectRatio: '1/1' }}
              />
            )}
          </div>
          <button
            type="button"
            aria-label="mobile menu"
            onClick={() => setToggled((prev) => !prev)}
            className="grid col-start-3 col-end-4 grid-rows-3 gap-1 gap-2 justify-self-end w-8 h-4 md:hidden"
          >
            <span
              className={`w-full h-full ${
                isScrolledDown || isToggled ? 'bg-gray-800' : 'bg-white'
              } ${isToggled && 'rotate-45 translate-y-1.5'}`}
            />
            <span
              className={`w-full h-full ${
                isScrolledDown || isToggled ? 'bg-gray-800' : 'bg-white'
              } ${isToggled && 'invisible'}`}
            />
            <span
              className={`w-full h-full ${
                isScrolledDown || isToggled ? 'bg-gray-800' : 'bg-white'
              } ${isToggled && '-rotate-45 -translate-y-1.5'}`}
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
                onClick={() => setToggled((prev) => !prev)}
              >
                {t(r)}
              </a>
            </Link>
          ))}
          <select
            className="bg-transparent text-xl"
            value={i18n.language}
            onChange={(e) => {
              push(pathname, pathname, { locale: e.target.value });
            }}
          >
            <option className="text-gray-800" value="en">
              EN
            </option>
            <option className="text-gray-800" value="tr">
              TR
            </option>
          </select>
          {i18n.language === 'en' ? (
            <img
              className="h-6 -ml-2 -mt-4 rounded-full"
              src="/assets/uk.png"
              alt="english"
              style={{ aspectRatio: '1/1' }}
            />
          ) : (
            <img
              className="h-6 -ml-2 -mt-4 rounded-full"
              src="/assets/tr.png"
              alt="turkey"
              style={{ aspectRatio: '1/1' }}
            />
          )}
        </div>
      )}
    </>
  );
}
