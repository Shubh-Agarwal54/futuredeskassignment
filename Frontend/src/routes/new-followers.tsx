import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/new-followers")({
  head: () => ({
    meta: [
      { title: "New Followers — Creatordesks" },
      { name: "description", content: "See and welcome your newest Instagram followers." },
    ],
  }),
  component: NewFollowers,
});

function NewFollowers() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-2xl font-bold text-foreground">New Followers</h1>
        <p className="mt-2 text-muted-foreground">Track and welcome your latest followers.</p>
      </div>
    </Layout>
  );
}
