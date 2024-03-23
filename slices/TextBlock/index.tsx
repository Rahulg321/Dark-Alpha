import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  return (
    <div
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="narrow-container">
        <div className="prose prose-lg prose-gray md:prose-xl prose-headings:mb-4 prose-h2:mt-8 prose-ul:text-base">
          <PrismicRichText field={slice.primary.main_content} />
        </div>
      </div>
    </div>
  );
};

export default TextBlock;
