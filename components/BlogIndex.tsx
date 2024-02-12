import { createClient } from "@/prismicio";
import React from "react";
import BlogCard from "./BlogCard";

const BlogIndex = async () => {
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  const client = createClient();
  const blogposts = await client.getAllByType("blogpost");

  return (
    <div>
      {blogposts.map((item, index) => (
        <BlogCard
          key={index}
          title={item.data.heading}
          uid={item.uid}
          description={item.data.description}
          heroImg={item.data.hero_image}
          createdAt={item.data.created_at}
        />
      ))}
    </div>
  );
};

export default BlogIndex;
