import { createClient } from "@/prismicio";
import React from "react";
import BlogCard from "./BlogCard";

const BlogIndex = async () => {
  const client = await createClient();
  const blogposts = await client.getAllByType("blogpost");

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogposts.map((item, index) => (
        <BlogCard key={index} post={item} />
      ))}
    </div>
  );
};

export default BlogIndex;
