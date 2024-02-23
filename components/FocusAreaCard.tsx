import React from "react";
import { BsFillAirplaneEnginesFill } from "react-icons/bs";

type FocusAreaCardProps = {
  heading: string;
  icon: any;
};

const FocusAreaCard = ({ heading, icon }: FocusAreaCardProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-5xl md:text-7xl lg:text-8xl">{icon}</div>
      <div>
        <span className="font-semibold md:text-xl lg:text-2xl">{heading}</span>
      </div>
    </div>
  );
};

export default FocusAreaCard;
