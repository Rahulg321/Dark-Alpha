import { NextRequest } from "next/server";
import { Resend } from "resend";

export const runtime = "edge";
export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

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
