"use client";

import React from "react";
import clsx from "clsx";
import { ContactUsSchema, TContactUsSchema } from "@/app/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { sendEmail } from "@/app/actions";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TContactUsSchema>({
    resolver: zodResolver(ContactUsSchema),
  });

  const onSubmit = async (data: TContactUsSchema) => {
    const response = await sendEmail(data);

    if (response.errors) {
      toast.error("Could not send message to the server");
    }

    if (response.success) {
      toast.success("your message was sent successfully");
    }

    reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx("flex flex-col gap-4")}
      >
        <input
          {...register("firstName", {
            required: "name is required",
          })}
          placeholder="First name"
          className="form-input flex-1 rounded-lg  p-4 font-semibold text-black"
        />
        {errors.firstName && (
          <span className="text-red-500">{`${errors.firstName.message}`}</span>
        )}
        <input
          {...register("lastName", {
            required: "name is required",
          })}
          placeholder="Last name"
          className="form-input flex-1 p-4 font-semibold text-black"
        />
        {errors.lastName && (
          <span className="text-red-500">{`${errors.lastName.message}`}</span>
        )}
        <input
          {...register("phoneNumber")}
          type="number"
          placeholder="Phone Number"
          name="phoneNumber"
          className="form-input flex-1 p-4  font-semibold text-black"
        />
        {errors.phoneNumber && (
          <span className="text-red-500">{`${errors.phoneNumber.message}`}</span>
        )}
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          name="email"
          className="form-input flex-1 p-4  font-semibold text-black"
        />
        {errors.email && (
          <span className="text-red-500">{`${errors.email.message}`}</span>
        )}
        <textarea
          {...register("message", {
            required: "message is required",
          })}
          name="message"
          placeholder="Your message"
          className="form-textarea w-full  p-4 font-semibold text-black"
        ></textarea>
        {errors.message && (
          <span className="text-red-500">{`${errors.message.message}`}</span>
        )}
        <button
          disabled={isSubmitting}
          type="submit"
          className="text-secondary block bg-blue-600 px-4 py-2 text-white transition  hover:bg-blue-800 hover:shadow-xl"
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
