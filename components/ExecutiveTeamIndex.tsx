import { createClient, getMasterRef } from "@/prismicio";
import React from "react";
import ExecutiveTeamIndexWrapper from "./ExecutiveTeamIndexWrapper";
import { Content } from "@prismicio/client";

const ExecutiveTeamIndex = async () => {
  const client = await createClient();

  // Resolve the master ref to ensure we're using the correct ref (bypasses cache)
  const masterRef = await getMasterRef();

  // Fetch both team members and working members concurrently
  const teamMembers = await client.getAllByType("teammember", {
      ref: masterRef,
      orderings: {
        field: "document.first_publication_date",
        direction: "asc",
      },
});
    

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

  const normalizedTeamMembers = teamMembers.map((member) => ({
    id: member.id,
    uid: member.uid,
    name: member.data.name || "",
    designation: member.data.level,
    level: member.data.level,
    department: member.data.department,
    tags: Array.isArray(member.tags) ? member.tags : [],
    profile_image: member.data.profile_image,
    linkedinprofilelink: member.data.linkedinprofilelink,
    bioLink: `/team/${member.uid}`,
  }));

  // Sort members: team members by designation order
  const sortedMembers = normalizedTeamMembers.sort((a, b) => {
    // If both are team members, sort by designation order
      const designationA = a.designation || "";
      const designationB = b.designation || "";

      const indexA = designationOrder.indexOf(designationA);
      const indexB = designationOrder.indexOf(designationB);

      // If designation is not in the order array, put it at the end
      if (indexA === -1 && indexB === -1) return 0;
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;

      return indexA - indexB;
  });

  return <ExecutiveTeamIndexWrapper members={sortedMembers} />;
};

export default ExecutiveTeamIndex;
