import { createClient } from "@/prismicio";
import React from "react";
import BlogCard from "./BlogCard";

const BlogIndex = async () => {
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  const client = createClient();
  const blogposts = await client.getAllByType("blogpost");

  return (
    <div className="">
      {blogposts.map((item, index) => (
        <BlogCard key={index} post={item} />
      ))}
    </div>
  );
};

export default BlogIndex;
