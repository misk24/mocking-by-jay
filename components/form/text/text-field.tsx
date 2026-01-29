import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TextFieldProps } from "@/types/type";

export function TextField({
  control,
  name,
  label,
  placeholder = "",
  type,
}: TextFieldProps) {
  let defaultType = "text";

  if (!type) {
    if (name.toLowerCase().includes("email")) defaultType = "email";
  }

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>

          <FormControl>
            <Input
              {...field}
              type={type || defaultType}
              placeholder={placeholder}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
