"use server";

import { resend } from "@/lib/resend";
import { artistBookingSchema } from "./schema";

type ActionState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitArtistBooking(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = artistBookingSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      status: "error",
      message: "Invalid form data",
    };
  }

  try {
    const data = parsed.data;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "mail.sk2862@gmail.com",
      subject: "New Artist Booking",
      html: `
        <h2>New Booking</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Event:</strong> ${data.eventType}</p>
        <p><strong>Date:</strong> ${data.eventDate}</p>
        <p><strong>Artist:</strong> ${data.artist}</p>
        <p><strong>Details:</strong> ${data.notes ?? "-"}</p>
      `,
    });

    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: "Failed to send booking",
    };
  }
}
