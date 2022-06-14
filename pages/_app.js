import { SSRProvider } from 'react-bootstrap';
import '../styles/globals.css';
import Head from "next/head";
import Navbar from "../components/Navbar";
import React from 'react';
import Footer from '../components/Footer';

const MyApp = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <SSRProvider>
        <Head>
          <title> Arnav Singh </title>
          <meta name="viewport" content="width=device-width" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </SSRProvider>
    </React.Fragment>
  );
};

export default MyApp;