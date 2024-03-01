import ExecutiveTeamIndex from "@/components/ExecutiveTeamIndex";
import TeamMemberCard from "@/components/TeamMemberCard";
import { createClient } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

/**
 * Props for `TeamIndex`.
 */
export type TeamIndexProps = SliceComponentProps<Content.TeamIndexSlice>;

/**
 * Component for "TeamIndex" Slices.
 */
const TeamIndex = ({ slice }: TeamIndexProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <h2 className="heading font-extrabold">The Executives</h2>
        <ExecutiveTeamIndex />
      </div>
    </section>
  );
};

export default TeamIndex;
