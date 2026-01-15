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
      <article
        className={clsx(
          "flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm",
          classname,
        )}
      >
        <div className="flex flex-1 items-center justify-center p-8 text-center text-gray-500">
          <p>Member data not available</p>
        </div>
      </article>
    );
  }

  return (
    <article
      className={clsx(
        "flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm",
        classname,
      )}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] w-full">
        <PrismicNextImage
          field={member.data.image}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
        <div className="mb-3 text-center">
          <p className="text-lg font-semibold leading-snug text-gray-900">
            {member.data.name || "Name not available"}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-center gap-2 text-sm">
          {member.data.linkedinprofilelink && (
            <>
              <PrismicNextLink
                className="font-semibold text-[#0f879f] hover:underline"
                field={member.data.linkedinprofilelink}
              >
                LinkedIn
              </PrismicNextLink>
              {member.uid && <span className="text-gray-300">•</span>}
            </>
          )}
          {member.uid && (
            <Link
              className="font-semibold text-[#0f879f] hover:underline"
              href={`/operating-team/${member.uid}`}
            >
              Bio
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default AdvisorMemberCard;
