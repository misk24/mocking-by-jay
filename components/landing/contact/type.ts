import { ButtonProps } from "@/types/type";
import { LucideIcon } from "lucide-react";

export interface ContactSectionProps {
  title: string;
}

export interface ContactProps {
  title: string;
  contacts: {
    icon: LucideIcon;
    label: string;
  }[];
}

export interface BookStudioProps {
  title: string;
  icon: LucideIcon;
  button: ButtonProps;
}
