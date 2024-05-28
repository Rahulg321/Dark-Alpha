import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import React from "react";
import CareerFormModal from "./CareerFormModal";

const CareerCard = ({ post }: { post: Content.CareerDocument }) => {
  const { data } = post;
  const { title, small_description } = data;

  return (
    <div className="mb-10">
      <h2 className="mb-2 text-[#165679]">{post.data.title}</h2>
      <h4 className="mb-2">{post.data.department}</h4>
      <span className="mb-2 block font-semibold md:text-lg">
        {post.data.small_description}
      </span>
      <CareerFormModal post={post} />
    </div>
  );
};

export default CareerCard;
