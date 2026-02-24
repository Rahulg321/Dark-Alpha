import FocusAreaCard from "@/components/FocusAreaCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { IoMdBuild } from "react-icons/io";
import {
  MdHomeRepairService,
  MdHealthAndSafety,
  MdFactory,
} from "react-icons/md";
import { IoAirplane } from "react-icons/io5";

export type FocusAreasProps = SliceComponentProps<Content.FocusAreasSlice>;

const FocusAreas = ({ slice }: FocusAreasProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <header className="mb-14 text-center md:mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Where We Focus
          </span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl lg:text-[2rem]">
            Industries of Interest
          </h2>
        </header>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-5">
          <FocusAreaCard icon={<IoMdBuild />} heading="Manufacturing" />
          <FocusAreaCard
            icon={<MdHomeRepairService />}
            heading="Business Services"
          />
          <FocusAreaCard icon={<MdHealthAndSafety />} heading="Health Care" />
          <FocusAreaCard
            icon={<IoAirplane />}
            heading="Aerospace and Defense"
          />
          <FocusAreaCard icon={<MdFactory />} heading="Industrial Services" />
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
