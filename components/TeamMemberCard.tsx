import { ImageField, KeyTextField, LinkField } from "@prismicio/client";
import React from "react";
import clsx from "clsx";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

type TeamMemberCardProps = {
  memberName: KeyTextField;
  memberPosition: KeyTextField;
  memberImage: ImageField;
  classname?: string;
  LinkedinLink: LinkField;
  BioLink?: string;
};

const TeamMemberCard = ({
  memberName,
  memberImage,
  memberPosition,
  classname,
  LinkedinLink,
  BioLink,
}: TeamMemberCardProps) => {
  return (
    <div
      className={clsx("p-4 transition duration-300 hover:shadow-xl", classname)}
    >
      <div className="aspect-h-1 aspect-w-1 relative">
        <PrismicNextImage field={memberImage} fill className=" object-cover" />
      </div>
      <div className="mt-2">
        <div className="text-center">
          <span className="block text-xl font-semibold">{memberName}</span>
        </div>
        <div className="text-center">
          <span className="block text-2xl font-bold">{memberPosition}</span>
        </div>
        <div className="text-center">
          <PrismicNextLink
            className="inline-block text-xl italic transition hover:underline"
            field={LinkedinLink}
          >
            LinkedIn
          </PrismicNextLink>
          {BioLink ? (
            <Link
              className="ml-1 inline-block text-xl italic hover:underline"
              href={BioLink}
            >
              /Bio
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
