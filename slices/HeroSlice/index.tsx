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
      classname={clsx("min-h-[60vh]", {
        "min-h-[90vh]": slice.primary.bigheight === true,
      })}
    >
      <Header />
      <div className="big-container">
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-4xl text-primary md:text-6xl">
              {slice.primary.heading}
            </h1>
            <span className="mt-2 block text-primary md:mt-4">
              {slice.primary.tagline}
            </span>
            {slice.primary.iscontactpage ? null : (
              <div className="mt-4 transition hover:scale-105">
                <Link
                  className="text-uppercase btn-primary px-6 py-2 font-bold text-white"
                  href="/contact"
                >
                  Set an Appointment
                </Link>
              </div>
            )}
            <div></div>
          </div>
        </div>
      </div>
    </BackgroundImageSection>
  );
};

export default HeroSlice;
