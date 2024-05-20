import { formatDate } from "@/components/BlogCard";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FaPenNib } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";

/**
 * Props for `BlogTextBlock`.
 */
export type BlogTextBlockProps =
  SliceComponentProps<Content.BlogTextBlockSlice>;

/**
 * Component for "BlogTextBlock" Slices.
 */
const BlogTextBlock = ({ slice }: BlogTextBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space text-pretty"
    >
      <div className="narrow-container">
        <div className="heading mb-12">
          <h1 className="mb-4">{slice.primary.title}</h1>
          <h3 className="flex items-center gap-2">
            <FaPenNib />
            Destiny Aigbe
          </h3>
        </div>
        <div className="prose prose-lg prose-gray md:prose-xl prose-headings:mb-4 prose-h2:mt-8 prose-ul:text-base">
          <PrismicRichText field={slice.primary.content} />
        </div>
      </div>
    </section>
  );
};

export default BlogTextBlock;
