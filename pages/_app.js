import useMediaQuery from "../contexts/CheckScreenSize";
import React from 'react';
import { ToastContainer } from "react-toastify";
import { SSRProvider } from 'react-bootstrap';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import '../styles/globals.css';
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  const isSmallDevice = useMediaQuery(790);

  return (
    <React.Fragment>
      <SSRProvider>
        <Head>
          <title> Arnav Singh </title>
          <meta name="viewport" content="width=device-width" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <div style={{ minHeight: "90vh" }} >
          <Navbar />
          {isSmallDevice ? 
            <ToastContainer position="top-left" theme="dark" autoClose={3000} newestOnTop />
              : 
            <ToastContainer position="bottom-right" theme="dark" autoClose={3000} newestOnTop />
          }
          <Component {...pageProps} />
        </div>
        <Footer />
      </SSRProvider>
    </React.Fragment>
  );
};

export default MyApp;