import Head from 'next/head';

const SEO = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="author" content="Witr.kz" />
      <meta name="copyright" content="Witr.kz" />
      <meta name="keywords" content="Witr.kz" />
      <meta name="description" content="Witr.kz" />
      <meta name="og:image" content="/ogg.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#913BFF" />
      <meta name="msapplication-navbutton-color" content="#913BFF" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#913BFF" />
      <meta property="og:site_name" content="Witr.kz" />
      {/* <meta property="og:url" content="https://ak-cent.biz/" /> */}
      <meta property="og:type" content="website" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta property="og:title" content="Witr.kz" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
  )
}

export default SEO;