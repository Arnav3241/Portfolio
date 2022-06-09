import Link from "next/link";
import Head from 'next/head';


const Home = () => {
  return (
    <div>
      <Head> 
        <title> Arnav Singh -  </title>
        <meta name='author' content='Arnav Singh' />
        <meta name='description' content='' />
        <meta name='keywords' content='' />
        <meta name='og:title' content='Arnav Singh - Start Learning To Code Right Now!' />
        <meta name='og:description' content='Hi, I Am Arnav From India Teaching You Code Many Languages like Python, JavaScript And Frameworks Of JS Like React Js, Next Js, Etc.' />
        <meta name='og:image' content='/logo.png' />
      </Head>
      <h1>
        Portfolio
      </h1>
      <Link href="/about">Hi</Link>
    </div>
  );
};

export default Home;