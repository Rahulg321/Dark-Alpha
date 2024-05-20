"use client";

import { sendApplication } from "@/app/actions";
import { CareerFormSchema, TCareerFormSchema } from "@/app/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyTextField } from "@prismicio/client";
import clsx from "clsx";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Resend } from "resend";

const CareerForm = ({ postName }: { postName: string | KeyTextField }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TCareerFormSchema>({
    resolver: zodResolver(CareerFormSchema),
  });

  const onSubmit = async (formData: TCareerFormSchema) => {
    console.log("form Values", formData);
    const response = await await sendApplication(formData, postName);

    if (response.errors) {
      toast.error("Something went wrong");
    }

    if (response.success) {
      toast.success("Your application was sent successfully");
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx("flex flex-col gap-4")}
      method="dialog"
    >
      <input
        {...register("firstName", {
          required: "Name is required",
        })}
        placeholder="Full name"
        className="form-input flex-1 p-4 font-semibold text-black"
        aria-invalid={!!errors.firstName}
        aria-describedby={errors.firstName ? "firstName-error" : undefined}
      />
      {errors.firstName && (
        <span id="firstName-error" className="text-red-500">
          {errors.firstName.message}
        </span>
      )}
      <input
        {...register("lastName", {
          required: "Name is required",
        })}
        placeholder="Last Name"
        className="form-input flex-1 p-4 font-semibold text-black"
        aria-invalid={!!errors.lastName}
        aria-describedby={errors.lastName ? "lastName-error" : undefined}
      />
      {errors.lastName && (
        <span id="lastName-error" className="text-red-500">
          {errors.lastName.message}
        </span>
      )}
      <input
        {...register("contactNumber", {
          required: "Name is required",
        })}
        placeholder="Contact Number"
        className="form-input flex-1 p-4 font-semibold text-black"
        aria-invalid={!!errors.contactNumber}
        aria-describedby={
          errors.contactNumber ? "contactNumber-error" : undefined
        }
      />
      {errors.contactNumber && (
        <span id="contactNumber-error" className="text-red-500">
          {errors.contactNumber.message}
        </span>
      )}
      <input
        {...register("email", {
          required: "Email is required",
        })}
        placeholder="Email Address"
        className="form-input flex-1 p-4 font-semibold text-black"
        aria-invalid={!!errors.email}
        aria-describedby={errors.email ? "email-error" : undefined}
      />
      {errors.email && (
        <span id="email-error" className="text-red-500">
          {errors.email.message}
        </span>
      )}

      <button
        disabled={isSubmitting}
        type="submit"
        className="text-uppercase btn-primary mt-4 block px-6 py-2 font-bold text-white transition"
      >
        {isSubmitting ? "Submitting" : "Submit"}
      </button>
    </form>
  );
};

export default CareerForm;
