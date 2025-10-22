import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="min-h-screen">
      {/* Header Skeleton */}
      <div className="border-b bg-white">
        <div className="big-container">
          <div className="flex items-center justify-between py-4">
            <Skeleton className="h-8 w-32" />
            <div className="hidden items-center space-x-6 md:flex">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
            </div>
            <Skeleton className="h-8 w-24" />
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="relative min-h-[80dvh] bg-gray-100">
        <div className="big-container py-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-10 w-48" />
            </div>
            <div className="hidden lg:block">
              <Skeleton className="h-64 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections Skeleton */}
      <div className="block-space bg-white">
        <div className="narrow-container space-y-8">
          <Skeleton className="mx-auto h-8 w-48" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </div>

      {/* Cards Section Skeleton */}
      <div className="block-space bg-gray-50">
        <div className="big-container">
          <Skeleton className="mx-auto mb-12 h-8 w-64" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-lg bg-white p-6 shadow-sm">
                <Skeleton className="mb-4 h-6 w-3/4" />
                <Skeleton className="mb-2 h-4 w-full" />
                <Skeleton className="mb-2 h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="bg-gray-900 text-white">
        <div className="big-container py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-6 w-24 bg-gray-700" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-32 bg-gray-700" />
                  <Skeleton className="h-4 w-28 bg-gray-700" />
                  <Skeleton className="h-4 w-36 bg-gray-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
