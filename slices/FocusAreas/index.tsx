import FocusAreaCard from "@/components/FocusAreaCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { BsFillAirplaneEnginesFill } from "react-icons/bs";
import { GiSatelliteCommunication } from "react-icons/gi";
import { SlEnergy } from "react-icons/sl";
import { GiEnergyBreath } from "react-icons/gi";
import { IoMdBuild } from "react-icons/io";
import { GiHealthNormal } from "react-icons/gi";
import { IoMdAirplane } from "react-icons/io";
import { MdHomeRepairService } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";

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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <FocusAreaCard icon={<IoMdBuild />} heading="Manufacturing" />
          <FocusAreaCard
            icon={<MdHomeRepairService />}
            heading="Business Services"
          />
          <FocusAreaCard icon={<MdHealthAndSafety />} heading="Health Care" />
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
