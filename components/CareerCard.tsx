import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import React, { useEffect } from "react";
import CareerFormModal from "./CareerFormModal";
import Link from "next/link";

const CareerCard = ({ post }: { post: Content.CareerDocument }) => {
  const { data } = post;
  const { title, small_description } = data;

  return (
    <div className="mb-10">
      <div className="">
        <h2 className="mb-2 text-[#165679]">{post.data.title}</h2>
        <h4 className="mb-2">{post.data.department}</h4>
        <p>{post.data.small_description}</p>
      </div>
      <div>
        {/* <Link
          href={`/careers/${post.uid}`}
          className="text-uppercase btn-primary mt-4 block px-6 py-2 font-bold text-white transition"
        >
          Learn More
        </Link> */}
        <CareerFormModal post={post} />
      </div>
    </div>
  );
};

export default CareerCard;
