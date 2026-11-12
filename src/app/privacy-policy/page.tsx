import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import { Markdown } from "@/components/Markdown";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Nailangs keyboards don't collect your data: what you type stays on your device. Read the privacy policy for Android, iPhone and iPad, Mac and Windows.",
  alternates: { canonical: "/privacy-policy" },
};

/** One policy per app, kept as Markdown beside the code (src/content/privacy). */
const POLICIES = [
  { id: "android", label: "Android", file: "android.md" },
  { id: "ios", label: "iPhone & iPad", file: "ios.md" },
  { id: "mac", label: "Mac", file: "mac.md" },
  { id: "windows", label: "Windows", file: "windows.md" },
];

export default async function PrivacyPage() {
  const texts = await Promise.all(
    POLICIES.map((p) => readFile(path.join(process.cwd(), "src/content/privacy", p.file), "utf8")),
  );
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title={
          <>
            What you type <span className="text-leaf">stays with you.</span>
          </>
        }
        lead="Nailangs keyboards have no accounts, no analytics and no advertising. Suggestions are worked out on your own device. Here is the policy for each app."
      />
      <div className="mx-auto max-w-6xl px-5 pb-28">
        <nav aria-label="Policies" className="sticky top-24 z-10 -mx-2 mb-10 flex gap-2 overflow-x-auto px-2 py-2">
          {POLICIES.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="focus-ring shrink-0 rounded-full border border-ink/10 bg-paper/90 px-4 py-2 text-sm font-semibold backdrop-blur hover:bg-white"
            >
              {p.label}
            </a>
          ))}
        </nav>
        <div className="space-y-8">
          {POLICIES.map((p, i) => (
            <article id={p.id} key={p.id} className="rounded-[2rem] border border-ink/10 bg-white/80 p-7 [overflow-wrap:anywhere] sm:p-12">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-leaf">{p.label}</p>
              <div className="mt-3 max-w-3xl">
                <Markdown source={texts[i]} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
