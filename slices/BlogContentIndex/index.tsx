import BlogIndex from "@/components/BlogIndex";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Suspense } from "react";

/**
 * Props for `BlogContentIndex`.
 */
export type BlogContentIndexProps =
  SliceComponentProps<Content.BlogContentIndexSlice>;

/**
 * Component for "BlogContentIndex" Slices.
 */
const BlogContentIndex = ({ slice }: BlogContentIndexProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space narrow-container"
    >
      <h1 className="mb-6 md:mb-8">All Posts</h1>
      <Suspense
        fallback={
          <div className="text-center" role="progressbar">
            <LoadingSpinner />
          </div>
        }
      >
        <BlogIndex />
      </Suspense>
    </section>
  );
};

export default BlogContentIndex;
