"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, Clock, Mic2, Headphones, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/useToast";
import { cn } from "@/lib/utils";
import Link from "next/link";

const studioBookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  date: z.date({
    message: "Please select a date",
  }),
  timeSlot: z.string().min(1, "Please select a time slot"),
  equipment: z.array(z.string()).min(1, "Please select at least one equipment option"),
  additionalNotes: z.string().optional(),
});

type StudioBookingFormValues = z.infer<typeof studioBookingSchema>;

const timeSlots = [
  "9:00 AM - 12:00 PM",
  "12:00 PM - 3:00 PM",
  "3:00 PM - 6:00 PM",
  "6:00 PM - 9:00 PM",
  "9:00 PM - 12:00 AM",
];

const equipmentOptions = [
  { id: "microphone", label: "Professional Microphone", rate: "$50/session" },
  { id: "mixing", label: "Mixing Console", rate: "$75/session" },
  { id: "monitors", label: "Studio Monitors", rate: "Included" },
  { id: "instruments", label: "Instruments (Guitar, Keys)", rate: "$30/session" },
  { id: "engineer", label: "Audio Engineer", rate: "$100/session" },
];

const StudioBooking = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");

  const form = useForm<StudioBookingFormValues>({
    resolver: zodResolver(studioBookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      timeSlot: "",
      equipment: [],
      additionalNotes: "",
    },
  });

  const onSubmit = async (data: StudioBookingFormValues) => {
    try {
      console.log("Studio booking submitted:", data);
      toast({
        title: "Booking request submitted!",
        description: `We've received your studio booking for ${format(data.date, "PPP")} at ${data.timeSlot}. We'll contact you within 24 hours.`,
      });
      form.reset();
      setSelectedTimeSlot("");
    } catch (error) {
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
      {/* Hero Section */}
      <section className="py-12 px-6 bg-linear-to-br from-deep-black via-background to-charcoal">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Mic2 className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="font-display text-5xl md:text-7xl mb-4 text-foreground">
            BOOK STUDIO TIME
          </h1>
          <p className="text-xl text-muted-foreground">
            Professional recording studio with top-tier equipment and experienced engineers
          </p>
        </div>
      </section>

      {/* Studio Rates */}
      <section className="py-12 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl mb-8 text-primary text-center">
            Studio Rates
          </h2>
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up">
            <Card className="border-border bg-card hover:border-primary transition-smooth">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mb-2" />
                <CardTitle className="font-display text-2xl">3-Hour Block</CardTitle>
                <CardDescription>Perfect for singles or demos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-display text-primary mb-2">$150</p>
                <p className="text-sm text-muted-foreground">Basic equipment included</p>
              </CardContent>
            </Card>

            <Card className="border-primary bg-card/80 hover:border-primary transition-smooth scale-105">
              <CardHeader>
                <Headphones className="w-12 h-12 text-primary mb-2" />
                <CardTitle className="font-display text-2xl">Full Day</CardTitle>
                <CardDescription>Most popular option</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-display text-primary mb-2">$400</p>
                <p className="text-sm text-muted-foreground">All equipment + engineer</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:border-primary transition-smooth">
              <CardHeader>
                <Music2 className="w-12 h-12 text-primary mb-2" />
                <CardTitle className="font-display text-2xl">Weekly Pass</CardTitle>
                <CardDescription>For serious projects</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-display text-primary mb-2">$1,200</p>
                <p className="text-sm text-muted-foreground">Unlimited access + priority</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl mb-8 text-primary text-center">
            Reserve Your Session
          </h2>

          <Card className="border-border bg-card">
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Date Selection */}
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Select Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date < new Date() || date < new Date("1900-01-01")
                              }
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Time Slot Selection */}
                  <FormField
                    control={form.control}
                    name="timeSlot"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Select Time Slot</FormLabel>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {timeSlots.map((slot) => (
                            <Button
                              key={slot}
                              type="button"
                              variant={field.value === slot ? "hero" : "urban"}
                              className="w-full"
                              onClick={() => {
                                field.onChange(slot);
                                setSelectedTimeSlot(slot);
                              }}
                            >
                              {slot}
                            </Button>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Equipment Options */}
                  <FormField
                    control={form.control}
                    name="equipment"
                    render={() => (
                      <FormItem>
                        <FormLabel className="text-base">Equipment & Add-ons</FormLabel>
                        <div className="space-y-3">
                          {equipmentOptions.map((item) => (
                            <FormField
                              key={item.id}
                              control={form.control}
                              name="equipment"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={item.id}
                                    className="flex flex-row items-start space-x-3 space-y-0 border border-border rounded-md p-4 hover:border-primary transition-smooth"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, item.id])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== item.id
                                                )
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <div className="flex-1">
                                      <FormLabel className="text-sm font-normal cursor-pointer">
                                        {item.label}
                                      </FormLabel>
                                      <p className="text-xs text-primary">{item.rate}</p>
                                    </div>
                                  </FormItem>
                                );
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Additional Notes */}
                  <FormField
                    control={form.control}
                    name="additionalNotes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Notes (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project, special requirements, or any questions..."
                            className="min-h-30"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" variant="hero" size="xl" className="w-full">
                    Submit Booking Request
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Mocking by Jay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default StudioBooking;
