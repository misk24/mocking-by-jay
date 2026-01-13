"use client";

import { CheckboxField, DateField, SelectField, TextAreaField, TextField } from "@/components/form-field";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/useToast";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { EQUIPMENT_OPTIONS, TIME_SLOTS } from "./constant";
import { StudioBookingFormValues, studioBookingSchema } from "./schema";

export default function BookingStudio() {
  const form = useForm<StudioBookingFormValues>({
    resolver: zodResolver(studioBookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      time: "",
      equipment: [],
      notes: "",
    },
  });

  async function onSubmit(value: StudioBookingFormValues) {
    try {
      console.log("Studio booking submitted:", value);
      toast({
        title: "Booking request submitted!",
        description: `We've received your studio booking for ${format(value.date, "PPP")} at ${value.time}. We'll contact you within 24 hours.`,
      });
      form.reset();
    } catch (error: any) {
      console.error("Error submitting studio booking:", error);
      toast({
        title: "Failed to submit booking",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
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
                variant="urban" 
                className="mb-2"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="font-display text-4xl md:text-5xl text-primary">
              Book Studio Time
            </h1>
            <p className="text-muted-foreground mt-2">
              Professional recording studio with top-tier equipment and experienced engineers.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Booking Form */}
      <section className="px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} 
          className="max-w-2xl mx-auto"
        >
          <Card className="border-border bg-card">
            <CardContent className="p-4 md:p-6">
              <Form {...form}>
                <form 
                  onSubmit={form.handleSubmit(onSubmit)} className="space-y-6"
                >
                  {/* Personal Info */}
                  <TextField 
                    control={form.control} 
                    name="name"
                    label="Full Name"
                    placeholder="Your name"
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <TextField 
                      control={form.control} 
                      name="email"
                      label="Email"
                      placeholder="your@email.com"
                    />

                    <TextField 
                      control={form.control} 
                      name="phone"
                      label="Phone Number"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Date Selection */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <DateField
                      control={form.control}
                      name="date"
                      label="Select Date"
                    />

                    {/* Time Slot Selection */}
                    <SelectField
                      control={form.control}
                      name="time"
                      label="Select Time Slot"
                      options={TIME_SLOTS}
                      placeholder="Select time slot"
                    />
                  </div>

                  {/* Equipment Options */}
                  <CheckboxField 
                    control={form.control}
                    name="equipment"
                    label="Equipment & Add-ons"
                    options={EQUIPMENT_OPTIONS}
                  />

                  {/* Additional Notes */}
                  <TextAreaField
                    control={form.control}
                    name="notes"
                    label="Additional Notes (Optional)"
                    placeholder="Tell us about your project, special requirements, or any questions..."
                  />

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="xl" 
                    className="w-full"
                  >
                    Submit Booking Request
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}