import BackgroundImageSection from "@/components/BackgroundImageSection";
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
const HeroSlice = ({ slice }: HeroSliceProps) => {
  return (
    <BackgroundImageSection
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      backgroundImage={slice.primary.background_image}
      classname={clsx(
        "min-h-[80dvh] relative z-0 md:-mt-[6rem] lg:-mt-[8rem]",
      )}
    >
      <div className="big-container grid h-full grid-cols-1 lg:grid-cols-2">
        <div className="content-center justify-center">
          <h1 className="text-primary text-white">{slice.primary.heading}</h1>
          <span className="mt-2 block text-primary text-white md:mt-4">
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
        </div>
        <div></div>
      </div>
    </BackgroundImageSection>
  );
};

export default HeroSlice;
