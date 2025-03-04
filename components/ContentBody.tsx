import { Content } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import React from "react";
import { components } from "@/slices";

const ContentBody = ({ page }: { page: Content.BlogpostDocument }) => {
  return (
    <article className="">
      <SliceZone slices={page.data.slices} components={components} />
    </article>
  );
};

export default ContentBody;
