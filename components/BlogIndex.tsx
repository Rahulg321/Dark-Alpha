import { createClient, getMasterRef } from "@/prismicio";
import React from "react";
import BlogIndexWrapper from "./BlogIndexWrapper";

const BlogIndex = async () => {
  const client = await createClient();
  const masterRef = await getMasterRef();

  const blogposts = await client.getAllByType("blogpost", {
    ref: masterRef,
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
  });

  const normalizedPosts = blogposts.map((post) => ({
    id: post.id,
    uid: post.uid ?? "",
    title: post.data.title ?? null,
    author: post.data.author ?? null,
    created_at: post.data.created_at ?? null,
    excerpt: post.data.excerpt ?? null,
    category: post.data.category ?? null,
    tags: Array.isArray(post.tags) ? post.tags : [],
    featured_image: post.data.featured_image ?? null,
    postLink: `/blog/${post.uid}`,
  }));

  return <BlogIndexWrapper posts={normalizedPosts} />;
};

export default BlogIndex;
