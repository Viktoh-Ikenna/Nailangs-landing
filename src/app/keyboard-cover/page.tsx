import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "NKB silicone keyboard cover",
  description:
    "The Nailangs (NKB) silicone keyboard cover shows the Nailangs letters on your laptop keys, and protects the keyboard from dust and spills.",
  alternates: { canonical: "/keyboard-cover" },
};

const BENEFITS = [
  { title: "Simple to use", body: "Place the cover on your keyboard, line its Q key up with your computer’s, and you’re ready to type." },
  { title: "Every Nailangs key, labelled", body: "Find the letters and keys that are particular to Nailangs at a glance while your computer is in Nailangs mode." },
  { title: "Protects your keyboard", body: "Soft to the touch, and keeps out dust, moisture and spilled drinks — so your keyboard lasts longer." },
  { title: "Easy to clean", body: "Take it off and wash it in warm water with mild soap." },
  { title: "Made to last", body: "Flexible, durable, high-quality silicone." },
];

export default function CoverPage() {
  return (
    <>
      <PageHero
        eyebrow="NKB silicone cover"
        title={
          <>
            Your Nailangs keys, <span className="text-leaf">right where you look.</span>
          </>
        }
        lead="The Nailangs Keyboard silicone cover shows where every Nailangs letter and key is, so typing Nigerian languages correctly feels natural from day one."
      />
      <section className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-lime to-sun px-6 py-16 sm:px-14">
            <Image
              src="/images/silicone-cover.png"
              alt="The green Nailangs silicone keyboard cover"
              width={1000}
              height={420}
              priority
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="mx-auto h-auto w-full max-w-4xl animate-float drop-shadow-[0_30px_40px_rgb(20_69_42/0.35)]"
            />
          </div>
        </Reveal>
      </section>
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.06}>
            <article className="h-full rounded-[1.8rem] border border-ink/10 bg-white/80 p-7">
              <span className="font-display text-sm font-bold text-ember">0{i + 1}</span>
              <h2 className="mt-3 font-display text-2xl font-bold">{b.title}</h2>
              <p className="mt-2 leading-relaxed text-ink-soft">{b.body}</p>
            </article>
          </Reveal>
        ))}
        <Reveal delay={0.3}>
          <article className="flex h-full flex-col justify-between rounded-[1.8rem] bg-ink p-7 text-paper">
            <h2 className="font-display text-2xl font-bold">Want one?</h2>
            <p className="mt-2 text-paper/75">Ask us about availability and prices for you, your school or your office.</p>
            <Link
              href="/contact"
              className="focus-ring mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-lime px-5 py-3 font-semibold text-ink"
            >
              Contact us <span aria-hidden>→</span>
            </Link>
          </article>
        </Reveal>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-28">
        <Reveal>
          <div className="relative aspect-[1006/612] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/silicone-cover-desk.jpg"
              alt="The Nailangs cover on a keyboard on a wooden desk, beside a phone and a mouse"
              fill
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
