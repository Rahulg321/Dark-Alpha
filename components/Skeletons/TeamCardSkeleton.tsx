import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const TeamCardSkeleton = () => {
  return (
    <div className="flex flex-col items-center rounded-lg border p-4 shadow-md">
      {/* Image Skeleton */}
      <Skeleton className="mb-4 h-[16rem] w-full " />

      {/* Heading Skeleton */}
      <Skeleton className="mb-2 h-6 w-32" />

      {/* Designation Skeleton */}
      <Skeleton className="h-4 w-24" />
    </div>
  );
};

export default TeamCardSkeleton;
