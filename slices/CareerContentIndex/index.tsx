import CareerIndex from "@/components/CareerIndex";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Suspense } from "react";

/**
 * Props for `CareerContentIndex`.
 */
export type CareerContentIndexProps =
  SliceComponentProps<Content.CareerContentIndexSlice>;

/**
 * Component for "CareerContentIndex" Slices.
 */
const CareerContentIndex = ({
  slice,
}: CareerContentIndexProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space narrow-container"
    >
      <h1 className="mb-6 text-center lg:mb-12">Open Roles</h1>
      <Suspense
        fallback={
          <div className="text-center" role="progressbar">
            <LoadingSpinner />
          </div>
        }
      >
        <CareerIndex />
      </Suspense>
    </section>
  );
};

export default CareerContentIndex;
