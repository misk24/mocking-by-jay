import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CheckboxFieldProps } from "@/types/type";

export function CheckboxField({
  control,
  name,
  label,
  options,
}: CheckboxFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <FormLabel className="text-base">{label}</FormLabel>

          <div className="space-y-3">
            {options.map((opt) => (
              <FormField
                key={opt.id}
                control={control}
                name={name}
                render={({ field }) => {
                  return (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 border border-border rounded-md p-4 hover:border-primary transition-smooth">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(opt.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, opt.id])
                              : field.onChange(
                                field.value?.filter(
                                  (value: string) => value !== opt.id,
                                ),
                              );
                          }}
                        />
                      </FormControl>

                      <div className="flex-1">
                        <FormLabel className="text-sm font-normal cursor-pointer">
                          {opt.label}
                        </FormLabel>
                        {opt.rate && (
                          <p className="text-xs text-primary">{opt.rate}</p>
                        )}
                        ;
                      </div>
                    </FormItem>
                  );
                }}
              />
            ))}
            ;
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
