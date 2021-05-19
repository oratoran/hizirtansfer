import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Facebook from '#icons/facebook.svg';
import Twitter from '#icons/twitter.svg';
import Whatsapp from '#icons/whatsapp.svg';

export default function Navbar() {
  const [isScrolledDown, setScrolledDown] = useState(false);
  const { t } = useTranslation('navbar');

  useEffect(() => {
    window.addEventListener('scroll', () =>
      setScrolledDown(window.pageYOffset > 80)
    );
  }, []);

  return (
    <nav
      className={`fixed text-white border-b-2 transition-all duration-300 w-screen h-22 z-20 text-white
        ${
          isScrolledDown
            ? 'text-gray-700 bg-white'
            : 'border-dashed border-gray-200 border-opacity-40'
        }`}
      style={{
        backgroundImage: isScrolledDown
          ? ''
          : 'linear-gradient( to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))',
      }}
    >
      <div className="max-w-screen-xl px-4 grid grid-cols-3 justify-center items-center mx-auto h-full">
        <h1 className="font-bold font-lora text-xl">HizirTransfer</h1>
        <div className="font-sans flex items-center justify-between">
          {['home', 'about', 'contact', 'services'].map((r, idx) => (
            <Link href={`/${r === 'home' ? '' : r}`} key={idx}>
              <a
                className={`font-sm transition-color duration-100 ease-in ${
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
        <div className="flex items-center justify-end gap-5">
          <Link href="https://facebook.com">
            <a className={isScrolledDown ? 'text-gray-700' : 'text-white'}>
              <Facebook />
            </a>
          </Link>
          <Link href="https://twitter.com">
            <a className={isScrolledDown ? 'text-gray-700' : 'text-white'}>
              <Twitter />
            </a>
          </Link>
          <Link href="https://whatsapp.com">
            <a className={isScrolledDown ? 'text-gray-700' : 'text-white'}>
              <Whatsapp />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
