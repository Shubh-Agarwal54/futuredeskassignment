import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Creatordesks" },
      { name: "description", content: "Manage your Creatordesks account settings." },
    ],
  }),
  component: Settings,
});

function Settings() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="mt-2 text-muted-foreground">Manage your account preferences.</p>
      </div>
    </Layout>
  );
}
