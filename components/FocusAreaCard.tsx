import React from "react";
import { cn } from "@/lib/utils";

type FocusAreaCardProps = {
  heading: string;
  icon: React.ReactNode;
};

const FocusAreaCard = ({ heading, icon }: FocusAreaCardProps) => {
  return (
    <article
      className={cn(
        "group relative flex flex-col items-center gap-4 px-5 py-6",
        "sm:gap-5 sm:px-6 sm:py-8",
        "md:gap-6 md:px-8 md:py-10",
        "lg:gap-6 lg:px-10 lg:py-12",
        "rounded-lg border border-border/60 bg-card/50 transition-all duration-300",
        "hover:border-border hover:bg-card/80 hover:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)]",
        "dark:hover:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.3)]",
      )}
    >
      <div
        className={cn(
          "flex h-11 w-11 items-center justify-center text-xl text-muted-foreground",
          "sm:h-12 sm:w-12 sm:text-2xl",
          "md:h-14 md:w-14 md:text-3xl",
          "lg:h-16 lg:w-16 lg:text-4xl",
          "transition-colors duration-300 group-hover:text-foreground",
        )}
      >
        {icon}
      </div>
      <span
        className={cn(
          "text-center font-medium tracking-wide text-foreground",
          "text-sm sm:text-base md:text-lg lg:text-xl",
        )}
      >
        {heading}
      </span>
    </article>
  );
};

export default FocusAreaCard;
