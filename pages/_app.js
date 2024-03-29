import { useAuth, getData } from "../contexts/Authentication";
import useMediaQuery from "../contexts/CheckScreenSize";
import { ToastContainer, toast } from "react-toastify";
import React, { useState, useEffect } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Footer from '../components/Basic/Footer';
import Navbar from "../components/Basic/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from "react-top-loading-bar";
import { SSRProvider } from 'react-bootstrap';
import { useRouter } from "next/router";
import '../styles/globals.css';
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  const [progress, setProgress] = useState(0);
  const isSmallDevice = useMediaQuery(790);
  const router = useRouter();
  const user = useAuth();

  useEffect(() => {
    if (user) {
      const Data = Promise.resolve(getData(user["uid"]));
      Data.then(data => {
        toast.success(`Welcome Back ${data?.Name} to Code With Arnav Singh`);
      })
    }
  }, [user])

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(50);
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

        {/* React Notification */} {isSmallDevice ? <ToastContainer position="top-left" theme="dark" autoClose={3000} newestOnTop /> : <ToastContainer position="bottom-right" theme="dark" autoClose={3000} newestOnTop />}
        {/* React Top Loading Bar */} <LoadingBar color='blue' progress={progress} onLoaderFinished={() => setProgress(0)} waitingTime={400} />

        <Navbar />
        <Component {...pageProps} />

        {/* Footer Of Website */} <Footer />
      </SSRProvider>
    </React.Fragment>
  );
};

export default App;