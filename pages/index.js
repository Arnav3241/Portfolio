import { useAuth, getData } from "../contexts/Authentication";
import Recomended from "../components/Recomended";
import imageUrlBuilder from "@sanity/image-url";
import React, { useState, useId } from "react";
import { createClient } from "next-sanity";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from 'next/head';

const Home = ({ course }) => {
  const client = createClient({
    projectId: "e4xrshwm",
    apiVersion: '2021-08-31',
    dataset: "production",
    useCdn: false
  });

  const user = useAuth();
  const [displayName, setDisplayName] = useState("");
  const router = useRouter();
  const builder = imageUrlBuilder(client);

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
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image className="object-cover object-center rounded" alt="Code With Arnav Singh" width={400} height={400} src="/logo.png" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start items-center lg:text-left">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black text-center ">Welcome To <span className="text-blue-500" > Code With Arnav </span> </h1>
            <p className="mb-8 text-gray-600 leading-relaxed">Hi{user ? ` ${displayName}` : null}, welcome to Code With Arnav Singh! Do you want to learn languages like HTML, CSS, JS, Python, Node JS, And Frameworks Of Web Development? Don&apos;t worry, we have covered all of it! Wanna Learn Them? No Problem Get The Courses By Clicking The Courses Button below! Also do you want daily blogs no problem click the Blogs button below.</p>
            <div className="flex justify-center content-center">
              <button onClick={() => { router.push("/courses") }} className="bg-black inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"> Courses </button>
              <button onClick={() => { router.push("/blogs") }} className="ml-4 inline-flex bg-black text-white  border-0 py-2 px-6 focus:outline-none rounded text-lg"> Blogs </button>
            </div>
          </div>
        </div>
      </section>
      {course.length > 0 ? <React.Fragment>
        <section className="text-gray-600 body-font">
          <h1 className="text-center sm:text-4xl text-3xl mb-4 font-medium text-black" > Recomended Courses! </h1>
          <div className="container px-5 py-24 -mt-5 mx-auto">
            <div className="flex flex-wrap -m-4 -mt-24 justify-center">
              {course.map((course) => {
                return (
                  <Recomended key={useId} category={course.category} title={course.title} description={`${course.description}`} image={builder.image(course.mainImage)} link={`/courses/${course.slug.current}`} />
                );
              })}
            </div>
          </div>
        </section>
      </React.Fragment> : null}
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "e4xrshwm",
    apiVersion: '2021-08-31',
    dataset: "production",
    useCdn: false
  });
  const query = `*[_type == "courses"] | order(_createdAt desc) [0...3] `;
  const course = await client.fetch(query);
  return {
    props: {
      course
    }
  }
}