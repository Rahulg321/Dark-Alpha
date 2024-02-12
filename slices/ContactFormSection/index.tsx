import ContactForm from "@/components/ContactForm";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
      className="block-space"
    >
      <div className="big-container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:px-12">
            <h2 className="mb-2 text-3xl font-extrabold md:text-5xl">
              {slice.primary.heading}
            </h2>
            <span className="text-pretty font-semibold text-gray-600">
              {slice.primary.tagline}
            </span>
            <div className="mt-12 flex flex-col">
              {slice.items.map((item, index) => {
                return (
                  <div key={index} className="mb-4 flex justify-between">
                    <div>
                      <span className="block text-xl font-bold md:text-2xl">
                        {item.contact_person_name}
                      </span>
                      <span className="font-semibold text-gray-600">
                        {item.contact_person_position}
                      </span>
                    </div>
                    <div>
                      <button className="bg-black px-4 py-2 text-white transition-all hover:border hover:border-black hover:bg-white hover:font-bold  hover:text-black md:px-6">
                        Email
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
