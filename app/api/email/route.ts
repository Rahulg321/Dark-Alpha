import { NextRequest } from "next/server";
import { resend } from "@/lib/mail";

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Dark Alpha Capital <info@darkalphacapital.com>",
      to: ["rg5353070@gmail.com", "pcterahulbca21b@gmail.com"],
      subject: "Hello world",
      html: "Hello world",
    });

    console.log(data, error);

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
