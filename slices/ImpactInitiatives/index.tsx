import InitiativeCard from "@/components/InitiativeCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { SiGooglecloud } from "react-icons/si";
import { GrCloudComputer } from "react-icons/gr";
import { IoBarChartSharp } from "react-icons/io5";
import { TbGoGame } from "react-icons/tb";
import { LiaFantasyFlightGames } from "react-icons/lia";

/**
 * Props for `ImpactInitiatives`.
 */
export type ImpactInitiativesProps =
  SliceComponentProps<Content.ImpactInitiativesSlice>;

/**
 * Component for "ImpactInitiatives" Slices.
 */
const ImpactInitiatives = ({ slice }: ImpactInitiativesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space big-container"
    >
      <h2 className="heading text-6xl font-extrabold">Impact Initiatives</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <h4 className="font-bold">Growth Initiatives</h4>
          <InitiativeCard reactIcon={<FaHandHoldingDollar />}>
            <span>
              <strong className="text-accent">
                Increased customer retention
              </strong>{" "}
              and share of wallet expansion 27% by implementing customer success
              function and quarterly business reviews
            </span>
          </InitiativeCard>
          <InitiativeCard reactIcon={<SiGooglecloud />}>
            <span>
              Overhauled legacy IT infrastructure, implementing a digital
              technology platform and{" "}
              <strong className="text-accent">
                capturing 30%+ run-rate savings
              </strong>
            </span>
          </InitiativeCard>
          <InitiativeCard reactIcon={<GrCloudComputer />}>
            <strong className="text-accent">
              Over-achieved sales targets by 58%
            </strong>{" "}
            by implementing a customer prioritization analytical model and new
            sales for a B2B technology sales team
          </InitiativeCard>
        </div>
        <div>
          <h4 className="font-bold">Margin Requirements</h4>
          <InitiativeCard reactIcon={<IoBarChartSharp />}>
            <span>
              Built predictive models to increase asset availability and reduce
              <strong className="text-accent">
                maintenance downtime by 20%
              </strong>{" "}
              for an Aerospace organization
            </span>
          </InitiativeCard>
          <InitiativeCard reactIcon={<TbGoGame />}>
            <span>
              <strong className="text-accent">
                Delivered 44% revenue CAGR
              </strong>{" "}
              by altering sales team composition, named account coverage, and
              improving commission plans to deter quarter stuffing
            </span>
          </InitiativeCard>
          <InitiativeCard reactIcon={<LiaFantasyFlightGames />}>
            <span>
              Designed digital platform to modernize operations of a pilot
              training program, reducing error rates by{" "}
              <strong className="text-accent">
                20% and enabling 10% budget re-allocation
              </strong>
            </span>
          </InitiativeCard>
        </div>
      </div>
    </section>
  );
};

export default ImpactInitiatives;
