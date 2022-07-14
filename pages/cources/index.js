import { useAuth, getData } from "../../contexts/Authentication";
import Recomended from "../../components/Recomended";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import React, { useState } from "react";
import { useId } from "react";
import Head from "next/head";
import Link from "next/link";

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
        <h1 className="title-font text-center sm:text-4xl text-3xl mb-4 font-medium text-black" > Courses </h1>
        <p className="text-center container max-w-3xl" >
          So{displayName ? <span> {displayName}</span> : null}, decided to pick up a new course. Select any one of these courses to learn more. Don&#39;t worry, you can always go back and change your mind. There are plenty of options also. So get ready with your laptop/desktop and start learning today at <Link className="courcesWebsite" href={`/`} >arnav.vercel.app</Link>.
        </p>
        <br />
        {course.length > 0 ? <React.Fragment>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 -mt-5 mx-auto">
              <div className="flex flex-wrap -m-4 -mt-24 justify-center ">
                {course.map((course) => {
                  return (
                    <Recomended key={useId} category={course.category} title={course.title} description={`${course.description}`} image={builder.image(course.mainImage)} link={`/cources/${course.slug.current}`} />
                  );
                })}
              </div>
            </div>
          </section>
        </React.Fragment> : null}
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