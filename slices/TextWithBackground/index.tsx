import BackgroundImageSection from "@/components/BackgroundImageSection";
import TextBackgroundImage from "@/components/TextBackgroundImage";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `TextWithBackground`.
 */
export type TextWithBackgroundProps =
  SliceComponentProps<Content.TextWithBackgroundSlice>;

/**
 * Component for "TextWithBackground" Slices.
 */
const TextWithBackground = ({
  slice,
}: TextWithBackgroundProps): JSX.Element => {
  return (
    <TextBackgroundImage
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      backgroundImage={slice.primary.backgroundimage}
      classname="min-h-[40vh]"
    >
      <div className="big-container block-space">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <h2 className="text-primary">{slice.primary.heading}</h2>
            <span className="mt-2 block text-primary">
              {slice.primary.tagline}
            </span>
          </div>
          <div className="">
            {/* <div className="mt-4 transition hover:scale-105">
              <Link
                className="text-uppercase btn-primary px-6 py-2 font-bold text-white"
                href="/contact"
              >
                Set an Appointment
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </TextBackgroundImage>
  );
};

export default TextWithBackground;
