import { createClient } from "@/prismicio";
import React from "react";
import ExecutiveTeamIndexWrapper from "./ExecutiveTeamIndexWrapper";
import { Content } from "@prismicio/client";

const ExecutiveTeamIndex = async () => {
  const client = await createClient();

  // Fetch both team members and working members concurrently
  const [teamMembers, workingMembers] = await Promise.all([
    client.getAllByType("teammember", {
      orderings: {
        field: "document.first_publication_date",
        direction: "asc",
      },
    }),
    client.getAllByType("working_member", {
      orderings: {
        field: "document.first_publication_date",
        direction: "asc",
      },
    }),
  ]);

  // Define the order of designations (team member designations)
  const designationOrder = [
    "Managing Partner",
    "Senior Managing Director",
    "Senior Vice President",
    "Managing Director",
    "Principal",
    "Vice President",
    "Associate",
  ];

  // Normalize and combine team members and working members
  const normalizedTeamMembers = teamMembers.map((member) => ({
    id: member.id,
    uid: member.uid,
    name: member.data.name || "",
    designation: member.data.designation,
    profile_image: member.data.profile_image,
    linkedinprofilelink: member.data.linkedinprofilelink,
    bioLink: `/team/${member.uid}`,
    isWorkingMember: false,
  }));

  const normalizedWorkingMembers = workingMembers.map((member) => ({
    id: member.id,
    uid: member.uid,
    name: member.data.name || "",
    designation: member.data.designation,
    profile_image: member.data.profile_image,
    linkedinprofilelink: member.data.linkedinprofilelink,
    bioLink: `/working-team/${member.uid}`,
    isWorkingMember: true,
  }));

  // Combine all members
  const allMembers = [...normalizedTeamMembers, ...normalizedWorkingMembers];

  // Sort members: team members by designation order, then working members
  const sortedMembers = allMembers.sort((a, b) => {
    // If one is a working member and the other is not, working members come after
    if (a.isWorkingMember && !b.isWorkingMember) {
      return 1;
    }
    if (!a.isWorkingMember && b.isWorkingMember) {
      return -1;
    }

    // If both are team members, sort by designation order
    if (!a.isWorkingMember && !b.isWorkingMember) {
      const designationA = a.designation || "";
      const designationB = b.designation || "";

      const indexA = designationOrder.indexOf(designationA);
      const indexB = designationOrder.indexOf(designationB);

      // If designation is not in the order array, put it at the end
      if (indexA === -1 && indexB === -1) return 0;
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;

      return indexA - indexB;
    }

    // If both are working members, keep original order
    return 0;
  });

  // Remove isWorkingMember field before passing to wrapper
  const membersForWrapper = sortedMembers.map(
    ({ isWorkingMember, ...member }) => member,
  );

  return <ExecutiveTeamIndexWrapper members={membersForWrapper} />;
};

export default ExecutiveTeamIndex;
