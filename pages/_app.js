import { SSRProvider } from 'react-bootstrap';
import '../styles/globals.css';
import Head from "next/head";
import React from 'react';

const MyApp = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <SSRProvider>
        <Head>
          <title> Arnav Singh </title>
          <meta name="viewport" content="width=device-width" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <Component {...pageProps} />
      </SSRProvider>
    </React.Fragment>
  );
};

export default MyApp;