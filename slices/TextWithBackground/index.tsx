import TextBackgroundImage from "@/components/TextBackgroundImage";
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
const TextWithBackground = ({ slice }: TextWithBackgroundProps) => {
  return (
    <TextBackgroundImage
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      backgroundImage={slice.primary.backgroundimage}
      classname="min-h-[70vh] bg-slate-900"
    >
      <div className="big-container block-space text-primary">
        <div className="text-center">
          <h2 className="text-mainWhite">{slice.primary.heading}</h2>
          <h4 className="mt-2 block text-mainWhite">{slice.primary.tagline}</h4>
        </div>
      </div>
    </TextBackgroundImage>
  );
};

export default TextWithBackground;
