import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help — Creatordesks" },
      { name: "description", content: "Get help using Creatordesks." },
    ],
  }),
  component: Help,
});

function Help() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-2xl font-bold text-foreground">Help Center</h1>
        <p className="mt-2 text-muted-foreground">Find answers and contact support.</p>
      </div>
    </Layout>
  );
}
