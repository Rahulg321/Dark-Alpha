import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FirmOverview`.
 */
export type FirmOverviewProps = SliceComponentProps<Content.FirmOverviewSlice>;

/**
 * Component for "FirmOverview" Slices.
 */
const FirmOverview = ({ slice }: FirmOverviewProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space bg-white"
    >
      <div className="narrow-container">
        <h2 className="heading tracking-loose text-6xl">Firm Overview</h2>
        <div className="prose  md:prose-lg lg:prose-xl">
          <PrismicRichText field={slice.primary.firm_overview_content} />
        </div>
      </div>
    </section>
  );
};

export default FirmOverview;
