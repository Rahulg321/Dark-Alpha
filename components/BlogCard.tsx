import { DateField, ImageField, KeyTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import React from "react";

type BlogCardProps = {
  title: KeyTextField;
  description: KeyTextField;
  heroImg: ImageField;
  createdAt: DateField;
};

const BlogCard = ({
  title,
  description,
  heroImg,
  createdAt,
}: BlogCardProps) => {
  const formattedDate = convertDateToDayMonthYear(createdAt);
  return (
    <div className="mt-4 flex">
      <div className="flex-1 px-12">
        <div className="aspect-h-1 aspect-w-1 relative">
          <PrismicNextImage field={heroImg} fill className="object-cover" />
        </div>
      </div>
      <div className="flex-1">
        <span className="text-xl font-bold italic">{formattedDate}</span>
        <h2 className="my-4 font-extrabold">{title}</h2>
        <span className="my-6 block text-base font-semibold text-gray-600">
          {description}
        </span>
        <button className="bg-black px-8 py-3 text-white transition-all hover:border hover:border-black hover:bg-white  hover:font-bold hover:text-black">
          Read More
        </button>
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
