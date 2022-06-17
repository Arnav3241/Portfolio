import useMediaQuery from "../contexts/CheckScreenSize";
import React, { useEffect, useState } from 'react';
import { ToastContainer } from "react-toastify";
import { SSRProvider } from 'react-bootstrap';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import '../styles/globals.css';
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  const isSmallDevice = useMediaQuery(790);
  const [toastLoaction, setToastLocation] = useState("bottom-right");

  useEffect(() => {
    isSmallDevice? setToastLocation("top-left") : setToastLocation("bottom-right");
  }, [isSmallDevice])

  return (
    <React.Fragment>
      <SSRProvider>
        <Head>
          <title> Arnav Singh </title>
          <meta name="viewport" content="width=device-width" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <Navbar />
        <ToastContainer position={`${toastLoaction}`} style={{ maxWidth: "100vw" }} theme="dark" autoClose={3000} newestOnTop />
        <Component {...pageProps} />
        <Footer />
      </SSRProvider>
    </React.Fragment>
  );
};

export default MyApp;