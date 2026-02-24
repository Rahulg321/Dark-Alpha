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
import { Input } from "@/components/ui/input";

const inputClass =
  "h-8 text-xs rounded-md border border-input px-2.5 py-1.5 bg-transparent file:text-xs file:h-6";

const CareerApplyForm = ({
  title,
  setDialogOpen,
}: {
  title: KeyTextField;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { toast } = useToast();
  return (
    <form
      action={async (formData) => {
        const response = await sendApplication(formData, title);
        if (response.error) {
          toast({
            title: "Error",
            variant: "destructive",
            description: response.message,
          });
        } else {
          setDialogOpen(false);
          toast({
            title: "Application submitted",
            description: response.message,
          });
        }
      }}
      className="space-y-3"
      method="dialog"
    >
      <div className="space-y-1.5">
        <label htmlFor="name" className="text-xs font-medium text-muted-foreground">
          Name
        </label>
        <Input
          id="name"
          name="name"
          placeholder="John Doe"
          className={inputClass}
          required
        />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="phonenumber" className="text-xs font-medium text-muted-foreground">
          Phone
        </label>
        <Input
          id="phonenumber"
          name="phonenumber"
          placeholder="123-456-7890"
          className={inputClass}
          required
        />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="email" className="text-xs font-medium text-muted-foreground">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className={inputClass}
          required
        />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="resume" className="text-xs font-medium text-muted-foreground">
          Resume
        </label>
        <Input
          type="file"
          id="resume"
          name="resume"
          className={inputClass + " cursor-pointer file:rounded file:border-0 file:px-2 file:py-1 file:text-xs"}
          required
        />
      </div>
      <SubmitButton />
    </form>
  );
};

export default CareerApplyForm;
