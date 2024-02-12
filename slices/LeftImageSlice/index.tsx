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
  const ImageIsCircle = slice.primary.image_circle;
  console.log(ImageIsCircle);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx("block-space ", {
        "bg-primary": ImageShouldBeLeft === true,
      })}
    >
      <div className="big-container">
        <div
          className={clsx("flex flex-col md:flex-row", {
            "md:flex-row-reverse": ImageShouldBeLeft === false,
          })}
        >
          <div className="basis-1/2 md:basis-1/3">
            <div className="aspect-h-1 aspect-w-1 relative">
              <PrismicNextImage
                field={slice.primary.leftimage}
                fill
                className={clsx("object-cover", {
                  "rounded-full": ImageIsCircle === true,
                })}
              />
            </div>
          </div>

          <div className="basis-1/2 md:basis-2/3">
            <div className="prose md:prose-xl">
              <PrismicRichText field={slice.primary.description} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftImageSlice;
