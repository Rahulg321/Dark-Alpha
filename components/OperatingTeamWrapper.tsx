"use client";

import { Content } from "@prismicio/client";
import OperatingTeamMemberIndex from "./OperatingTeamMemberIndex";

interface OperatingTeamWrapperProps {
  operatingTeamMembers: Content.OperatingmemberDocument[];
}

const OperatingTeamWrapper = ({
  operatingTeamMembers,
}: OperatingTeamWrapperProps) => {
  return (
    <OperatingTeamMemberIndex operatingTeamMembers={operatingTeamMembers} />
  );
};

export default OperatingTeamWrapper;
