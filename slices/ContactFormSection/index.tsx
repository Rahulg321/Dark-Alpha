import ContactForm from "@/components/ContactForm";
import ContactFormInfoCard from "@/components/ContactFormInfoCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { PrismicNextImage } from "@prismicio/next";

export type ContactFormSectionProps =
  SliceComponentProps<Content.ContactFormSectionSlice>;

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
              {/* <PrismicNextImage
                field={slice.primary.contactformimage}
                className="rounded-xl object-cover"
                fill
              /> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.796384137957!2d-75.52676472417654!3d39.15661257166981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c764aa67a6aaab%3A0x2f5024d850a6924a!2s8%20The%20Green%20STE%204000%20A%2C%20Dover%2C%20DE%2019901%2C%20USA!5e0!3m2!1sen!2sin!4v1708673987044!5m2!1sen!2sin"
                width="400"
                height="300"
                loading="lazy"
              ></iframe>
            </div>
            <ContactFormInfoCard
              icon={<MdEmail />}
              heading="Email"
              tagline="info@darkalphacapital.com"
            />

            <ContactFormInfoCard
              icon={<FaLocationDot />}
              heading="Address"
              tagline="8 The Green Suite 4000, Dover, DE 19901"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
