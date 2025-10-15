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
const ImpactInitiatives = ({ slice }: ImpactInitiativesProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space big-container"
    >
      <h2 className="heading text-6xl font-extrabold">Our Expertise</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <InitiativeCard reactIcon={<FaHandHoldingDollar />}>
            <span>
              Dark Alpha{" "}
              <strong className="text-mainButtonAccent">
                prioritizes high-growth
              </strong>{" "}
              sectors like manufacturing, business services, and healthcare,
              ensuring strategic investments aligned with future market trends
            </span>
          </InitiativeCard>
          <InitiativeCard reactIcon={<SiGooglecloud />}>
            <span>
              Dark Alpha{" "}
              <strong className="text-mainButtonAccent">
                implements cutting-edge technologies
              </strong>{" "}
              such as RPA and AI to enhance operational efficiency and drive
              cost savings post-acquisition.
            </span>
          </InitiativeCard>
          <InitiativeCard reactIcon={<GrCloudComputer />}>
            <span>
              <strong className="text-mainButtonAccent">
                Through ERP integration,
              </strong>{" "}
              Dark Alpha optimizes business workflows, fostering cohesion and
              productivity across finance, human resources, and other functions
            </span>
          </InitiativeCard>
        </div>
        <div>
          <InitiativeCard reactIcon={<IoBarChartSharp />}>
            <span>
              <strong className="text-mainButtonAccent">Utilizing BPO,</strong>{" "}
              Dark Alpha refines core functions like finance and accounting,
              allowing businesses to benefit from specialized expertise while
              focusing on core competencies.
            </span>
          </InitiativeCard>
          <InitiativeCard reactIcon={<TbGoGame />}>
            <span>
              Dark Alpha employs{" "}
              <strong className="text-mainButtonAccent">
                Lean Six Sigma methodologies
              </strong>{" "}
              for ongoing refinement, driving sustained operational gains and
              margin enhancements across acquisitions.
            </span>
          </InitiativeCard>
          <InitiativeCard reactIcon={<LiaFantasyFlightGames />}>
            <span>
              Dark Alpha{" "}
              <strong className="text-mainButtonAccent">
                strategically leverages synergies
              </strong>{" "}
              between portfolio companies, harnessing shared resources and
              expertise to fortify businesses and drive operational and
              financial improvements
            </span>
          </InitiativeCard>
        </div>
      </div>
    </section>
  );
};

export default ImpactInitiatives;
