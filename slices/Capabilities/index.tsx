import CapabilityCard from "@/components/CapabilityCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { SiAtom } from "react-icons/si";
import Link from "next/link";
import { IoIosStarOutline } from "react-icons/io";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";

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
            heading="Impactful Investing"
            tagline="We believe that financial success should go hand-in-hand with positive social and environmental impact. We actively seek out businesses that are making a difference in the world."
          />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 rounded-xl border-2 px-6 py-8 md:mt-12 md:grid-cols-2">
          <div>
            <h2>Contact Us</h2>
            <span className="mt-4 block font-semibold text-gray-600">
              As a burgeoning independent sponsor company, we welcome the
              opportunity to engage with you. Whether you seek information, have
              proposals, or simply wish to initiate dialogue, your outreach is
              highly valued. Connect with Dark Alpha today, and let's embark on
              a journey toward mutually rewarding partnerships.
            </span>
            <Link
              className="mt-4 inline-block border-2 px-6 py-2 font-semibold transition hover:shadow-md"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
          <div>
            <h2>Services and Capabilities</h2>
            <span className="mt-4 block font-semibold text-gray-600">
              Beyond the horizon of traditional investment, Dark Alpha shines a
              light on hidden potential. We're an independent sponsor startup
              based in the US, driven by a bold vision: unlocking the full
              potential of businesses that dare to challenge the norm.
            </span>
            <span className="mt-4 block font-semibold text-gray-600">
              Explore the links provided below to learn more about our
              specialized services, success stories, and insights that could
              shape your next strategic move.
            </span>
            <div className="mt-4">
              <div className="block w-full rounded-xl px-2 py-2 transition hover:cursor-pointer hover:bg-gray-200 hover:text-gray-600">
                <Link href={"/strategy"} className="font-bold">
                  Strategy
                </Link>
              </div>
              <div className="block w-full rounded-xl px-2 py-2 transition hover:cursor-pointer hover:bg-gray-200 hover:text-gray-600">
                <Link href={"/criteria"} className="font-bold">
                  Criteria
                </Link>
              </div>
              <div className="block w-full rounded-xl px-2 py-2 transition hover:cursor-pointer hover:bg-gray-200 hover:text-gray-600">
                <Link href={"/team"} className="font-bold">
                  Advisors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
