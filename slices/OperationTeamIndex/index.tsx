import OperatingTeamMemberIndex from "@/components/OperatingTeamMemberIndex";
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
      className="block-space"
    >
      <div className="big-container">
        <h2 className="heading font-extrabold">Operating Partners</h2>
        <OperatingTeamMemberIndex />
      </div>
    </section>
  );
};

export default OperationTeamIndex;
