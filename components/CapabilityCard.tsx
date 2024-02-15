import clsx from "clsx";
import React from "react";
import { SiAtom } from "react-icons/si";

type CapabilityCardProps = {
  backgroundColor: string;
  tagline: string;
  heading: string;
  icon: any;
};

const CapabilityCard = ({
  backgroundColor,
  tagline,
  heading,
  icon,
}: CapabilityCardProps) => {
  return (
    <div
      className={clsx(
        "px-4 py-6 first-of-type:rounded-l-lg last-of-type:rounded-r-lg",
        backgroundColor,
      )}
    >
      <div className="text-7xl text-gray-400">{icon}</div>
      <div>
        <span className="my-4 block text-2xl font-bold text-white">
          {heading}
        </span>
        <span className="block text-gray-400">{tagline}</span>
      </div>
    </div>
  );
};

export default CapabilityCard;
