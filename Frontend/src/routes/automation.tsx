import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, KeyboardEvent } from "react";
import {
  Image as ImageIcon,
  Filter,
  MessageSquare,
  Send,
  Reply,
  Plus,
  Trash2,
  Smile,
  Pencil,
  PanelsTopLeft,
  MessageCircle,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionCard } from "@/components/automation/SectionCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { TextField } from "@/components/ui/TextField";
import { PhoneFrame, PostPreview, DmPreview } from "@/components/automation/PhonePreview";
import postGrid from "@/assets/post-grid.jpg";
import reelsimg from "@/assets/reelsimg.png";

export const Route = createFileRoute("/automation")({
  head: () => ({
    meta: [
      { title: "Automation — Creatordesks" },
      {
        name: "description",
        content:
          "Build Instagram comment-to-DM automations: pick posts, add keywords, set replies, and configure follow-gated messages.",
      },
      { property: "og:title", content: "Automation — Creatordesks" },
      {
        property: "og:description",
        content:
          "Build Instagram comment-to-DM automations: pick posts, add keywords, set replies, and configure follow-gated messages.",
      },
    ],
  }),
  component: AutomationSetup,
});

function AutomationSetup() {
  const [keywords, setKeywords] = useState<string[]>(["Tool", "Tool"]);
  const [draft, setDraft] = useState("");
  const [replies, setReplies] = useState<string[]>([
    "You're Good To Go!",
    "You're Good To Go!",
    "You're Good To Go!",
  ]);
  const [askFollow, setAskFollow] = useState(true);
  const [goLive, setGoLive] = useState(true);
  const [tab, setTab] = useState<"canvas" | "new">("new");

  const addKeyword = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && draft.trim()) {
      setKeywords([...keywords, draft.trim()]);
      setDraft("");
    }
  };

  return (
    <Layout>
      <div className="flex flex-col h-screen">
        {/* Top bar */}
        <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6">
          <div className="flex items-center gap-2 text-foreground">
            <MessageCircle className="h-5 w-5 text-primary" />
            <h1 className="font-semibold">Automation</h1>
          </div>
          <Link
            to="/automation"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
          >
            <Pencil className="h-4 w-4" />
            Feedback
          </Link>
        </header>

        {/* Toolbar */}
        <div className="px-6 py-3 border-b border-border bg-card flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <button
              onClick={() => setTab("canvas")}
              className={`inline-flex shrink-0 whitespace-nowrap items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium ${
                tab === "canvas"
                  ? "border-primary bg-primary-soft text-primary-soft-foreground"
                  : "border-border text-foreground hover:bg-muted"
              }`}
            >
              <PanelsTopLeft className="h-4 w-4" />
              Canvas
            </button>
            <button
              onClick={() => setTab("new")}
              className={`inline-flex shrink-0 whitespace-nowrap items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium ${
                tab === "new"
                  ? "border-primary bg-primary-soft text-primary-soft-foreground"
                  : "border-border text-foreground hover:bg-muted"
              }`}
            >
              <Pencil className="h-4 w-4" />
              New Automation
            </button>
          </div>
          <label className="inline-flex items-center gap-3 cursor-pointer self-start sm:self-auto">
            <span className="text-sm font-medium text-foreground whitespace-nowrap">Go Live</span>
            <span
              onClick={() => setGoLive((v) => !v)}
              className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                goLive ? "bg-emerald-500" : "bg-muted"
              }`}
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${
                  goLive ? "left-[22px]" : "left-0.5"
                }`}
              />
            </span>
          </label>
        </div>

        {/* Canvas area */}
        <div className="flex-1 overflow-auto bg-[radial-gradient(circle,var(--canvas-dot)_1px,transparent_1px)] [background-size:18px_18px]">
          <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-6 p-6 max-w-[1400px]">
            {/* Form column */}
            <div className="space-y-5">
              {/* Posts */}
              <SectionCard icon={ImageIcon} title="Select Specific Post or Reel">
                <img
                  src={reelsimg}
                  alt="Instagram posts and reels grid"
                  className="w-full rounded-lg"
                />
                <button className="mt-2 text-xs font-medium text-primary hover:underline">
                  Show All
                </button>
              </SectionCard>

              {/* Keywords */}
              <SectionCard icon={Filter} title="Select Specific Keyword">
                <TextField
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={addKeyword}
                  placeholder="Hit Enter ↲ To Add Keyword"
                  trailing={<Smile className="h-4 w-4" />}
                />
                <div className="flex flex-wrap gap-2 mt-3">
                  {keywords.map((k, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 rounded-md bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground"
                    >
                      <button
                        onClick={() => setKeywords(keywords.filter((_, idx) => idx !== i))}
                        className="hover:opacity-70"
                        aria-label={`Remove ${k}`}
                      >
                        ×
                      </button>
                      {k}
                    </span>
                  ))}
                </div>
                <PrimaryButton className="w-full mt-4">Confirm</PrimaryButton>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <span>For Example:</span>
                  {["Tool", "Startup", "Link"].map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-primary-soft px-2 py-0.5 text-primary-soft-foreground font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </SectionCard>

              {/* Comment Reply */}
              <SectionCard
                icon={Reply}
                title="Comment Reply"
                subtitle="Automate Comment Replies"
              >
                <div className="space-y-2">
                  {replies.map((r, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2.5"
                    >
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      <input
                        value={r}
                        onChange={(e) => {
                          const next = [...replies];
                          next[i] = e.target.value;
                          setReplies(next);
                        }}
                        className="flex-1 bg-transparent text-sm text-foreground focus:outline-none"
                      />
                      <button
                        onClick={() => setReplies(replies.filter((_, idx) => idx !== i))}
                        className="text-muted-foreground hover:text-destructive"
                        aria-label="Delete reply"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <PrimaryButton
                  variant="soft"
                  className="w-full mt-4"
                  onClick={() => setReplies([...replies, "You're Good To Go!"])}
                >
                  <Plus className="h-4 w-4" />
                  Add Comment Reply
                </PrimaryButton>
              </SectionCard>

              {/* DM */}
              <SectionCard
                icon={Send}
                title="Setup Instagram Message"
                subtitle="Add Content For Your Message"
              >
                <div className="rounded-xl border border-border bg-card p-3">
                  <div className="relative">
                    <textarea
                      placeholder="Enter Text"
                      className="w-full min-h-24 rounded-lg bg-transparent p-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none resize-none"
                    />
                    <Smile className="absolute top-2 right-2 h-4 w-4 text-muted-foreground" />
                  </div>
                  <button className="w-full rounded-lg border border-dashed border-border px-3 py-2 text-sm font-medium text-foreground hover:bg-muted">
                    + Add Link
                  </button>
                </div>

                <div className="rounded-xl border border-border bg-card p-4 mt-3 space-y-3">
                  <TextField label="Button Label" placeholder="Enter Text..." />
                  <TextField
                    label="Button Link"
                    defaultValue="https://www.creatordesks.com"
                  />
                  <div className="flex gap-2 pt-1">
                    <PrimaryButton variant="outline" className="flex-1">
                      Cancel
                    </PrimaryButton>
                    <PrimaryButton className="flex-1">Save</PrimaryButton>
                  </div>
                </div>

                <PrimaryButton className="w-full mt-4">Confirm</PrimaryButton>
              </SectionCard>

              {/* Ask to follow */}
              <SectionCard
                icon={Send}
                title="Ask To Follow Before Sending DM"
                action={
                  <span
                    onClick={() => setAskFollow((v) => !v)}
                    className={`relative h-6 w-11 rounded-full cursor-pointer transition-colors ${
                      askFollow ? "bg-primary" : "bg-muted"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${
                        askFollow ? "left-[22px]" : "left-0.5"
                      }`}
                    />
                  </span>
                }
              >
                <div className="rounded-xl border border-dashed border-primary/40 bg-primary-soft/30 p-3 text-xs leading-relaxed text-foreground">
                  Oh No! It Seems You're Not Following Me ✨ It Would Really Mean A Lot If You
                  Visit My Profile And Hit The Follow Button😊. Once You Have Done That, Click On
                  The 'I'm Following' Button Below And You Will Get The Link ✨
                </div>
                <div className="grid grid-cols-1 gap-2 mt-3">
                  <PrimaryButton variant="outline">Profile Visit</PrimaryButton>
                  <PrimaryButton variant="outline">I&apos;m Following ✅</PrimaryButton>
                </div>
              </SectionCard>
            </div>

            {/* Phone previews column */}
            <div className="space-y-10 pt-4 lg:pl-10 ">
              <PhoneFrame>
                <PostPreview />
              </PhoneFrame>
              <PhoneFrame>
                <DmPreview
                  message="Oh no! It seems you're not following me ✨ It would really mean a lot if you visit my profile and hit the follow button😊. Once you have done that, click on the 'I'm following' button below and you will get the link ✨"
                  buttons={["Profile Visit", "I'm Following ✅"]}
                />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
