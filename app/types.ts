import z from "zod";

export const ContactUsSchema = z.object({
  firstName: z.string().refine((value) => value.trim() !== "", {
    message: "First Name is required",
  }),
  lastName: z.string().refine((value) => value.trim() !== "", {
    message: "Last Name is required",
  }),
  email: z
    .string({
      required_error: "email is required",
    })
    .email({}),
  phoneNumber: z.string({
    required_error: "phone number is required",
  }),
  message: z.string().refine((value) => value.trim() !== "", {
    message: "Message is required",
  }),
});

export type TContactUsSchema = z.infer<typeof ContactUsSchema>;
