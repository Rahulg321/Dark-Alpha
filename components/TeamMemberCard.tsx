import { ImageField, KeyTextField } from "@prismicio/client";
import React from "react";
import clsx from "clsx";
import { PrismicNextImage } from "@prismicio/next";

type TeamMemberCardProps = {
  memberName: KeyTextField;
  memberPosition: KeyTextField;
  memberImage: ImageField;
  classname?: string;
};

const TeamMemberCard = ({
  memberName,
  memberImage,
  memberPosition,
  classname,
}: TeamMemberCardProps) => {
  return (
    <div className={clsx("", classname)}>
      <div className="aspect-h-1 aspect-w-1 relative">
        <PrismicNextImage
          field={memberImage}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div className="mt-2">
        <div className="text-center">
          <span className="block text-xl font-semibold">{memberName}</span>
        </div>
        <div className="text-center">
          <span className="block text-2xl font-bold">{memberPosition}</span>
        </div>
        <div className="text-center">
          <span className="block text-xl italic">LinkedIn / Bio</span>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
