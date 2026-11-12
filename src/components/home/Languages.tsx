import { languages, specialLetters } from "@/content/site";
import { Reveal, SectionHeading } from "../Reveal";

export function Marquee() {
  const items = [...specialLetters, ...specialLetters];
  return (
    <div className="relative overflow-hidden border-y border-forest/20 bg-forest py-5 text-paper" aria-hidden>
      <div className="flex w-max animate-marquee gap-10 pr-10">
        {items.map((ch, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-4xl font-bold">
            {ch}
            <span className="size-2 rounded-full bg-lime" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Languages() {
  return (
    <section id="languages" className="relative mx-auto max-w-6xl px-5 py-24 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-end">
        <SectionHeading
          eyebrow="One nation, many languages"
          title={
            <>
              Twelve languages. <span className="text-leaf">One keyboard.</span>
            </>
          }
          lead="Nigerians have typed their languages on English keyboards for too long — missing letters, missing tones, and a lot of guesswork. Nailangs brings them home."
        />
        <Reveal delay={0.1}>
          <div className="grid gap-3 sm:grid-cols-3">
            {languages
              .filter((l) => l.greeting)
              .slice(0, 3)
              .map((l) => (
                <figure
                  key={l.name}
                  className="rounded-2xl border border-ink/10 bg-white/70 p-4 shadow-[0_10px_30px_-20px_rgb(15_26_18/0.5)]"
                >
                  <blockquote className="font-display text-xl font-semibold leading-tight text-forest sm:text-2xl">
                    {l.greeting}
                  </blockquote>
                  <figcaption className="mt-3 text-xs font-medium uppercase tracking-wider text-ink-soft">
                    {l.name} · {l.meaning}
                  </figcaption>
                </figure>
              ))}
          </div>
        </Reveal>
      </div>

      <ul className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {languages.map((l, i) => (
          <Reveal key={l.name} delay={i * 0.04} y={16}>
            <li className="group relative flex h-full items-center justify-between overflow-hidden rounded-2xl border border-ink/10 bg-paper-2/60 px-4 py-5 transition-colors hover:border-leaf hover:bg-white">
              <span className="font-display text-lg font-semibold">{l.name}</span>
              <span
                aria-hidden
                className="grid size-7 place-items-center rounded-full bg-lime/60 text-sm text-forest transition-transform duration-300 group-hover:scale-110 group-hover:bg-lime"
              >
                ✓
              </span>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
