import React from "react";
import { Skeleton } from "../ui/skeleton";

const CareerCardSkeleton = () => {
  return (
    <div className="space-y-4 rounded-md border p-4 shadow-sm">
      {/* Skeleton for the heading */}
      <Skeleton className="h-6 w-3/4" />

      {/* Skeleton for the tagline */}
      <Skeleton className="h-4 w-5/6" />

      {/* Skeleton for the button */}
      <Skeleton className="h-10 w-1/3 rounded-md" />
    </div>
  );
};

export default CareerCardSkeleton;
