import { asset } from "@/lib/asset";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../Reveal";

export function Story() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={asset("/images/founder-story.jpg")}
              alt="A woman in a blue print dress types on a laptop at a sunny desk"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-3 max-w-[260px] rotate-2 rounded-3xl bg-sun p-5 shadow-xl sm:-right-6">
            <p className="font-display text-lg font-bold leading-snug text-ink">
              “Necessity is the mother of invention.”
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-leaf">
              <span className="h-px w-8 bg-leaf" />
              Our story
            </p>
            <h2 className="text-balance mt-4 font-display text-4xl font-bold leading-[1.03] tracking-tight sm:text-5xl">
              It started with one missing letter.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                Our founder wanted to write in Yorùbá, her own language, on her computer — and couldn’t find a
                keyboard that would let her. Not one that typed both English, Nigeria’s official language, and
                Yorùbá properly.
              </p>
              <p>
                So she set out to make one: a keyboard for Nigeria as a whole, where many languages live side by
                side and most of us speak more than one. That idea became Nailangs.
              </p>
            </div>
            <Link
              href="/about"
              className="focus-ring group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              Read the full story
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
