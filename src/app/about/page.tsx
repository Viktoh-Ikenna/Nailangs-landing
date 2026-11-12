import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Our story — why Nailangs keyboards exist",
  description:
    "Nailangs began when our founder couldn't find a keyboard to type Yorùbá. Today Nailangs keyboards help Nigerians type at least 12 of their languages correctly.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    title: "Purpose",
    body: "To give Nigeria her own keyboards: real keys and tone marks for many of her languages, on the technology of the 21st century.",
  },
  {
    title: "Bilingual by nature",
    body: "Most Nigerians speak more than one language. One Nailangs keyboard types English and their mother tongue together.",
  },
  {
    title: "Unity",
    body: "One nation, many languages, one keyboard — making it easier and more fun for a multilingual society to talk to itself.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title={
          <>
            A keyboard for a nation that speaks <span className="text-leaf">many languages.</span>
          </>
        }
        lead="Nailangs Keyboards — NKB for short — exist so that Nigerians can write their languages as they are spoken: with the right letters and the tones that give words their meaning."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-24 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/founder-story.jpg"
              alt="A woman in a blue print dress types on a laptop at a sunny desk"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <h2 className="font-display text-3xl font-bold text-ink">The concept</h2>
            <p>
              The idea for Nailangs came about when our founder could not find a good, easy-to-use computer keyboard
              to type Yorùbá, her language. There was nothing that typed both her nation’s official language,
              English, and her native language properly.
            </p>
            <p>
              As the saying goes, necessity is the mother of invention. That gap started the concept and inspired
              keyboards that type many languages — built with Nigeria as a whole in mind: a multilingual society
              where multilingualism thrives.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-forest py-24 text-paper">
        <div className="adire absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5">
          <Reveal>
            <blockquote className="text-balance max-w-4xl font-display text-3xl font-bold leading-tight sm:text-5xl">
              “Up until now, Nigerians have had to type their languages on English keyboards — which don’t have
              many of their letters. <span className="text-lime">No more guesswork, or ‘guess-word’.</span>”
            </blockquote>
          </Reveal>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <article className="h-full rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-7">
                  <h3 className="font-display text-xl font-bold text-lime">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-paper/80">{v.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <h2 className="font-display text-4xl font-bold tracking-tight">Why the marks matter</h2>
          <div className="mt-5 space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              Nigerian languages are tonal. Typed on an English keyboard, without the letters and tone marks that
              are their hallmarks, words become hard to read at a glance — and readers are left guessing.
            </p>
            <p>
              With the right letters and tone marks, what you write is understood instantly. Nailangs brings many
              Nigerian languages into the technology age, and makes it simpler — and more fun — for a
              multilingual people to stay in touch.
            </p>
          </div>
          <Link
            href="/download"
            className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Get Nailangs <span aria-hidden>→</span>
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/family.jpg"
              alt="A grandmother laughs as her granddaughter shows her a message on a phone"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      <p className="mx-auto max-w-6xl px-5 pb-20 text-sm text-ink-soft">
        {site.legalName} · {site.designRegistration}
      </p>
    </>
  );
}
