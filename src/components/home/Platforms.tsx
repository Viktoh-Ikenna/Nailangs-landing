import Link from "next/link";
import { platforms } from "@/content/site";
import { PlatformIcon } from "../PlatformIcon";
import { Reveal, SectionHeading } from "../Reveal";
import { StoreButton } from "../StoreButton";

export function Platforms() {
  return (
    <section id="platforms" className="relative overflow-hidden bg-paper-2/70 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Every screen"
            title={
              <>
                Wherever you write, <span className="text-leaf">Nailangs is there.</span>
              </>
            }
          />
          <Reveal>
            <Link
              href="/download"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 font-semibold transition-colors hover:bg-ink hover:text-paper"
            >
              All downloads <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-ink/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-leaf/40 hover:shadow-[0_30px_60px_-34px_rgb(20_69_42/0.6)]">
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 size-36 rounded-full bg-lime/0 blur-2xl transition-colors duration-700 group-hover:bg-lime/40"
                />
                <span className="relative grid size-14 place-items-center rounded-2xl bg-forest text-paper">
                  <PlatformIcon id={p.id} />
                </span>
                <h3 className="relative mt-6 font-display text-2xl font-bold">{p.name}</h3>
                <p className="relative text-sm font-medium text-leaf">{p.device}</p>
                <p className="relative mt-3 flex-1 leading-relaxed text-ink-soft">{p.blurb}</p>
                <div className="relative mt-6">
                  <StoreButton platform={p} compact />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
