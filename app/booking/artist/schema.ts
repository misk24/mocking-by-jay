import * as z from "zod";

export const artistBookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(20),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.date({ message: "Event date is required"}),
  eventLocation: z.string().min(2, "Location must be at least 2 characters").max(200),
  artist: z.string().min(1, "Please select an artist"),
  notes: z.string().max(1000, "Notes must be less than 1000 characters").optional(),
});

export type ArtistBookingFormValues = z.infer<typeof artistBookingSchema>;