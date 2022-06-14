import Head from 'next/head';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Head>
        <title> Arnav Singh - Home </title>
        <meta name='author' content='Arnav Singh' />
        <meta name='description' content='' />
        <meta name='keywords' content='' />
      </Head>
      <div className="mx-4 mt-5" >
        <h1>Main Page Of My Portfolio, Guys!</h1>
      </div>
    </div>
  );
};

export default Home;