import Navbar from "../components/Navbar";
import Link from "next/link";
import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <title> Arnav Singh - Home </title>
        <meta name='author' content='Arnav Singh' />
        <meta name='description' content='' />
        <meta name='keywords' content='' />
      </Head>
      <Navbar />
      <h1 className="" >
        Portfolio
      </h1>
    </div>
  );
};

export default Home;