import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import {
  Home,
  UserPlus,
  Workflow,
  Gift,
  Settings,
  HelpCircle,
  PanelLeft,
  ChevronDown,
  Menu,
} from "lucide-react";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

const nav = [
  { to: "/", label: "Home", icon: Home },
  { to: "/new-followers", label: "New Followers", icon: UserPlus },
  { to: "/automation", label: "Automation", icon: Workflow },
] as const;

export function AppSidebar() {
  const location = useLocation();
  const path = location.pathname;
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebarContent = (
    <>
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
              onClick={() => setMobileOpen(false)}
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
          onClick={() => setMobileOpen(false)}
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
          onClick={() => setMobileOpen(false)}
          className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium ${
            path === "/settings" ? "bg-muted text-foreground" : "text-foreground hover:bg-muted"
          }`}
        >
          <Settings className="h-4 w-4" />
          Settings
        </Link>
        <Link
          to="/help"
          onClick={() => setMobileOpen(false)}
          className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium ${
            path === "/help" ? "bg-muted text-foreground" : "text-foreground hover:bg-muted"
          }`}
        >
          <HelpCircle className="h-4 w-4" />
          Help
        </Link>
      </div>
    </>
  );

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed left-3 bottom-3 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
        aria-label="Open sidebar"
      >
        <Menu className="h-5 w-5" />
      </button>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="md:hidden w-[18rem] p-0">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <div className="flex h-full flex-col bg-[var(--sidebar-bg)]">{sidebarContent}</div>
        </SheetContent>
      </Sheet>

      <aside className="hidden md:flex w-64 shrink-0 flex-col border-r border-border bg-[var(--sidebar-bg)]">
        {sidebarContent}
      </aside>
    </>
  );
}
