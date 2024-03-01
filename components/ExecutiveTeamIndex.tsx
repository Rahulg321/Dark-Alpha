import { createClient } from "@/prismicio";
import React from "react";
import TeamMemberCard from "./TeamMemberCard";

const ExecutiveTeamIndex = async () => {
  const client = createClient();
  const executiveTeamMembers = await client.getAllByType("teammember");
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
      {executiveTeamMembers.map((member) => {
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
      {executiveTeamMembers.map((member) => {
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
      {executiveTeamMembers.map((member) => {
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
