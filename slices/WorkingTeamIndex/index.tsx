import TeamMemberCard from "@/components/TeamMemberCard";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `WorkingTeamIndex`.
 */
export type WorkingTeamIndexProps =
  SliceComponentProps<Content.WorkingTeamIndexSlice>;

/**
 * Component for "WorkingTeamIndex" Slices.
 */
const WorkingTeamIndex = ({ slice }: WorkingTeamIndexProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space bg-primary"
    >
      <div className="big-container">
        <h1 className="heading font-extrabold">Staff</h1>
        <WorkingTeamIndexCards />
      </div>
    </section>
  );
};

export default WorkingTeamIndex;

async function WorkingTeamIndexCards() {
  const client = createClient();
  const workingTeamMembers = await client.getAllByType("working_member");

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3  lg:grid-cols-4">
      {workingTeamMembers.map((member) => {
        return (
          <TeamMemberCard
            key={member.id}
            memberName={member.data.name}
            memberImage={member.data.profile_image}
            memberPosition={member.data.designation}
            LinkedinLink={member.data.linkedinprofilelink}
            BioLink={`/working-team/${member.uid}`}
          />
        );
      })}
    </div>
  );
}
