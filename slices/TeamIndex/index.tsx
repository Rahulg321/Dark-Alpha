import TeamMemberCard from "@/components/TeamMemberCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {slice.items.map((item, index) => (
            <TeamMemberCard
              key={index}
              memberImage={item.member_image}
              memberName={item.member_name}
              memberPosition={item.member_position}
            />
          ))}
          {slice.items.map((item, index) => (
            <TeamMemberCard
              key={index}
              memberImage={item.member_image}
              memberName={item.member_name}
              memberPosition={item.member_position}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamIndex;
