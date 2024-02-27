import React from "react";
import { FaHandHoldingDollar } from "react-icons/fa6";

type InitiativeCardProps = {
  classname?: string;
  reactIcon: any;
  children?: React.ReactNode;
};

const InitiativeCard = ({
  classname,
  reactIcon,
  children,
}: InitiativeCardProps) => {
  return (
    <div className="py-4">
      <div className="mb-2 text-7xl">{reactIcon}</div>
      <div>{children}</div>
    </div>
  );
};

export default InitiativeCard;
