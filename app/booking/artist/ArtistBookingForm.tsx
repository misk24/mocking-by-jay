import { DateField, SelectField, TextAreaField, TextField } from "@/components/form-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ARTIST_OPTION, EVENT_TYPES } from "./constant";
import { ArtistBookingFormValues, artistBookingSchema } from "./schema";

export default function ArtistBookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const searchParams = useSearchParams();
  const artistParam = searchParams.get("artist");

  const form = useForm<ArtistBookingFormValues>({
    resolver: zodResolver(artistBookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: undefined,
      eventLocation: "",
      artist: artistParam ?? "",
      details: "",
    },
  });

  async function onSubmit(values: ArtistBookingFormValues) {
    setIsSubmitting(true);

    try {
      console.log("Booking submitted:", values);
      toast.success("Booking request submitted!");
      form.reset();
    } catch (error: any) {
      console.error("Error submitting booking:", error);
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/">
              <Button
                variant="ghost"
                className="mb-2"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="font-display text-4xl md:text-5xl text-primary">
              Book an Artist
            </h1>
            <p className="text-muted-foreground mt-2">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }} 
        className="max-w-2xl mx-auto px-4 py-12"
      >
        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(onSubmit)} 
            className="space-y-6"
          >
            <TextField 
              control={form.control} 
              name="name"
              label="Full Name"
              placeholder="John Doe"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextField 
                control={form.control} 
                name="email"
                label="Email"
                placeholder="john@example.com"
              />
              
              <TextField 
                control={form.control} 
                name="phone"
                label="Phone Number"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SelectField
                control={form.control}
                name="eventType"
                label="Event Type"
                options={EVENT_TYPES}
                placeholder="Select event type"
              />

              <DateField
                control={form.control}
                name="eventDate"
                label="Event Date"
              />
            </div>
            
            <TextField
              control={form.control}
              name="eventLocation"
              label="Event Location"
              placeholder="City, State or Venue Name"
            />

            <SelectField
              control={form.control}
              name="artist"
              label="Select Artist"
              options={ARTIST_OPTION}
              placeholder="Choose an artist"
            />

            <TextAreaField 
              control={form.control}
              name="notes"
              label="Additional Notes (Optional)"
              placeholder="Tell us more about your event, expected audience size, budget range, etc."
            />

            <Button
              type="submit"
              variant="hero"
              size="xl"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Booking Request"}
            </Button>
          </form>
        </Form>
      </motion.div>
    </section>
  );
}