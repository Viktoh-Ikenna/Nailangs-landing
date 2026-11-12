import { asset } from "@/lib/asset";
import Image from "next/image";
import { features } from "@/content/site";
import { Reveal, SectionHeading } from "../Reveal";

const ICONS = ["ẹ", "ọ̀", "⇄", "Aa", "🔒", "◎"];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-24 lg:py-32">
      <SectionHeading
        eyebrow="Features"
        title={
          <>
            Built for how Nigeria <span className="text-ember">really writes.</span>
          </>
        }
        lead="Simple enough for anyone, complete enough for scholars, and private enough for everyone."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-6">
        <Reveal className="md:col-span-4 md:row-span-2">
          <article className="group relative h-full min-h-[420px] overflow-hidden rounded-[2rem] bg-forest">
            <Image
              src={asset("/images/family.jpg")}
              alt="A grandmother laughs as her granddaughter shows her a message on a phone"
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover opacity-90 transition-transform duration-[1.2s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-lime">
                Bilingual by default
              </p>
              <h3 className="mt-3 max-w-lg font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
                Write to Mama in Yorùbá and to the office in English — on the same keyboard.
              </h3>
            </div>
          </article>
        </Reveal>

        {features.slice(0, 2).map((f, i) => (
          <FeatureCard key={f.title} {...f} icon={ICONS[i]} delay={0.08 * (i + 1)} className="md:col-span-2" />
        ))}
        {features.slice(2).map((f, i) => (
          <FeatureCard
            key={f.title}
            {...f}
            icon={ICONS[i + 2]}
            delay={0.06 * i}
            className="md:col-span-3 lg:col-span-3 xl:col-span-3"
            wide={i === 0}
          />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  body,
  icon,
  delay,
  className,
  wide,
}: {
  title: string;
  body: string;
  icon: string;
  delay: number;
  className?: string;
  wide?: boolean;
}) {
  return (
    <Reveal delay={delay} className={className}>
      <article
        className={`group h-full rounded-[2rem] border border-ink/10 p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgb(15_26_18/0.45)] ${
          wide ? "bg-lime/40" : "bg-white/70"
        }`}
      >
        <span
          aria-hidden
          className="grid size-12 place-items-center rounded-2xl bg-ink font-display text-2xl text-paper transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110"
        >
          {icon}
        </span>
        <h3 className="mt-6 font-display text-xl font-bold">{title}</h3>
        <p className="mt-2 leading-relaxed text-ink-soft">{body}</p>
      </article>
    </Reveal>
  );
}
