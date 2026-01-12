"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { ArrowLeft, CalendarIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ARTIST_OPTION, EVENT_TYPES } from "./constant";
import { ArtistBookingFormValues, artistBookingSchema } from "./schema";

export default function ArtistBooking() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const searchParams = useSearchParams();
  const artistParam = searchParams.get("artist");
  const isLockedArtist = Boolean(artistParam);

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
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="John Doe" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="john@example.com" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input 
                        type="tel" 
                        placeholder="+1 (555) 000-0000" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="eventType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Type</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      value={field.value}
                    >
                      <FormControl className="text-muted-foreground">
                        <SelectTrigger>
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {EVENT_TYPES.map((option) => (
                          <SelectItem 
                            key={option.value}
                            value={option.value}
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="eventDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-between hover:bg-transparent text-muted-foreground hover:text-muted-foreground font-normal"
                        >
                          {field.value ? format(new Date(field.value), "PPP") : "Pick a date"}
                          <CalendarIcon className="h-4 w-4 opacity-50" />
                        </Button>
                      </PopoverTrigger>

                      <PopoverContent 
                        className=" w-auto p-0" 
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                          autoFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="eventLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Location</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="City, State or Venue Name" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="artist"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Artist</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    value={field.value} 
                    disabled={isLockedArtist}
                  >
                    <FormControl className="text-muted-foreground">
                      <SelectTrigger>
                        <SelectValue placeholder="Choose an artist" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {ARTIST_OPTION.map((option) => (
                        <SelectItem 
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Details</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us more about your event, expected audience size, budget range, etc."
                      className="min-h-30"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
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