import FocusAreaCard from "@/components/FocusAreaCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { BsFillAirplaneEnginesFill } from "react-icons/bs";
import { GiSatelliteCommunication } from "react-icons/gi";
import { SlEnergy } from "react-icons/sl";
import { GiEnergyBreath } from "react-icons/gi";

/**
 * Props for `FocusAreas`.
 */
export type FocusAreasProps = SliceComponentProps<Content.FocusAreasSlice>;

/**
 * Component for "FocusAreas" Slices.
 */
const FocusAreas = ({ slice }: FocusAreasProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <div className="text-center">
          <span className="text-xl font-semibold italic">WHERE WE FOCUS</span>
          <h2 className="mb-12 mt-4">Industries of Interest</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          <FocusAreaCard
            icon={<BsFillAirplaneEnginesFill />}
            heading="Aerospace & Defence"
          />
          <FocusAreaCard
            icon={<GiSatelliteCommunication />}
            heading="Telecommunications"
          />
          <FocusAreaCard icon={<GiEnergyBreath />} heading="Semiconductors" />
          <FocusAreaCard icon={<SlEnergy />} heading="Renewable Energy" />
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
