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
  const { title, featured_image, description, author } = post.data;
  const formattedDate = formatDate(post.data.created_at);

  return (
    <article className="mb-8 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      {/* Featured Image */}
      {featured_image && (
        <div className="relative h-48 w-full overflow-hidden">
          <PrismicNextImage
            field={featured_image}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Author and Date */}
        <div className="mb-3 flex items-center gap-2 text-sm text-gray-600">
          {author && (
            <>
              <span className="font-medium">{author}</span>
              <span className="text-gray-400">•</span>
            </>
          )}
          <time className="text-gray-500">{formattedDate}</time>
        </div>

        {/* Title */}
        <h2 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900">
          {title}
        </h2>

        {/* Description */}
        <p className="mb-4 line-clamp-3 leading-relaxed text-gray-700">
          {description}
        </p>

        {/* Read More Link */}
        <Link
          href={`/blog/${post.uid}`}
          className="inline-flex items-center font-semibold text-blue-600"
        >
          Read More
          <svg
            className="ml-1 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
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
