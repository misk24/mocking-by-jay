import { Mail, MapPin, Mic, Phone } from "lucide-react";
import { BookStudioProps, ContactProps, ContactSectionProps } from "./type";

export const contactSection: ContactSectionProps = {
  title: "Get In Touch",
};

export const contacts: ContactProps = {
  title: "Contact Info",
  contacts: [
    { icon: Mail, label: "info@mockingbyjay.com" },
    { icon: Phone, label: "+1 (555) RAP-MGMT" },
    { icon: MapPin, label: "Los Angeles, CA" },
  ],
};

export const book: BookStudioProps = {
  title: "Book Studio",
  icon: Mic,
  button: {
    label:
      "Reserve professional studio time for recording, mixing, and production",
    href: "/booking/studio",
  },
};
