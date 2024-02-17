import BackgroundImageSection from "@/components/BackgroundImageSection";
import Header from "@/components/Header";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
      classname="min-h-[60vh]  md:min-h-[80vh] lg:min-h-[90vh]"
    >
      <Header />
      <div className="mt-6 text-center">
        <h1 className="text-4xl text-primary md:text-6xl">
          {slice.primary.heading}
        </h1>
        <span className="mt-2 block text-xl text-primary md:mt-4">
          {slice.primary.tagline}
        </span>
      </div>
    </BackgroundImageSection>
  );
};

export default HeroSlice;
