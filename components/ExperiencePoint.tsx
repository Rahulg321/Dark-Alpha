import { KeyTextField } from "@prismicio/client";
import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import clsx from "clsx";
import { FaCircle } from "react-icons/fa";

type ExperiencePointProps = {
  point: KeyTextField;
  blueBackground?: boolean;
};

const ExperiencePoint = ({ point, blueBackground }: ExperiencePointProps) => {
  return (
    <div className="mt-1 flex items-start gap-2">
      <div
        className={clsx("text-base font-bold text-black", {
          "text-primary": blueBackground === true,
        })}
      >
        <FaCircle />
      </div>
      <span
        className={clsx("font-semibold text-gray-600", {
          "text-primary": blueBackground === true,
        })}
      >
        {point}
      </span>
    </div>
  );
};

export default ExperiencePoint;
