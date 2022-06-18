import useMediaQuery from "../contexts/CheckScreenSize";
import React, { useState, useEffect } from 'react';
import { ToastContainer } from "react-toastify";
import LoadingBar from "react-top-loading-bar";
import { SSRProvider } from 'react-bootstrap';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { useRouter } from "next/router";
import '../styles/globals.css';
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  const isSmallDevice = useMediaQuery(790);
  const [ progress, setProgress ] = useState(0);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(30);
    });

    router.events.on('routeChangeComplete', () => {
      setProgress(100);
    });
  })

  return (
    <React.Fragment>
      <SSRProvider>
        <Head>
          <title> Arnav Singh </title>
          <meta name="viewport" content="width=device-width" />
          <link rel="icon" href="/logo.png" />
        </Head>

        {/* React Notification */} {isSmallDevice ? <ToastContainer position="top-left" theme="dark" autoClose={3000} newestOnTop /> : <ToastContainer position="bottom-right" theme="dark" autoClose={3000} newestOnTop /> }
        {/* React Top Loading Bar */} <LoadingBar color='#f11946' progress={progress} onLoaderFinished={() => setProgress(0)} waitingTime={400} />

        <div style={{ minHeight: "90vh" }} >
          <Navbar />
          <Component {...pageProps} />
        </div>

        {/* Footer Of Out Website */} <Footer />
      </SSRProvider>
    </React.Fragment>
  );
};

export default App;