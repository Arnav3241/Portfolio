import React from 'react';
import { createClient } from "next-sanity";

const Mathematics = ({ Post }) => {
  Post = Post[0]
  console.log(Post)
  return (
    <div>
      Mathematics
    </div>
  )
}

export default Mathematics;

export const getServerSideProps = async (context) => {
  const { slug } = context.query
  const client = createClient({
    projectId: "e4xrshwm",
    apiVersion: '2021-08-31',
    dataset: "production",
    useCdn: false
  });
  const postQuery = `* [slug.current == "${slug}"] `
  const Post = await client.fetch(postQuery);
  return {
    props: {
      Post
    }
  }
}