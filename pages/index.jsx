import Link from "next/link";
import Head from 'next/head';

const Home = () => {
  return (
    <div className="Home">
      <Head> <title> Arnav Singh - Home </title> </Head>
      <h1>
        Portfolio
      </h1>
      <Link href="/about">Hi</Link>
    </div>
  );
};

export default Home;