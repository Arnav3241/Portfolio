import Link from "next/link";
import Head from 'next/head';


const Home = () => {
  return (
    <div>
      <Head> 
        <title> Arnav Singh - Home </title>
        <link rel="icon" type="image/png" sizes="32x32" href="https://drive.google.com/file/d/1yVJJr-ryDyQO2DT7TAmRGsSouNFaF6Eu/view?usp=sharing" />
        <link rel="icon" type="image/png" sizes="64x64" href="https://drive.google.com/file/d/1yVJJr-ryDyQO2DT7TAmRGsSouNFaF6Eu/view?usp=sharing" />
        <meta name='author' content='Arnav Singh' />
        <meta name='description' content='' />
        <meta name='keywords' content='' />
        <meta property='og:title' content='Arnav Singh - Start Learning To Code Right Now!' />
        <meta property='og:description' content='Hi, I Am Arnav From India Teaching You Code Many Languages like Python, JavaScript And Frameworks Of JS Like React Js, Next Js, Etc.' />
        <meta property='og:image' content='https://drive.google.com/file/d/1yVJJr-ryDyQO2DT7TAmRGsSouNFaF6Eu/view?usp=sharing' />
        <meta property='og:url' content='https://arnav.vercel.app/' />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <h1>
        Portfolio
      </h1>
      <Link href="/about">Hi</Link>
    </div>
  );
};

export default Home;