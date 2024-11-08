import CareerIndex from "@/components/CareerIndex";
import LoadingSpinner from "@/components/LoadingSpinner";
import CareerCardSkeleton from "@/components/Skeletons/CareerCardSkeleton";
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
          <div className="grid grid-cols-1 space-y-4">
            <CareerCardSkeleton />
            <CareerCardSkeleton />
            <CareerCardSkeleton />
            <CareerCardSkeleton />
          </div>
        }
      >
        <CareerIndex />
      </Suspense>
    </section>
  );
};

export default CareerContentIndex;
