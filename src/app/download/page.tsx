import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PlatformIcon } from "@/components/PlatformIcon";
import { Reveal } from "@/components/Reveal";
import { StoreButton } from "@/components/StoreButton";
import { platforms } from "@/content/site";

export const metadata: Metadata = {
  title: "Download Nailangs for Android, iPhone, iPad, Mac and Windows",
  description:
    "Get the Nailangs keyboard on Android, iPhone and iPad, Mac and Windows and type Yorùbá, Igbo, Hausa and other Nigerian languages with the right letters and tone marks.",
  alternates: { canonical: "/download" },
};

const SETUP: Record<string, string[]> = {
  android: [
    "Install Nailangs from Google Play.",
    "Open Nailangs and follow its steps to turn the keyboard on.",
    "In any app, switch to Nailangs from the keyboard picker.",
  ],
  ios: [
    "Install Nailangs from the App Store.",
    "Go to Settings › General › Keyboard › Keyboards › Add New Keyboard and pick Nailangs.",
    "In any app, tap the globe key to switch to Nailangs.",
  ],
  mac: [
    "Open the Nailangs app and click Install.",
    "Add Nailangs in System Settings › Keyboard › Text Input › Input Sources.",
    "Choose Nailangs from the input menu in the menu bar.",
  ],
  windows: [
    "Open the Nailangs app and choose Install.",
    "Add Nailangs in Settings › Time & language › Language & region.",
    "Switch with Windows + Space, or open the pop-out keyboard.",
  ],
};

export default function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="Download"
        title={
          <>
            Get Nailangs on <span className="text-leaf">every device.</span>
          </>
        }
        lead="Pick your device, install, and switch keyboards. You will be typing ẹ, ọ, ṣ and every tone mark in a minute."
      />
      <section className="mx-auto max-w-6xl space-y-5 px-5 pb-28">
        {platforms.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.05}>
            <article
              id={p.id}
              className="grid gap-8 rounded-[2rem] border border-ink/10 bg-white/80 p-7 sm:p-10 lg:grid-cols-[1.1fr_1fr]"
            >
              <div>
                <div className="flex items-center gap-4">
                  <span className="grid size-14 place-items-center rounded-2xl bg-forest text-paper">
                    <PlatformIcon id={p.id} />
                  </span>
                  <div>
                    <h2 className="font-display text-3xl font-bold">{p.name}</h2>
                    <p className="text-sm font-medium text-leaf">{p.device}</p>
                  </div>
                </div>
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">{p.blurb}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2 text-ink-soft">
                      <span aria-hidden className="mt-1.5 size-2 shrink-0 rounded-full bg-lime" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <StoreButton platform={p} />
                </div>
              </div>
              <div className="rounded-3xl bg-paper-2 p-6">
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-forest">
                  Set up in three steps
                </h3>
                <ol className="mt-5 space-y-4">
                  {SETUP[p.id].map((s, n) => (
                    <li key={s} className="flex gap-4">
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ink font-display text-sm font-bold text-paper">
                        {n + 1}
                      </span>
                      <span className="pt-1 leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
