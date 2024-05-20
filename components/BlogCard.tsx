import {
  Content,
  DateField,
  ImageField,
  KeyTextField,
} from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import React from "react";

type BlogCardProps = {
  post: Content.BlogpostDocument;
};

const BlogCard = ({ post }: BlogCardProps) => {
  const { title, featured_image, description } = post.data;
  const formattedDate = formatDate(post.data.created_at);
  return (
    <div className="mb-12 text-balance">
      <h2 className="mb-2 text-[#165679]">{title}</h2>
      <span className="mb-2 block font-semibold md:text-lg">
        {formattedDate}
      </span>
      <span className="mb-4 block text-lg md:text-xl">{description}</span>
      <Link
        href={`/blog/${post.uid}`}
        className="block text-xl font-semibold text-[#0f879f]"
      >
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;

export function formatDate(dateStr: DateField): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);

  // Options for formatting
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Format the date
  return new Intl.DateTimeFormat("en-US", options).format(date);
}
