import OperatingTeamMemberIndex from "@/components/OperatingTeamMemberIndex";
import TeamCardSkeleton from "@/components/Skeletons/TeamCardSkeleton";
import TeamMemberCard from "@/components/TeamMemberCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Suspense } from "react";

/**
 * Props for `OperationTeamIndex`.
 */
export type OperationTeamIndexProps =
  SliceComponentProps<Content.OperationTeamIndexSlice>;

/**
 * Component for "OperationTeamIndex" Slices.
 */
const OperationTeamIndex = ({
  slice,
}: OperationTeamIndexProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space bg-mainBlue"
    >
      <div className="big-container">
        <h2 className="heading font-extrabold">Operating Partners</h2>
        <Suspense
          fallback={
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6">
              <TeamCardSkeleton />
              <TeamCardSkeleton />
              <TeamCardSkeleton />
              <TeamCardSkeleton />
              <TeamCardSkeleton />
            </div>
          }
        >
          <OperatingTeamMemberIndex />
        </Suspense>
      </div>
    </section>
  );
};

export default OperationTeamIndex;
