import { Link, useLocation } from "@tanstack/react-router";
import {
  Home,
  UserPlus,
  Workflow,
  Gift,
  Settings,
  HelpCircle,
  PanelLeft,
  ChevronDown,
} from "lucide-react";

const nav = [
  { to: "/", label: "Home", icon: Home },
  { to: "/new-followers", label: "New Followers", icon: UserPlus },
  { to: "/automation", label: "Automation", icon: Workflow },
] as const;

export function AppSidebar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <aside className="hidden md:flex w-64 shrink-0 flex-col border-r border-border bg-[var(--sidebar-bg)]">
      {/* Logo */}
      <div className="flex items-center justify-between px-4 h-16 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
            C
          </div>
          <span className="font-semibold text-foreground">Creatordesks</span>
        </div>
        <button className="text-muted-foreground hover:text-foreground" aria-label="Toggle sidebar">
          <PanelLeft className="h-4 w-4" />
        </button>
      </div>

      {/* Account switcher */}
      <div className="px-3 py-3 border-b border-border">
        <button className="w-full flex items-center justify-between gap-2 rounded-lg px-2 py-2 hover:bg-muted">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-foreground" />
            <span className="text-sm font-medium text-foreground">Tushar Rawat</span>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-3 space-y-1">
        {nav.map((item) => {
          const Icon = item.icon;
          const active = path === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Refer & Earn CTA */}
      <div className="px-3">
        <Link
          to="/refer"
          className="flex items-center gap-3 rounded-lg bg-primary px-3 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          <Gift className="h-4 w-4" />
          Refer & Earn
        </Link>
      </div>

      {/* Bottom */}
      <div className="px-3 py-3 mt-3 space-y-1 border-t border-border">
        <Link
          to="/settings"
          className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium ${
            path === "/settings" ? "bg-muted text-foreground" : "text-foreground hover:bg-muted"
          }`}
        >
          <Settings className="h-4 w-4" />
          Settings
        </Link>
        <Link
          to="/help"
          className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium ${
            path === "/help" ? "bg-muted text-foreground" : "text-foreground hover:bg-muted"
          }`}
        >
          <HelpCircle className="h-4 w-4" />
          Help
        </Link>
      </div>
    </aside>
  );
}
