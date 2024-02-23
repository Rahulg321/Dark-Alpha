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
          <FavoriteIndustryCard
            icon={<IoCartOutline />}
            heading="Manufacturing"
          />
          <FavoriteIndustryCard
            icon={<MdBusinessCenter />}
            heading="Business Services"
          />
          <FavoriteIndustryCard
            icon={<GiHealthNormal />}
            heading="Healthcare"
          />
        </div>
      </div>
      <div className="narrow-container mt-8">
        <div>
          <h2>
            We know what it feels like to sell a business, so we've made it as
            easy as possible for you.
          </h2>
          <div className="mt-4">
            <p>
              You've worked hard to build your business, and you have choices.
              You can work with another private equity and go through the
              typical process or consider the Amalgam Capital alternative–which
              is built on trust, professional respect, and thoughtful guidance
              for continued value creation.
            </p>
            <p>
              Whatever your motives are to sell your business–or seek an
              investment–the process should be painless and straightforward.
              Whether you would like to stay with the business going forward or
              move to your next venture, we're committed to being true partners
              in the journey ahead.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="bg-slate-900 px-4 py-6 text-white">
            <span className="block text-2xl font-bold">
              Traditional Private Equity Process
            </span>
            <ul className="my-4 list-disc px-2 font-semibold text-gray-400">
              <li>Hire an Investment Banker / Broker - 1 Month</li>
              <li>Hire an Investment Banker / Broker - 1 Month</li>
              <li>Hire an Investment Banker / Broker - 1 Month</li>
              <li>Hire an Investment Banker / Broker - 1 Month</li>
              <li>Hire an Investment Banker / Broker - 1 Month</li>
            </ul>
            <span className="block text-xl font-bold">
              Total Time: 300-365 Days
            </span>
            <span className="my-4 block text-xl font-bold">Next 5 years</span>
            <span className="block font-semibold text-gray-400">
              Your business is a reporting machine, your employees are unhappy,
              and you're locked into unreasonable earn-outs.
            </span>
          </div>
          <div className="bg-yellow-300 px-4 py-6">
            <span className="block text-2xl font-bold">
              Amalgam Capital Process
            </span>
            <ul className="my-4 list-disc px-2 font-semibold text-gray-600">
              <li>The Business Statement – A Letter by You</li>
              <li>Expression of Interest – A Letter by Us - 1 Day</li>
              <li>Analysis of Business - 2-5 Days</li>
              <li>A Fair Offer from Us - 1 Day</li>
              <li>The Handshake - 2-3 Days</li>
            </ul>
            <span className="block text-xl font-bold">Total Time: 75 Days</span>
            <span className="my-4 block text-xl font-bold">Next 3 years</span>
            <span className="block font-semibold text-gray-600">
              We work together to sustainably grow your business and deliver the
              next exit event with wins for both you and your employees
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavouriteIndeustry;
