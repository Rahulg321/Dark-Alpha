import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CriteriaInfoSlice`.
 */
export type CriteriaInfoSliceProps =
  SliceComponentProps<Content.CriteriaInfoSliceSlice>;

/**
 * Component for "CriteriaInfoSlice" Slices.
 */
const CriteriaInfoSlice = ({ slice }: CriteriaInfoSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space bg-primary"
    >
      <div className="big-container">
        <div className="grid-cols grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="">
            <h2 className="mb-4 font-bold">Financial & Geographic</h2>
            <ul className="list-disc px-4 text-base font-semibold text-gray-600">
              <li>Based in North America</li>
              <li>$3 million+ of EBITDA</li>
              <li>Track record of stable earnings and cash flow generation</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-bold ">Industry</h2>
            <ul className="list-disc px-4 text-base font-semibold text-gray-600">
              <li>Long-term and stable growth drivers</li>
              <li>Fragmented industry with a large addressable market</li>
              <li>Limited cyclicality or commodity exposure</li>
              <li>Low risk of obsolescence / tech disruption</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-bold ">Business</h2>
            <ul className="list-disc px-4 text-base font-semibold text-gray-600">
              <li>Multiple levers for growth </li>
              <li>Pricing power</li>
              <li>
                Good visibility, driven by reoccurring revenue and low customer
                concentration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CriteriaInfoSlice;
