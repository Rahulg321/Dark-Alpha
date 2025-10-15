import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import FavoriteIndustryCard from "@/components/FavoriteIndustryCard";
import { IoCartOutline } from "react-icons/io5";
import { MdFactory } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
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
const FavouriteIndeustry = ({ slice }: FavouriteIndeustryProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space bg-mainBlue"
    >
      <div className="big-container text-center">
        <h2 className="mb-6 text-5xl">Our Favorite Industries</h2>
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
          <FavoriteIndustryCard
            icon={<IoAirplaneOutline />}
            heading="Aerospace & Defense"
          />
          <FavoriteIndustryCard
            icon={<MdFactory />}
            heading="Industrial Services"
          />
        </div>
      </div>
      <div className="narrow-container mt-8">
        <div>
          <h2>
            We know what it feels like to sell a business, so we&apos;ve made it
            as easy as possible for you.
          </h2>
          <div className="mt-4">
            <p>
              You&apos;ve worked hard to build your business, and you have
              choices. You can work with another private equity and go through
              the typical process or consider the Dark Alpha alternative–which
              is built on trust, professional respect, and thoughtful guidance
              for continued value creation.
            </p>
            <p>
              Whatever your motives are to sell your business–or seek an
              investment–the process should be painless and straightforward.
              Whether you would like to stay with the business going forward or
              move to your next venture, we&apos;re committed to being true
              partners in the journey ahead.
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
              <li>Build and Populate Data Room - 1 Month</li>
              <li>Buyers Outreach - 2 Months</li>
              <li>The Dog and Pony Show - 1 Month</li>
              <li>Term Sheets + Negotiations + LOI - 2 Months</li>
              <li>Due Diligence - 1-2 Months</li>
              <li>Q&As + Renegotiations - 1 Month</li>
              <li>Closing - 1-2 Months 50% Probability</li>
            </ul>
            <span className="block text-xl font-bold">
              Total Time: 300-365 Days
            </span>
            <span className="my-4 block text-xl font-bold">Next 5 years</span>
            <span className="block font-semibold text-gray-400">
              Your business is a reporting machine, your employees are unhappy,
              and you&apos;re locked into unreasonable earn-outs.
            </span>
          </div>
          <div className="bg-yellow-300 px-4 py-6">
            <span className="block text-2xl font-bold">
              Dark Alpha Capital Process
            </span>
            <ul className="my-4 list-disc px-2 font-semibold text-gray-600">
              <li>The Business Statement – A Letter by You</li>
              <li>Expression of Interest – A Letter by Us - 1 Day</li>
              <li>Analysis of Business - 2-5 Days</li>
              <li>A Fair Offer from Us - 1 Day</li>
              <li>The Handshake - 2-3 Days</li>
              <li>Closing - 8 -10 Weeks</li>
            </ul>
            <span className="block text-xl font-bold">Total Time: 75 Days</span>
            <span className="my-4 block text-xl font-bold">Next 3 years</span>
            <span className="block font-semibold text-gray-600">
              We work together to sustainably grow your business and deliver the
              next exit event with wins for both you and your employees
            </span>
          </div>
        </div>

        <div className="mt-12">
          <h3>What do we need from you to get started?</h3>
          <h4 className="mt-2 md:mt-6">Business Statement</h4>
          <p>
            Send us an letter explaining your competitive advantage. Some
            examples of the things we&apos;re looking for: A dominant brand, a
            large and loyal community, a niche vertical, or something similar
            with 5+ years of operating history.
          </p>
          <div className="my-2">
            <h4>Financials</h4>
            <p>
              Share your historical financials. We&apos;re primarily looking for
              a profitability benchmark between $1M to $10M per year.
            </p>
          </div>
          <h4>Future Plans</h4>
          <p>
            Tell us about your desires for the future of the business. Would you
            like to continue to run it or would you like to transition out? If
            you would like to stay, how do you see growing the business and
            where do you see the opportunities?
          </p>
        </div>
      </div>
    </section>
  );
};

export default FavouriteIndeustry;
