"use server";

import { Resend } from "resend";
import React from "react";
import { ContactUsSchema, TContactUsSchema } from "./types";
import ContactFormEmail from "@/components/emails/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const data = await resend.contacts.create({
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.firstName,
      unsubscribed: false,
      audienceId: "c5cc6fe0-5068-49e7-ae71-259d875fa76a",
    });

    await resend.emails.send({
      from: `${formData.firstName} ${formData.lastName} <onboarding@resend.dev>`,
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
