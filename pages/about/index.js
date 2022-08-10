import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title> Arnav Singh - About Us </title>
        <meta name='author' content='Arnav Singh' />
        <meta name='description' content='Let Me Introduce You To Me And This Website & YoutubeChannel' />
        <meta name='keywords' content='' />
      </Head>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 text-center mx-auto">
            <Image width={400} height={400} alt="content" class="object-cover object-center h-full w-full" src="/Logo.png" />
            <p className="mt-4 text-center" >Hi, I Am Arnav From Arnav.Vercel.app (CEO) & I Am Here to teach all of you How to make many coding projects such as Jarvis & Even Your Very Own Portfolio Website Has Been Planned! Tutorials Will Be Out Soon Thanks Your Precious Time In Reading This Text!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;