import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Workflow } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home — Creatordesks" },
      { name: "description", content: "Your Creatordesks dashboard." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      <div className="p-8 max-w-3xl">
        <h1 className="text-2xl font-bold text-foreground">Welcome back, Tushar 👋</h1>
        <p className="mt-2 text-muted-foreground">
          Set up Instagram comment-to-DM automations in minutes.
        </p>
        <Link
          to="/automation"
          className="inline-flex items-center gap-2 mt-6 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          <Workflow className="h-4 w-4" />
          Create New Automation
        </Link>
      </div>
    </Layout>
  );
}
