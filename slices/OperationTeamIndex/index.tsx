import TeamCardSkeleton from "@/components/Skeletons/TeamCardSkeleton";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Suspense } from "react";
import FilterPageTags from "@/components/filter-page-tags";
import { createClient } from "@/prismicio";
import OperatingTeamWrapper from "@/components/OperatingTeamWrapper";

/**
 * Props for `OperationTeamIndex`.
 */
export type OperationTeamIndexProps =
  SliceComponentProps<Content.OperationTeamIndexSlice>;

/**
 * Component for "OperationTeamIndex" Slices.
 */
const OperationTeamIndex = ({ slice }: OperationTeamIndexProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space bg-mainBlue"
    >
      <div className="big-container">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-6">
          <h2 className="font-extrabold">Operating Partners</h2>
          <div className="w-full sm:w-auto">
            <Suspense fallback={<div>Loading...</div>}>
              <FilterPageTags />
            </Suspense>
          </div>
        </div>
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
          <FetchAndDisplayOperatingTeamMembers />
        </Suspense>
      </div>
    </section>
  );
};

export default OperationTeamIndex;

const FetchAndDisplayOperatingTeamMembers = async () => {
  const client = await createClient();
  const operatingTeamMembers = await client.getAllByType("operatingmember");
  return <OperatingTeamWrapper operatingTeamMembers={operatingTeamMembers} />;
};
