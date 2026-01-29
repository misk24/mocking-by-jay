import * as z from "zod";

export const studioBookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(20),
  date: z.date({ message: "Please select a date" }),
  notes: z
    .string()
    .max(1000, "Notes must be less than 1000 characters")
    .optional(),
  time: z.string().min(1, "Please select a time slot"),
  equipment: z
    .array(z.string())
    .min(1, "Please select at least one equipment option"),
});

export type StudioBookingFormValues = z.infer<typeof studioBookingSchema>;
