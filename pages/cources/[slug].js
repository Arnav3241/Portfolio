import React from 'react';
import { createClient } from 'next-sanity';
import NotFound from "../404"

const courceSlug = (courseContent) => {
  console.log(courseContent)
  if ( courseContent.courseContent.length == 0 ) {
    return (
      <NotFound />
    )
  } else {
    return (
      <div>
        <React.Fragment>
          
        </React.Fragment>
      </div>
    )
  }
}

export default courceSlug;

export const getServerSideProps = async (context) => {
  const { slug } = context.query
  const client = createClient({
    projectId: "e4xrshwm",
    apiVersion: '2021-08-31',
    dataset: "production",
    useCdn: false
  });
  const courseContentQuery = `*[_type == "courseContent" && courseCategory == "${slug}"]`;
  const courseContent = await client.fetch(courseContentQuery);
  return {
    props: {
      courseContent
    }
  }
}