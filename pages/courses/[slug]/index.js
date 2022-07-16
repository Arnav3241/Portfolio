import Recomended from "../../../components/Recomended"
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import NotFound from "../../404";
import React, { useId } from 'react';
import Link from "next/link";

const courseSlug = (courseContent) => {
  const client = createClient({
    projectId: "e4xrshwm",
    apiVersion: '2021-08-31',
    dataset: "production",
    useCdn: false
  });

  const builder = imageUrlBuilder(client)

  if (courseContent.courseContent.length == 0) {
    return (
      <NotFound />
    )
  } else {
    return (
      <div>
        <React.Fragment>
          <br />
          <h1 className="text-6xl text-center capitalize" >{courseContent["courseContent"][0]["courseCategory"]}</h1>
          <div className="flex flex-wrap justify-center" >
            {courseContent["courseContent"].map((course) => {
              return (
                <div className="p-4 md:w-1/3 cursor-pointer" key={useId()}>
                  <Link href={`/videos/${course.slug.current}`} >
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden" >
                      <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={builder.image(course.mainImage)} alt="blog" width={720} height={400} />
                      <div className="p-6">
                        <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{course.title}</h1>
                        <div className="flex items-center flex-wrap">
                          <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href={`/videos/${course.slug.current}`} >Learn More</Link>
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
  const courseContent = await client.fetch(courseContentQuery);
  return {
    props: {
      courseContent
    }
  }
}
