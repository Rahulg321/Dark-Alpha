import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `LeftImageSlice`.
 */
export type LeftImageSliceProps =
  SliceComponentProps<Content.LeftImageSliceSlice>;

/**
 * Component for "LeftImageSlice" Slices.
 */
const LeftImageSlice = ({ slice }: LeftImageSliceProps): JSX.Element => {
  const ImageShouldBeLeft = slice.primary.image_left;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <div
          className={clsx("flex flex-col items-start md:flex-row", {
            " md:flex-row-reverse": ImageShouldBeLeft === false,
          })}
        >
          <div className="basis-1/3 px-8">
            <div className="aspect-h-1 aspect-w-1 relative">
              <PrismicNextImage
                field={slice.primary.leftimage}
                fill
                className="rounded-full object-cover"
              />
            </div>
          </div>

          <div className="basis-2/3 px-4">
            <div className="prose prose-xl prose-gray ">
              <PrismicRichText field={slice.primary.description} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftImageSlice;
