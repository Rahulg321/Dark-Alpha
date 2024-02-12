import BackgroundImageSection from "@/components/BackgroundImageSection";
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
      classname="min-h-[60vh]  md:min-h-[80vh]"
    >
      <h1 className="text-primary">{slice.primary.heading}</h1>
      <span className=" text-primary">{slice.primary.tagline}</span>
    </BackgroundImageSection>
  );
};

export default HeroSlice;
