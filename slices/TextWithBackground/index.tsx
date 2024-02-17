import BackgroundImageSection from "@/components/BackgroundImageSection";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
    <BackgroundImageSection
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      backgroundImage={slice.primary.backgroundimage}
      classname="min-h-[60vh]"
    >
      <div className="mt-auto text-center">
        <h1 className="text-4xl text-primary md:text-6xl">
          {slice.primary.heading}
        </h1>
        <span className="mt-2 block text-xl text-primary md:mt-4 md:text-2xl">
          {slice.primary.tagline}
        </span>
      </div>
    </BackgroundImageSection>
  );
};

export default TextWithBackground;
