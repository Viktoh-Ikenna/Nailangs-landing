import Link from "next/link";
import { site } from "@/content/site";
import { Reveal } from "../Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden px-5 py-28 text-center lg:py-36">
      <div aria-hidden className="absolute left-1/2 top-1/2 size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/30 blur-[120px]" />
      <Reveal className="relative mx-auto max-w-3xl">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-leaf">{site.motto}</p>
        <h2 className="text-balance mt-5 font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl">
          Your language deserves its own letters.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">{site.slogan}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/download"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-ember px-8 py-4 font-semibold text-white shadow-[0_14px_30px_-12px_rgb(239_90_40/0.8)] transition-all hover:-translate-y-0.5 hover:bg-ember-2"
          >
            Get Nailangs <span aria-hidden>→</span>
          </Link>
          <Link
            href="/contact"
            className="focus-ring inline-flex items-center rounded-full border border-ink/15 px-8 py-4 font-semibold transition-colors hover:bg-white"
          >
            Talk to us
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
