import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";

export type LeftImageSliceProps =
  SliceComponentProps<Content.LeftImageSliceSlice>;

const LeftImageSlice = ({ slice }: LeftImageSliceProps): JSX.Element => {
  const ImageShouldBeLeft = slice.primary.image_left;
  const ImageIsCircle = slice.primary.image_circle;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx("block-space bg-mainBlue", {
        "bg-mainWhite": ImageShouldBeLeft === true,
      })}
    >
      <div className="big-container">
        <div
          className={clsx("flex flex-col gap-6 md:flex-row md:gap-8", {
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
            <div className="prose prose-lg prose-gray md:prose-xl prose-headings:mb-4 prose-h2:mt-8 prose-ul:text-base">
              <PrismicRichText field={slice.primary.description} />
            </div>
            {slice.primary.showlearnmorebutton ? (
              <div className="bg-mainButtonAccent hover:bg-mainWhite mt-4 w-fit px-6 py-2 font-semibold text-white transition hover:border-2  hover:text-black">
                <PrismicLink field={slice.primary.page_link}>
                  Learn More
                </PrismicLink>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftImageSlice;
