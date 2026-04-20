import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/refer")({
  head: () => ({
    meta: [
      { title: "Refer & Earn — Creatordesks" },
      { name: "description", content: "Invite creators and earn rewards." },
    ],
  }),
  component: Refer,
});

function Refer() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-2xl font-bold text-foreground">Refer & Earn</h1>
        <p className="mt-2 text-muted-foreground">Invite friends and unlock rewards.</p>
      </div>
    </Layout>
  );
}
