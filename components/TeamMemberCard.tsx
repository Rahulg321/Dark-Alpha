import { ImageField, KeyTextField, LinkField } from "@prismicio/client";
import React from "react";
import clsx from "clsx";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

type TeamMemberCardProps = {
  memberName: KeyTextField;
  memberPosition?: KeyTextField;
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
    <article
      className={clsx(
        "flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm",
        classname,
      )}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] w-full">
        <PrismicNextImage field={memberImage} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
        <div className="mb-3 text-center">
          <p className="text-lg font-semibold leading-snug text-gray-900">
            {memberName}
          </p>
          {memberPosition && (
            <p className="mt-1 text-sm font-medium uppercase tracking-wide text-gray-500">
              {memberPosition}
            </p>
          )}
        </div>

        <div className="mt-auto flex items-center justify-center gap-2 text-sm">
          <PrismicNextLink
            className="font-semibold text-[#0f879f] hover:underline"
            field={LinkedinLink}
          >
            LinkedIn
          </PrismicNextLink>
          {BioLink ? (
            <>
              <span className="text-gray-300">•</span>
              <Link
                className="font-semibold text-[#0f879f] hover:underline"
                href={BioLink}
              >
                Bio
              </Link>
            </>
          ) : null}
        </div>
      </div>
    </article>
  );
};

export default TeamMemberCard;
