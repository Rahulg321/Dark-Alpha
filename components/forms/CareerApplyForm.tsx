"use client";

// import React from "react";
// import { z } from "zod";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

// const formSchema = z.object({
//   username: z.string().min(2).max(50),
// });

// const CareerApplyForm = () => {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: "",
//     },
//   });

//   // 2. Define a submit handler.
//   function onSubmit(values: z.infer<typeof formSchema>) {
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//     console.log(values);
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <FormField
//           control={form.control}
//           name="username"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Username</FormLabel>
//               <FormControl>
//                 <Input placeholder="shadcn" {...field} />
//               </FormControl>
//               <FormDescription>
//                 This is your public display name.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   );
// };

// export default CareerApplyForm;

import React from "react";
import { SubmitButton } from "../Button";
import { sendApplication } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { KeyTextField } from "@prismicio/client";

const CareerApplyForm = ({
  title,
  setDialogOpen,
}: {
  title: KeyTextField;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { toast } = useToast();
  return (
    <div className="">
      <form
        action={async (formData) => {
          const response = await sendApplication(formData, title);
          if (response.error) {
            toast({
              title: "Error Submitting Application ❌",
              variant: "destructive",
              description: response.message,
            });
          } else {
            setDialogOpen(false);
            toast({
              title: "Successfully Submitted Application",
              description: response.message,
            });
          }
        }}
        className="flex flex-col"
        method="dialog"
      >
        <div className="mb-2 flex flex-col">
          <label htmlFor="name" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            className="form-input"
            required
          />
        </div>
        <div className="mb-2 flex flex-col">
          <label htmlFor="phonenumber" className="font-semibold">
            Phone Number
          </label>
          <input
            type="text"
            id="phonenumber"
            name="phonenumber"
            placeholder="123-456-7890"
            className="form-input"
            required
          />
        </div>

        <div className="mb-2 flex flex-col">
          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            placeholder="test@example.com"
            name="email"
            className="form-input"
            required
          />
        </div>
        <div className="mb-2 flex flex-col">
          <label htmlFor="resume" className="font-semibold">
            Resume
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            placeholder="resume"
            className="form-input"
            required
          />
        </div>
        <SubmitButton />
      </form>
    </div>
  );
};

export default CareerApplyForm;
