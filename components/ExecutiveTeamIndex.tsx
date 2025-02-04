import { createClient } from "@/prismicio";
import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import * as prismic from "@prismicio/client";

const ExecutiveTeamIndex = async () => {
  const client = createClient();

  // Create an array of all the queries, each returning a promise.
  const queries = [
    client.getAllByType("teammember", {
      orderings: {
        field: "document.first_publication_date",
        direction: "asc",
      },
      filters: [
        prismic.filter.at("my.teammember.designation", "Managing Partner"),
      ],
    }),
    client.getAllByType("teammember", {
      orderings: {
        field: "document.first_publication_date",
        direction: "asc",
      },
      filters: [
        prismic.filter.at("my.teammember.designation", "Senior Vice President"),
      ],
    }),
    client.getAllByType("teammember", {
      orderings: {
        field: "document.first_publication_date",
        direction: "asc",
      },
      filters: [
        prismic.filter.at("my.teammember.designation", "Vice President"),
      ],
    }),
    client.getAllByType("teammember", {
      orderings: {
        field: "document.first_publication_date",
        direction: "asc",
      },
      filters: [
        prismic.filter.at(
          "my.teammember.designation",
          "Senior Managing Director",
        ),
      ],
    }),
    client.getAllByType("teammember", {
      orderings: {
        field: "document.first_publication_date",
        direction: "asc",
      },
      filters: [
        prismic.filter.at("my.teammember.designation", "Managing Director"),
      ],
    }),
    client.getAllByType("teammember", {
      orderings: {
        field: "document.first_publication_date",
        direction: "asc",
      },
      filters: [prismic.filter.at("my.teammember.designation", "Principal")],
    }),
  ];

  // Use Promise.all to run all queries concurrently.
  const [
    managingPartners,
    seniorVicePresidents,
    vicePresidents,
    seniorManagingDirectors,
    managingDirectors,
    principals,
  ] = await Promise.all(queries);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
      {managingPartners.map((member) => (
        <TeamMemberCard
          key={member.id}
          memberName={member.data.name}
          memberImage={member.data.profile_image}
          memberPosition={member.data.designation}
          LinkedinLink={member.data.linkedinprofilelink}
          BioLink={`/team/${member.uid}`}
        />
      ))}

      {seniorManagingDirectors.map((member) => (
        <TeamMemberCard
          key={member.id}
          memberName={member.data.name}
          memberImage={member.data.profile_image}
          memberPosition={member.data.designation}
          LinkedinLink={member.data.linkedinprofilelink}
          BioLink={`/team/${member.uid}`}
        />
      ))}

      {seniorVicePresidents.map((member) => (
        <TeamMemberCard
          key={member.id}
          memberName={member.data.name}
          memberImage={member.data.profile_image}
          memberPosition={member.data.designation}
          LinkedinLink={member.data.linkedinprofilelink}
          BioLink={`/team/${member.uid}`}
        />
      ))}

      {managingDirectors.map((member) => (
        <TeamMemberCard
          key={member.id}
          memberName={member.data.name}
          memberImage={member.data.profile_image}
          memberPosition={member.data.designation}
          LinkedinLink={member.data.linkedinprofilelink}
          BioLink={`/team/${member.uid}`}
        />
      ))}

      {principals.map((member) => (
        <TeamMemberCard
          key={member.id}
          memberName={member.data.name}
          memberImage={member.data.profile_image}
          memberPosition={member.data.designation}
          LinkedinLink={member.data.linkedinprofilelink}
          BioLink={`/team/${member.uid}`}
        />
      ))}

      {vicePresidents.map((member) => (
        <TeamMemberCard
          key={member.id}
          memberName={member.data.name}
          memberImage={member.data.profile_image}
          memberPosition={member.data.designation}
          LinkedinLink={member.data.linkedinprofilelink}
          BioLink={`/team/${member.uid}`}
        />
      ))}
    </div>
  );
};

export default ExecutiveTeamIndex;
