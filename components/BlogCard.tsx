import { DateField, ImageField, KeyTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import React from "react";

type BlogCardProps = {
  title: KeyTextField;
  uid: string;
  description: KeyTextField;
  heroImg: ImageField;
  createdAt: DateField;
};

const BlogCard = ({
  title,
  uid,
  description,
  heroImg,
  createdAt,
}: BlogCardProps) => {
  const formattedDate = convertDateToDayMonthYear(createdAt);
  return (
    <div className="mt-12 flex flex-col gap-8 md:flex-row">
      <div className="basis-1/3">
        <div className="aspect-h-1 aspect-w-1 relative">
          <PrismicNextImage field={heroImg} fill className="object-cover" />
        </div>
      </div>
      <div className="basis-2/3">
        <span className="text-xl font-bold italic">{formattedDate}</span>
        <h2 className="my-2 font-extrabold md:my-4">{title}</h2>
        <span className="block text-base font-semibold text-gray-600">
          {description}
        </span>
        <Link
          href={`/blog/${uid}`}
          className="mt-2 inline-block bg-black px-4 py-3 text-white transition-all hover:border hover:border-black hover:bg-white  hover:font-bold hover:text-black"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

function convertDateToDayMonthYear(dateString: string | DateField) {
  // Validate input date string format (optional)
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString as string)) {
    throw new Error(
      "Invalid date format. Please provide a date in YYYY-MM-DD format.",
    );
  }

  // Create a Date object from the string
  const date = new Date(dateString as string);

  // Get day, month name (full word), and year
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" }); // Use longer month name
  const year = date.getFullYear();

  // Format the output string
  return `${day} ${month} ${year}`;
}
