import { InputHTMLAttributes, forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  trailing?: ReactNode;
}

export const TextField = forwardRef<HTMLInputElement, Props>(
  ({ className, label, trailing, id, ...props }, ref) => (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          ref={ref}
          id={id}
          className={cn(
            "w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40",
            trailing && "pr-10",
            className,
          )}
          {...props}
        />
        {trailing && (
          <div className="absolute inset-y-0 right-3 flex items-center text-muted-foreground">
            {trailing}
          </div>
        )}
      </div>
    </div>
  ),
);
TextField.displayName = "TextField";
