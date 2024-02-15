import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import FavoriteIndustryCard from "@/components/FavoriteIndustryCard";
import { IoCartOutline } from "react-icons/io5";
import { MdFactory } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { SlEnergy } from "react-icons/sl";
import { IoAirplaneOutline } from "react-icons/io5";
import { MdBusinessCenter } from "react-icons/md";

/**
 * Props for `FavouriteIndeustry`.
 */
export type FavouriteIndeustryProps =
  SliceComponentProps<Content.FavouriteIndeustrySlice>;

/**
 * Component for "FavouriteIndeustry" Slices.
 */
const FavouriteIndeustry = ({
  slice,
}: FavouriteIndeustryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container text-center">
        <h2 className="mb-6 text-5xl">Our Favourite Industries</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FavoriteIndustryCard icon={<IoCartOutline />} heading="Retail" />
          <FavoriteIndustryCard icon={<MdFactory />} heading="Industry" />
          <FavoriteIndustryCard
            icon={<GiHealthNormal />}
            heading="Healthcare"
          />
          <FavoriteIndustryCard icon={<SlEnergy />} heading="Energy" />
          <FavoriteIndustryCard
            icon={<IoAirplaneOutline />}
            heading="Aerospace"
          />
          <FavoriteIndustryCard
            icon={<MdBusinessCenter />}
            heading="Business Services"
          />
        </div>
      </div>
    </section>
  );
};

export default FavouriteIndeustry;
