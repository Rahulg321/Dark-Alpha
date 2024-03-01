import TeamMemberCard from "@/components/TeamMemberCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `OperationTeamIndex`.
 */
export type OperationTeamIndexProps =
  SliceComponentProps<Content.OperationTeamIndexSlice>;

/**
 * Component for "OperationTeamIndex" Slices.
 */
const OperationTeamIndex = ({
  slice,
}: OperationTeamIndexProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space bg-primary"
    >
      <div className="big-container">
        <h2 className="heading font-extrabold">Operating Partners</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {slice.items.map((item, index) => (
            <TeamMemberCard
              key={index}
              memberImage={item.image}
              memberName={item.name}
              memberPosition={item.designation}
              LinkedinLink={item.linkedinprofilelink}
            />
          ))}
          {slice.items.map((item, index) => (
            <TeamMemberCard
              key={index}
              memberImage={item.image}
              memberName={item.name}
              memberPosition={item.designation}
              LinkedinLink={item.linkedinprofilelink}
            />
          ))}
          {slice.items.map((item, index) => (
            <TeamMemberCard
              key={index}
              memberImage={item.image}
              memberName={item.name}
              memberPosition={item.designation}
              LinkedinLink={item.linkedinprofilelink}
            />
          ))}
          {slice.items.map((item, index) => (
            <TeamMemberCard
              key={index}
              memberImage={item.image}
              memberName={item.name}
              memberPosition={item.designation}
              LinkedinLink={item.linkedinprofilelink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationTeamIndex;
