import BreadCrums from "../../../components/Specialised/BreadCrums";
import useMediaQuery from "../../../contexts/CheckScreenSize";
import imageUrlBuilder from '@sanity/image-url';
import PortableText from "react-portable-text";
import { createClient } from 'next-sanity';
import { useRouter } from "next/router";
import React, { useId } from 'react';
import NotFound from "../../404";
import Link from "next/link";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const courseSlug = (courseContent) => {
  const client = createClient({
    projectId: "e4xrshwm",
    apiVersion: '2021-08-31',
    dataset: "production",
    useCdn: false
  });

  const isSmallDevice = useMediaQuery(1000);
  const builder = imageUrlBuilder(client);
  const Router = useRouter();
  console.log(courseContent);

  if (courseContent.courseContent.length == 0) {
    return (
      <NotFound />
    )
  } else if (Router.query.tutorial == undefined) {
    return (
      <div>
        <React.Fragment>
          <BreadCrums
            typeNo={3}
            title1={`Home`}
            title2={`Courses`}
            title3={capitalizeFirstLetter(courseContent["courseContent"][0]["courseCategory"])}
            link1={`/`}
            link2={`/courses`}
            link3={`/courses/${courseContent["courseContent"][0]["courseCategory"]}`} />
          <br />
          <h1 className="text-6xl text-center capitalize" >{courseContent["courseContent"][0]["courseCategory"]}</h1>
          <br />
          <p>{courseContent["courseContent"][0]["description2"]}</p>
          <div className="flex flex-wrap justify-center" >
            {courseContent["courseContent"].map((course) => {
              return (
                <div className="p-4 md:w-1/3 cursor-pointer" key={useId}>
                  <Link href={`/courses/${Router.query.slug}?tutorial=${course.slug.current}`} >
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden" >
                      <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={builder.image(course.mainImage)} alt="blog" width={720} height={400} />
                      <div className="p-6">
                        <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{course.title}</h1>
                        <div className="flex items-center flex-wrap">
                          <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href={`/courses/${course.slug.current}`} >Learn More</Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </React.Fragment>
      </div>
    )
  }
  else if (Router.query.tutorial !== undefined) {
    for (let elementData = 0; elementData < courseContent["courseContent"].length; elementData++) {
      let element = courseContent["courseContent"][elementData];
      if (element.slug.current == Router.query.tutorial) {
        return (
          <React.Fragment>
            <br />
            <BreadCrums
              typeNo={4}
              title1={`Home`}
              title2={`Courses`}
              title3={capitalizeFirstLetter(courseContent["courseContent"][0]["courseCategory"])}
              title4={element.title}
              link1={`/`}
              link2={`/courses`}
              link3={`/courses/${courseContent["courseContent"][0]["courseCategory"]}`}
              link4={`/courses/${courseContent["courseContent"][0]["courseCategory"]}?tutorial=${element.slug.current}`}
            />
            <h1 className='text-4xl text-center mt-3'> {element.title} </h1>
            <br />
            <div className="flex" >
              <div className="bg-slate-600 h-96 mr-5 ml-5" style={{ width: `${isSmallDevice?`95%`:`75vw`}` }} >
                <PortableText content={element.body} className="text-center" />
              </div>
              {!isSmallDevice ?
                <React.Fragment>
                  <div className="bg-slate-600 h-96 mr-5 ml-5" style={{ width: "20vw" }} >

                  </div>
                </React.Fragment>
                :
                null
              }
            </div>
            <br />
          </React.Fragment>
        )
      }
    }
  }
}

export default courseSlug;

export const getServerSideProps = async (context) => {
  const { slug } = context.query
  const client = createClient({
    projectId: "e4xrshwm",
    apiVersion: '2021-08-31',
    dataset: "production",
    useCdn: false
  });
  const courseContentQuery = `* [_type == "courseContent" && courseCategory == "${slug}"] | order(_createdAt asc)`
  const courseQuery = `* [_type == "course" && courseCategory == "${slug}"]`
  const courseContent = await client.fetch(courseContentQuery);
  const course = await client.fetch(courseQuery);
  return {
    props: {
      courseContent,
      course
    }
  }
}