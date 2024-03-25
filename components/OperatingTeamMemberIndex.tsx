import { createClient } from "@/prismicio";
import React from "react";
import TeamMemberCard from "./TeamMemberCard";

const OperatingTeamMemberIndex = async () => {
  const client = createClient();
  const operatingTeamMembers = await client.getAllByType("operatingmember");
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
      {operatingTeamMembers.map((member) => {
        return (
          <TeamMemberCard
            key={member.id}
            memberName={member.data.name}
            memberImage={member.data.image}
            LinkedinLink={member.data.linkedinprofilelink}
            BioLink={`/operatingteam/${member.uid}`}
          />
        );
      })}
    </div>
  );
};

export default OperatingTeamMemberIndex;
