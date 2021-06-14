import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import siteData from '../data/site';

export default function SEO({ title, thumbnail }) {
  const { siteName, desc, keywords } = siteData;
  const route = useRouter();

  return (
    <Head>
      <title>
        {title} | {siteName}
      </title>
      <link
        rel="canonical"
        href={`https://hizirtransfer.com/${route.locale}${route.pathname}`}
      />
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords.join(',').toLowerCase()} />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://hizirtransfer.com/${route.locale}/${route.pathname}`}
      />
      <meta property="og:title" content={siteName} />
      <meta property="og:description" content={desc} />
      {/* <meta */}
      {/*   property="og:image" */}
      {/*   content={ */}
      {/*     thumbnail */}
      {/*       ? thumbnail.toString() */}
      {/*       : 'https://avatars3.githubusercontent.com/u/51877647?s=240&v=4' */}
      {/*   } */}
      {/* /> */}

      <meta
        property="twitter:card"
        content={thumbnail ? 'summary_large_image' : 'summary'}
      />
      <meta
        property="twitter:url"
        content={`https://hizirtransfer.com/${route.locale}/${route.pathname}`}
      />
      <meta property="twitter:title" content={siteName} />
      <meta property="twitter:description" content={desc} />
      <meta
        property="twitter:image"
        content={thumbnail ? thumbnail.toString() : ''}
      />
    </Head>
  );
}
