import { faqs } from "@/content/site";
import { Reveal, SectionHeading } from "../Reveal";

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-5 py-24 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Questions"
          title="Good to know"
          lead="Anything else? Write to support@nailangs.com — a person reads every message."
        />
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04} y={12}>
              <details className="group py-2 [&_summary::-webkit-details-marker]:hidden">
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg py-4 font-display text-lg font-semibold sm:text-xl">
                  {f.q}
                  <span
                    aria-hidden
                    className="grid size-9 shrink-0 place-items-center rounded-full border border-ink/15 text-xl transition-all duration-300 group-open:rotate-45 group-open:bg-ink group-open:text-paper"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-5 pr-12 leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
