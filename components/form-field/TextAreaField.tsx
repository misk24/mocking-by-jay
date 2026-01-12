import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@components/ui/form";
import { Textarea } from "@components/ui/textarea";

interface TextareaFieldProps {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  minHeight?: string;
}

export function TextAreaField({ control, name, label, placeholder = "", minHeight = "min-h-30" }: TextareaFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea 
              {...field} 
              className={minHeight}
              placeholder={placeholder}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}