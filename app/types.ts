import z from "zod";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 5; // 5MB

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
  name: z
    .string()
    .trim()
    .refine((value) => value !== "", {
      message: "Name is required",
    }),
  contactNumber: z
    .string()
    .trim()
    .refine((value) => value !== "", {
      message: "Contact Number is required",
    }), // Optional contact number
  resume: z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= MAX_UPLOAD_SIZE;
    }, "File size must be less than 5MB")
    .refine((file) => {
      return ACCEPTED_FILE_TYPES.includes(file.type);
    }, "File must be of pdf or docx"),
});

export type TCareerFormSchema = z.infer<typeof CareerFormSchema>;

const ACCEPTED_FILE_TYPES = [
  "image/png",
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
