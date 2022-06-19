import Recomended from "../../components/Courses/RecomendedCourses";
import { useAuth, getData } from "../../contexts/Authentication";
import courses from '../../data/courses.json';
import React, { useState } from "react";
import Head from "next/head";

const Course = () => {
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
        <title> Arnav Singh - Courses </title>
        <meta name='author' content='Arnav Singh' />
        <meta name='description' content='Explore The Best Courses In The World To Become The Best' />
        <meta name='keywords' content='Arnav singh' />
      </Head>      
      <br />
      <section className="text-gray-600 body-font ">
        <h1 className="title-font text-center sm:text-4xl text-3xl mb-4 font-medium text-black" > Courses </h1>
        <p className="text-center container" >
          So{` ${displayName}`}, decided to pick up a new course. Select any one of these courses to learn more. Don&#39;t worry, you can always go back and change your mind.
        </p>
        <div className="container px-5 py-24 -mt-5 mx-auto">
          <div className="flex flex-wrap -m-4 -mt-24 justify-center ">
            {courses["courses"].map(course => {
              return (<Recomended key={course.key} category={course.category} title={course.title} description={course.description} image={course.image} />)
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;