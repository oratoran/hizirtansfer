import Head from 'next/head';
import siteData from '../data/site';

export default function SEO({ siteName }) {
  const { siteName, desc } = siteData;
  return (
    <Head>
      <title>
        {title} | {siteName}
      </title>
      <link rel="canonical" href="{siteUrl}{$page.path}" />
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords.join(',').toLowerCase()} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="{siteUrl}{$page.path}" />
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={desc} />
      <meta
        property="og:image"
        content={
          thumbnail
            ? thumbnail.toString()
            : 'https://avatars3.githubusercontent.com/u/51877647?s=240&v=4'
        }
      />

      <meta
        property="twitter:card"
        content={thumbnail ? 'summary_large_image' : 'summary'}
      />
      <meta property="twitter:url" content="{siteUrl}{$page.path}" />
      <meta property="twitter:title" content={title || siteName} />
      <meta property="twitter:description" content={desc} />
      <meta
        property="twitter:image"
        content={thumbnail ? thumbnail.toString() : ''}
      />
    </Head>
  );
}
