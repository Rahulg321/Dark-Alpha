import BackgroundImageSection from "@/components/BackgroundImageSection";
import Header from "@/components/Header";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import Link from "next/link";

/**
 * Props for `HeroSlice`.
 */
export type HeroSliceProps = SliceComponentProps<Content.HeroSliceSlice>;

/**
 * Component for "HeroSlice" Slices.
 */
const HeroSlice = ({ slice }: HeroSliceProps): JSX.Element => {
  return (
    <BackgroundImageSection
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      backgroundImage={slice.primary.background_image}
      classname={clsx("min-h-[80vh]", {
        "min-h-[90vh]": slice.primary.bigheight === true,
      })}
    >
      <Header />
      <div className="big-container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h1 className="text-primary md:text-4xl lg:text-6xl">
              {slice.primary.heading}
            </h1>
            <span className="mt-2 block text-primary md:mt-4">
              {slice.primary.tagline}
            </span>

            <div className="mt-6">
              <Link
                className="text-uppercase btn-primary px-6 py-2 font-bold text-white transition"
                href="https://calendly.com/darkalphacapital"
                target="_blank"
              >
                SET AN APPOINTMENT
              </Link>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </BackgroundImageSection>
  );
};

export default HeroSlice;
