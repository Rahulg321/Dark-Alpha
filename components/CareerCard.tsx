import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import React, { useEffect } from "react";
import CareerFormModal from "./CareerFormModal";
import Link from "next/link";
import CareerFormDialog from "./dialogs/CareerFormDialog";
import { Badge } from "./ui/badge";

const CareerCard = ({ post }: { post: Content.CareerDocument }) => {
  const { data } = post;
  const { title, small_description, department } = data;

  return (
    <div className="mb-10">
      <div className="">
        <h2 className="mb-2 text-[#165679]">{title}</h2>
        {department && (
          <Badge className="mb-4" variant={"outline"}>
            {department}
          </Badge>
        )}
        <p>{small_description}</p>
      </div>
      <div>
        <CareerFormDialog post={post} />
      </div>
    </div>
  );
};

export default CareerCard;
