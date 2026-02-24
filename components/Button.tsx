"use client";

import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";

export function SubmitButton({
  className,
}: {
  className?: string;
} = {}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        "btn-primary mt-3 block rounded-md px-4 py-1.5 text-xs font-medium text-white transition disabled:opacity-50",
        className
      )}
    >
      {pending ? "Submitting…" : "Submit"}
    </button>
  );
}
