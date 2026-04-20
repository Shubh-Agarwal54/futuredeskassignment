import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
}

export function SectionCard({ icon: Icon, title, subtitle, action, children }: Props) {
  return (
    <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <header className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-primary-soft text-primary-soft-foreground flex items-center justify-center">
            <Icon className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">{title}</h3>
            {subtitle && <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>}
          </div>
        </div>
        {action}
      </header>
      {children}
    </section>
  );
}
