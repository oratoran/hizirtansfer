import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

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
      className={`fixed text-white border-b-2 ${
        isScrolledDown
          ? 'text-gray-700 bg-white'
          : 'border-dashed border-gray-200 border-opacity-40'
      } transition-all duration-300 w-screen h-22 z-5 text-white`}
      style={{
        backgroundImage: isScrolledDown
          ? ''
          : 'linear-gradient( to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))',
      }}
    >
      <div className="max-w-screen-lg px-4 grid grid-cols-3 justify-center items-center mx-auto h-full">
        <h1 className="font-bold font-lora text-xl">HizirTransfer</h1>
        <div className="font-sans flex items-center justify-between">
          {['home', 'about', 'contact', 'services'].map((r, idx) => (
            <Link href={`/${r}`} key={idx}>
              <a
                class={`font-sm transition-color duration-100 ease-in ${
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
        {/* <div class="flex items-center justify-end gap-5"> */}
        {/*   <a */}
        {/*     class={isScrolledDown ? 'text-gray-700' : 'text-white'} */}
        {/*     href="https://facebook.com" */}
        {/*   > */}
        {/*     <Facebook /> */}
        {/*   </a> */}
        {/*   <a */}
        {/*     class={isScrolledDown ? 'text-gray-700' : 'text-white'} */}
        {/*     href="https://twitter.com" */}
        {/*   > */}
        {/*     <Twitter /> */}
        {/*   </a> */}
        {/*   <a */}
        {/*     class={isScrolledDown ? 'text-gray-700' : 'text-white'} */}
        {/*     href="https://whatsapp.com" */}
        {/*   > */}
        {/*     <Whatsapp /> */}
        {/*   </a> */}
        {/* </div> */}
      </div>
    </nav>
  );
}
