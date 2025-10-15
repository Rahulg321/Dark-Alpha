import { createClient } from "@/prismicio";
import React from "react";
import BlogCard from "./BlogCard";

const BlogIndex = async () => {
  const client = await createClient();
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
