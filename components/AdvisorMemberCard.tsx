import { Content } from "@prismicio/client";
import React from "react";
import clsx from "clsx";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

type AdvisorMemberCardProps = {
  member: Content.OperatingmemberDocument;
  classname?: string;
};

const AdvisorMemberCard = ({ member, classname }: AdvisorMemberCardProps) => {
  // Add null checks to prevent runtime errors
  if (!member || !member.data) {
    return (
      <div
        className={clsx(
          "p-4 transition duration-300 hover:shadow-xl",
          classname,
        )}
      >
        <div className="text-center text-gray-500">
          <p>Member data not available</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={clsx("p-4 transition duration-300 hover:shadow-xl", classname)}
    >
      <div className="aspect-h-1 aspect-w-1 relative">
        <PrismicNextImage
          field={member.data.image}
          fill
          className=" object-cover"
        />
      </div>
      <div className="mt-2">
        <div className="text-center">
          <span className="block text-xl font-semibold">
            {member.data.name || "Name not available"}
          </span>
          <span className="block text-xl font-semibold">
            {member.data.designation || "Designation not available"}
          </span>
        </div>

        <div className="text-center">
          {member.data.linkedinprofilelink && (
            <PrismicNextLink
              className="inline-block text-xl transition hover:underline"
              field={member.data.linkedinprofilelink}
            >
              LinkedIn
            </PrismicNextLink>
          )}
          {member.uid && (
            <Link
              className="ml-1 inline-block text-xl hover:underline"
              href={`/operating-team/${member.uid}`}
            >
              /Bio
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvisorMemberCard;
