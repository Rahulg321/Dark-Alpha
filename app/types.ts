import z from "zod";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 5; // 5MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

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
export const CareerFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .refine((value) => value !== "", {
      message: "First Name is required",
    }),
  lastName: z
    .string()
    .trim()
    .refine((value) => value !== "", {
      message: "Last Name is required",
    }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email(),
  contactNumber: z.string().trim().optional(), // Optional contact number
});

export type TCareerFormSchema = z.infer<typeof CareerFormSchema>;
