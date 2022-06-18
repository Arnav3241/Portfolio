import { useAuth, getData } from "../contexts/Authentication";
import React, { useState } from "react";
import Image from "next/image";
import Head from 'next/head';

const Home = () => {
  const user = useAuth();
  const [displayName, setDisplayName] = useState("");

  if (user) {
    const Data = Promise.resolve(getData(user.uid));
    Data.then(data => {
        setDisplayName(data.Name);
    })
}

  return (
    <div>
      <Head>
        <title> Arnav Singh - Home </title>
        <meta name='author' content='Arnav Singh' />
        <meta name='description' content='Hi! I Am Arnav Singh And This Is My Portfolio Code With Arnav Singh! Here You Can Find Many Courses And Feel Free To Use them as They are all free to use! Here I Teach many coding related stuff such as HTML, CSS, JS and many frameworks of them like react js (React.js), next js (Next.js) angular, cloud services such as AWS, Firebase, etc. I Also Teact Python where we build GUIs Machine Learning, Artificial Intelegence, Deep Learning, Neural Networks Using Frameworks Of Python. Also There Is A Mega Project of This channel named Jarvis (J.A.R.V.I.S) Everyone should once check out!' />
        <meta name='keywords' content='' />
      </Head>
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image className="object-cover object-center rounded" alt="Code With Arnav Singh" width={400} height={400} src="/logo.png" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome To Code With Arnav</h1>
            <p className="mb-8 leading-relaxed">Hi{user?` ${displayName}`:null}, Code With Arnav Singh! Here You Can Find Many Courses And Feel Free To Use them as They are all free to use! Here I Teach many coding related stuff such as HTML, CSS, JS and many frameworks of them like react js (React.js), next js (Next.js) angular, cloud services such as AWS, Firebase, etc. I Also Teact Python where we build GUIs Machine Learning, Artificial Intelegence, Deep Learning, Neural Networks Using Frameworks Of Python. Also There Is A Mega Project of This channel named Jarvis (J.A.R.V.I.S) Everyone should once check out!</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Button</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;