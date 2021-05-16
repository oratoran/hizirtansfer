import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolledDown, setScrolledDown] = useState(false);
  const { t } = useTranslation('navbar');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      offsetY = window.pageYOffset;
    });
  }, []);

  return (
    <nav className="fixed border-b-2 transition-all duration-300 w-screen h-22 z-5">
      <div className="max-w-screen-lg grid grid-cols-3 justify-center items-center mx-auto h-full">
        <h1 className="font-bold font-lora text-xl">HizirTransfer</h1>
        <div className="font-sans flex items-center justify-between">
          {['home', 'about', 'contact', 'services'].map((r, idx) => (
            <Link
              class="font-sm transition-color duration-100 ease-in"
              href={`/${r}`}
              key={idx}
            >
              {t(r)}
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
