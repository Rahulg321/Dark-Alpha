"use client";

import { useSearchParams } from "next/navigation";
import AdvisorMemberCard from "./AdvisorMemberCard";
import { Content } from "@prismicio/client";

const OperatingTeamMemberIndex = ({
  operatingTeamMembers,
}: {
  operatingTeamMembers: Content.OperatingmemberDocument[];
}) => {
  const searchParams = useSearchParams();
  const selectedTags = searchParams.getAll("tag");

  // Handle empty or invalid data
  if (!operatingTeamMembers || operatingTeamMembers.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-500">No operating team members found.</p>
      </div>
    );
  }

  // If no tags are selected, show all members
  if (selectedTags.length === 0) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
        {operatingTeamMembers.map((member) => {
          return <AdvisorMemberCard key={member.id} member={member} />;
        })}
      </div>
    );
  }

  const filteredOperatingTeamMembers = operatingTeamMembers.filter((member) => {
    // Null checks
    if (!member || !member.data || !member.data.designation) {
      return false;
    }

    // Prismic custom types don't always have a "tags" field in data; it's at the document root
    // Use member.tags instead of member.data.tags
    if (!Array.isArray(member.tags)) {
      return false;
    }

    // Match: at least one selectedTag must match (case-insensitive) a tag on the member
    return selectedTags.some((selectedTag) =>
      member.tags.some(
        (memberTag) =>
          typeof memberTag === "string" &&
          memberTag.toLowerCase().includes(selectedTag.toLowerCase()),
      ),
    );
  });

  // Show message if no members match the selected tags
  if (filteredOperatingTeamMembers.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-500">
          No operating team members found matching the selected tags.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
      {filteredOperatingTeamMembers.map((member) => {
        return <AdvisorMemberCard key={member.id} member={member} />;
      })}
    </div>
  );
};

export default OperatingTeamMemberIndex;
