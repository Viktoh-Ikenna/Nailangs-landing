import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead?: ReactNode }) {
  return (
    <section className="grain relative overflow-hidden pb-16 pt-36 sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 size-[560px] rounded-full bg-lime/30 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-leaf">
            <span className="h-px w-8 bg-leaf" />
            {eyebrow}
          </p>
          <h1 className="text-balance mt-5 max-w-4xl font-display text-[clamp(2.6rem,7vw,5.4rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
            {title}
          </h1>
          {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">{lead}</p>}
        </Reveal>
      </div>
    </section>
  );
}
