import LoadingSpinner from "@/components/LoadingSpinner";
import React from "react";

const loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center text-7xl">
      <LoadingSpinner />
    </div>
  );
};

export default loading;
