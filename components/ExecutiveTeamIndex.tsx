import { createClient } from "@/prismicio";
import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import * as prismic from "@prismicio/client";

const ExecutiveTeamIndex = async () => {
  const client = createClient();
  const managingPartners = await client.getAllByType("teammember", {
    orderings: {
      field: "document.first_publication_date",
      direction: "asc",
    },
    filters: [
      prismic.filter.at("my.teammember.designation", "Managing Partner"),
    ],
  });

  const vicePresidents = await client.getAllByType("teammember", {
    orderings: {
      field: "document.first_publication_date",
      direction: "asc",
    },
    filters: [prismic.filter.at("my.teammember.designation", "Vice President")],
  });

  const managingDirectors = await client.getAllByType("teammember", {
    orderings: {
      field: "document.first_publication_date",
      direction: "asc",
    },
    filters: [
      prismic.filter.at("my.teammember.designation", "Managing Director"),
    ],
  });

  const principals = await client.getAllByType("teammember", {
    orderings: {
      field: "document.first_publication_date",
      direction: "asc",
    },
    filters: [prismic.filter.at("my.teammember.designation", "Principal")],
  });

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
      {managingPartners.map((member) => {
        return (
          <TeamMemberCard
            key={member.id}
            memberName={member.data.name}
            memberImage={member.data.profile_image}
            memberPosition={member.data.designation}
            LinkedinLink={member.data.linkedinprofilelink}
            BioLink={`/team/${member.uid}`}
          />
        );
      })}
      {vicePresidents.map((member) => {
        return (
          <TeamMemberCard
            key={member.id}
            memberName={member.data.name}
            memberImage={member.data.profile_image}
            memberPosition={member.data.designation}
            LinkedinLink={member.data.linkedinprofilelink}
            BioLink={`/team/${member.uid}`}
          />
        );
      })}
      {managingDirectors.map((member) => {
        return (
          <TeamMemberCard
            key={member.id}
            memberName={member.data.name}
            memberImage={member.data.profile_image}
            memberPosition={member.data.designation}
            LinkedinLink={member.data.linkedinprofilelink}
            BioLink={`/team/${member.uid}`}
          />
        );
      })}
      {principals.map((member) => {
        return (
          <TeamMemberCard
            key={member.id}
            memberName={member.data.name}
            memberImage={member.data.profile_image}
            memberPosition={member.data.designation}
            LinkedinLink={member.data.linkedinprofilelink}
            BioLink={`/team/${member.uid}`}
          />
        );
      })}
    </div>
  );
};

export default ExecutiveTeamIndex;
