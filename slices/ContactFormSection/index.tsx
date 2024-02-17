import ContactForm from "@/components/ContactForm";
import ContactFormInfoCard from "@/components/ContactFormInfoCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ContactFormSection`.
 */
export type ContactFormSectionProps =
  SliceComponentProps<Content.ContactFormSectionSlice>;

/**
 * Component for "ContactFormSection" Slices.
 */
const ContactFormSection = ({
  slice,
}: ContactFormSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space bg-slate-800"
    >
      <div className="big-container">
        <div className="flex flex-col-reverse gap-12 md:flex-row">
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">
              {slice.primary.heading}
            </h2>
            <span className="my-4 block text-pretty font-semibold text-gray-400">
              {slice.primary.tagline}
            </span>
            <ContactForm />
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <div className="aspect-h-2 aspect-w-4 relative">
              <PrismicNextImage
                field={slice.primary.contactformimage}
                className="rounded-xl object-cover"
                fill
              />
            </div>
            <ContactFormInfoCard
              icon={<MdEmail />}
              heading="Email"
              tagline="rg5353070@gmail.com"
            />
            <ContactFormInfoCard
              icon={<FaPhoneFlip />}
              heading="Phone"
              tagline="9876939930"
            />
            <ContactFormInfoCard
              icon={<FaLocationDot />}
              heading="Address"
              tagline="5757 Woodway Drive, Suite 301B, Houston TX, 77057"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
