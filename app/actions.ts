"use server";

import { Resend } from "resend";
import React from "react";
import { ContactUsSchema, TCareerFormSchema, TContactUsSchema } from "./types";
import ContactFormEmail from "@/components/emails/ContactFormEmail";
import { KeyTextField } from "@prismicio/client";
import CareerApplicationEmail from "@/components/emails/CareerApplicationEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

function readFileAsString(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsText(file);
  });
}

export async function sendApplication(
  formdata: TCareerFormSchema,
  postName: string | KeyTextField,
) {
  const name = formdata.firstName + " " + formdata.lastName;
  const phone = formdata.contactNumber;
  const email = formdata.email;

  const { data, error } = await resend.emails.send({
    from: `Dark Alpha Capital <info@darkalphacapital.com>`,
    to: ["rg5353070@gmail.com"],
    subject: "sending resume from dark alpha capital",
    react: React.createElement(CareerApplicationEmail, {
      name: name,
      email: email,
      phoneNumber: phone as string,
      postName: postName,
    }),
  });

  if (error) {
    // could not send email
    return {
      errors: true,
    };
  }

  // email was sent successfully
  return {
    success: true,
  };
}

export async function sendEmail(formData: TContactUsSchema) {
  try {
    //validating data on the server
    const validatedData = ContactUsSchema.safeParse(formData);
    let zodErrors = {};

    if (!validatedData.success) {
      validatedData.error.issues.forEach(
        (issue) =>
          (zodErrors = { ...zodErrors, [issue.path[0]]: issue.message }),
      );
    }

    if (Object.keys(zodErrors).length > 0) {
      // zod errors exist in our application
      return { errors: true, zodErrors };
    }

    await resend.contacts.create({
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.firstName,
      unsubscribed: false,
      audienceId: "27ff6a9c-b6bc-43f8-8714-7eb68004945d",
    });

    const { data, error } = await resend.emails.send({
      from: `${formData.firstName} ${formData.lastName} <info@darkalphacapital.com>`,
      to: "info@darkalphacapital.com",
      subject: `Contact Inquiry from ${formData.firstName} ${formData.lastName}`,
      reply_to: formData.email,
      react: React.createElement(ContactFormEmail, {
        message: formData.message,
        name: formData.firstName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
      }),
    });

    console.log("data", data);

    if (error) {
      console.log("error in resend", error);
      return {
        errors: true,
      };
    }

    return {
      success: true,
    };
  } catch (error: any) {
    console.log(error);
    return {
      errors: true,
      errorMessage: error.message,
    };
  }
}
