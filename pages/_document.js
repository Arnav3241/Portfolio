import { Html, Head, Main, NextScript } from  "next/document" ;

const Document = () => {
  return (
    <Html>
      <Head>
        {/*Bootstrap CDN*/} <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
        <meta name="google-site-verification" content="dD2deZHSkAQE36hOaMgGrYuvtBtDiq-78UCVeZllT78" />
      </Head>
      <body  >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
