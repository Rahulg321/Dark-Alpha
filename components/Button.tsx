"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="text-uppercase btn-primary mt-4 block px-6 py-2 font-bold text-white transition"
    >
      {pending ? "Submitting" : "Submit"}
    </button>
  );
}
