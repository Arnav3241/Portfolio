import { useAuth, getData } from "../../contexts/Authentication";
// import Recomended from "../../components/Recomended";
import imageUrlBuilder from "@sanity/image-url";
import Skeleton from "react-loading-skeleton";
import { createClient } from "next-sanity";
import React, { useState } from "react";
import { useId } from "react";
import Link from "next/link";
import Head from "next/head";

const Course = ({ course }) => {
  // Sanity Client:
  const client = createClient({
    projectId: "e4xrshwm",
    apiVersion: '2021-08-31',
    dataset: "production",
    useCdn: false
  });

  const user = useAuth();
  const [displayName, setDisplayName] = useState("");
  const builder = imageUrlBuilder(client)

  if (user) {
    const Data = Promise.resolve(getData(user.uid));
    Data.then(data => {
      setDisplayName(data.Name);
    })
  }

  return (
    <div>
      <Head>
        <title> Arnav Singh - Courses </title>
        <meta name='author' content='Arnav Singh' />
        <meta name='description' content='Explore The Best Courses In The World To Become The Best' />
        <meta name='keywords' content='Arnav singh' />
      </Head>
      <br />
      <section className="text-gray-600 body-font ">
        <h1 className="title-font text-center sm:text-4xl text-3xl mb-4 font-medium text-black capitalize" > Courses </h1>
        <p className="text-center container max-w-3xl" >
          So{displayName ? <span> {displayName}</span> : null}, decided to pick up a new course. Select any one of these courses to learn more. Don&#39;t worry, you can always go back and change your mind. There are plenty of options also. So get ready with your laptop/desktop and start learning today at arnav.vercel.app.
        </p>
        <br />
        { course && course.length > 0 ? <React.Fragment>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 -mt-5 mx-auto">
              <div className="flex flex-wrap -m-4 -mt-24 justify-center ">
                {course.map((course) => {
                  return (
                    <div className="p-4 md:w-1/3 cursor-pointer" key={useId}>
                      <Link href={course.slug.current ? `/courses/${course.slug.current}` : `/`} >
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden" >
                          { builder.image(course.mainImage) ? <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={builder.image(course.mainImage)} alt="blog" width={720} height={400} /> : <Skeleton /> }
                          <div className="p-6">
                            { course.category ? <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{course.category}</h2> : <Skeleton /> }
                            { course.title ? <h1 className="title-font text-lg font-medium text-gray-900 mb-3 capitalize">{course.title}</h1> : <Skeleton /> }
                            { course.description ? <p className="leading-relaxed mb-3">{course.description}</p> : <Skeleton /> }
                            <div className="flex items-center flex-wrap">
                              <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href={course.slug.current ? `/courses/${course.slug.current}` : `/`} >Learn More</Link>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </React.Fragment> : <Skeleton />}
      </section>
    </div>
  );
};

export default Course;

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "e4xrshwm",
    apiVersion: '2021-08-31',
    dataset: "production",
    useCdn: false
  });
  const query = `*[_type == "courses"] | order(_createdAt desc)`;
  const course = await client.fetch(query);
  return {
    props: {
      course
    }
  }
}