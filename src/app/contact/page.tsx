import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Nailangs",
  description: "Questions, support, partnerships or press: email Nailangs or find us on social media.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const cards = [
    {
      title: "General enquiries",
      body: "Partnerships, schools, government, press and the silicone cover.",
      email: site.email.enquiries,
    },
    {
      title: "Support",
      body: "Help installing or using Nailangs on any device. Tell us your device and what happened.",
      email: site.email.support,
    },
  ];
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            We’d love to <span className="text-leaf">hear from you.</span>
          </>
        }
        lead="Thank you for your interest in Nailangs keyboards. Tell us what you think, ask a question, or say hello."
      />
      <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-16 md:grid-cols-2">
        {cards.map((c, i) => (
          <Reveal key={c.email} delay={i * 0.08}>
            <a
              href={`mailto:${c.email}`}
              className="focus-ring group block h-full rounded-[2rem] border border-ink/10 bg-white/80 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-34px_rgb(20_69_42/0.6)]"
            >
              <h2 className="font-display text-2xl font-bold">{c.title}</h2>
              <p className="mt-2 text-ink-soft">{c.body}</p>
              <p className="mt-8 inline-flex items-center gap-2 font-display text-xl font-semibold text-forest">
                {c.email}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </p>
            </a>
          </Reveal>
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-forest p-8 text-paper sm:p-12">
            <div className="adire absolute inset-0" aria-hidden />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold">Follow Nailangs</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {site.socials.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring flex items-center justify-between rounded-2xl border border-white/15 px-5 py-4 transition-colors hover:border-lime hover:bg-white/5"
                    >
                      <span>
                        <span className="block font-semibold">{s.name}</span>
                        <span className="text-sm text-paper/60">{s.handle}</span>
                      </span>
                      <span aria-hidden>↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
