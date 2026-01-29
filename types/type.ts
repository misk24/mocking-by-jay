interface CheckboxOption {
  id: string;
  label: string;
  rate: string;
}

interface Option {
  label: string;
  value: string;
}

export interface ButtonProps {
  label: string;
  href: string;
}

export interface CheckboxFieldProps {
  control: any;
  name: string;
  label: string;
  options: CheckboxOption[];
}

export interface DateFieldProps {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
}

export interface NavigationProps {
  label: string;
  href: string;
}

export interface SelectFieldProps {
  control: any;
  name: string;
  label: string;
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
}

export interface SocialProps {
  id: SocialId;
  icon: string;
  label: string;
  href: string;
}

export interface TextareaFieldProps {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  minHeight?: string;
}

export interface TextFieldProps {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
}

export type SocialId = "ig" | "x" | "spot" | "yt";
