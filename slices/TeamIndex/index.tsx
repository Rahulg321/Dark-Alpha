import ExecutiveTeamIndex from "@/components/ExecutiveTeamIndex";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { Suspense } from "react";
import TeamCardSkeleton from "@/components/Skeletons/TeamCardSkeleton";

/**
 * Props for `TeamIndex`.
 */
export type TeamIndexProps = SliceComponentProps<Content.TeamIndexSlice>;

/**
 * Component for "TeamIndex" Slices.
 */
const TeamIndex = ({ slice }: TeamIndexProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space bg-mainBlue"
    >
      <div className="big-container">
        <h1 className="heading font-extrabold">Who We Are</h1>
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
          <ExecutiveTeamIndex />
        </Suspense>
      </div>
    </section>
  );
};

export default TeamIndex;
