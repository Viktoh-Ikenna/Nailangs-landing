import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../Reveal";

export function CoverTeaser() {
  return (
    <section className="px-3 sm:px-5">
      <div className="grain relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-lime via-[#c7df63] to-sun px-6 py-16 sm:px-12 lg:py-20">
        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-forest">
              NKB silicone cover
            </p>
            <h2 className="text-balance mt-4 font-display text-4xl font-bold leading-[1.03] tracking-tight text-ink sm:text-5xl">
              See every Nailangs key at a glance.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/75">
              A soft, washable cover for your laptop keyboard that shows where the Nailangs letters live — and
              keeps out dust and spills while it’s at it.
            </p>
            <Link
              href="/keyboard-cover"
              className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              About the cover <span aria-hidden>→</span>
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="animate-float">
              <Image
                src="/images/silicone-cover.png"
                alt="The green Nailangs silicone keyboard cover, showing the special letters on its keys"
                width={1000}
                height={420}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="h-auto w-full -rotate-3 drop-shadow-[0_30px_40px_rgb(20_69_42/0.35)]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
