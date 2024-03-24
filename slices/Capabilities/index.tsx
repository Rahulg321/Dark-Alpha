import CapabilityCard from "@/components/CapabilityCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { SiAtom } from "react-icons/si";
import Link from "next/link";
import { IoIosStarOutline } from "react-icons/io";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";

/**
 * Props for `Capabilities`.
 */
export type CapabilitiesProps = SliceComponentProps<Content.CapabilitiesSlice>;

/**
 * Component for "Capabilities" Slices.
 */
const Capabilities = ({ slice }: CapabilitiesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space relative bg-white"
    >
      <div className="big-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <CapabilityCard
            icon={<IoIosStarOutline />}
            backgroundColor="bg-gray-800"
            heading="Collaboration"
            tagline="We believe in building strong partnerships with our portfolio companies. We are actively involved in their growth and success, offering ongoing support and guidance."
          />
          <CapabilityCard
            icon={<SiAtom />}
            backgroundColor="bg-slate-900"
            heading="Commitment"
            tagline="We are committed to the long-term success of our investments. We work alongside our portfolio companies to help them achieve their full potential."
          />
          <CapabilityCard
            icon={<HiOutlineBuildingLibrary />}
            backgroundColor="bg-black"
            heading="Cooperation"
            tagline="At Dark Alpha, we believe that cooperation is the cornerstone of success. Through collaborative efforts with our partners, we navigate the investment landscape with precision and purpose. "
          />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 rounded-xl px-6 py-8 shadow-md md:mt-12 md:grid-cols-2">
          <div>
            <h2>What We Do</h2>
            <span className="mt-4 block font-semibold text-gray-600">
              Dark Alpha Capital is an investment firm focused on acquiring
              private companies. We partner with successful businesses seeking a
              pathway to an exit transaction. Our investors include specialized
              financial institutions, family offices, current and former
              entrepreneurs, with extensive experience owning, managing and
              operating successful private companies across the lower middle
              market.
            </span>
            <span className="mt-4 block font-semibold text-gray-600">
              Explore the links provided below to learn more about what we do,
              success stories, and insights that could shape our
              next strategic move.
            </span>
            <div className="mt-4">
              <div className="block w-full rounded-xl px-2 py-2 transition hover:cursor-pointer hover:bg-gray-200 hover:text-gray-600">
                <Link
                  href={"/strategy"}
                  className="flex items-center justify-start  font-bold hover:text-[#7a9e9f]"
                >
                  Strategy{" "}
                  <div className="ml-2">
                    <FaArrowRight />
                  </div>
                </Link>
              </div>
              <div className="block w-full rounded-xl px-2 py-2 transition hover:cursor-pointer hover:bg-gray-200 hover:text-gray-600">
                <Link
                  href={"/criteria"}
                  className="flex items-center justify-start font-bold hover:text-[#7a9e9f]"
                >
                  Criteria{" "}
                  <div className="ml-2">
                    <FaArrowRight />
                  </div>
                </Link>
              </div>
              <div className="block w-full rounded-xl px-2 py-2 transition hover:cursor-pointer hover:bg-gray-200 hover:text-gray-600">
                <Link
                  href={"/team"}
                  className="flex items-center justify-start  font-bold hover:text-[#7a9e9f]"
                >
                  Team{" "}
                  <div className="ml-2">
                    <FaArrowRight />
                  </div>
                </Link>
              </div>
              <div className="block w-full rounded-xl px-2 py-2 transition hover:cursor-pointer hover:bg-gray-200 hover:text-gray-600">
                <Link
                  href={"/about-dark-alpha"}
                  className="flex items-center justify-start  font-bold hover:text-[#7a9e9f]"
                >
                  About Us{" "}
                  <div className="ml-2">
                    <FaArrowRight />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h2>Contact Us</h2>
            <span className="mt-4 block font-semibold text-gray-600">
              As an independent sponsor company, we welcome the opportunity to
              engage with you. Whether you seek information, have proposals, or
              simply wish to initiate dialogue, your outreach is highly valued.
              Connect with Dark Alpha today, and let's embark on a journey
              toward mutually rewarding partnerships.
            </span>
            <Link
              className="mt-4 inline-block border-2 px-6 py-2 font-semibold text-[#7a9e9f] transition hover:bg-[#7a9e9f] hover:text-white"
              href="/contact"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
