import Link from "next/link";
import { site } from "@/content/site";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/download", label: "Download" },
      { href: "/#languages", label: "Languages" },
      { href: "/#features", label: "Features" },
      { href: "/keyboard-cover", label: "Keyboard cover" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "Our story" },
      { href: "/contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
      { href: "/privacy-policy", label: "Privacy policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-paper">
      <div className="adire absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-paper/70">{site.motto}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {site.socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex rounded-full border border-paper/20 px-3.5 py-1.5 text-sm text-paper/80 transition-colors hover:border-lime hover:text-lime"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-lime">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="focus-ring rounded text-paper/75 transition-colors hover:text-paper">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-lime">Talk to us</h2>
            <ul className="mt-4 space-y-2.5 text-paper/75">
              <li>
                <a className="focus-ring rounded hover:text-paper" href={`mailto:${site.email.enquiries}`}>
                  {site.email.enquiries}
                </a>
              </li>
              <li>
                <a className="focus-ring rounded hover:text-paper" href={`mailto:${site.email.support}`}>
                  {site.email.support}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p
          aria-hidden
          className="mt-20 select-none font-display text-[clamp(3.5rem,15vw,12rem)] font-extrabold leading-[0.8] tracking-tighter text-paper/[0.07]"
        >
          Nailangs
        </p>

        <div className="mt-8 flex flex-col gap-3 border-t border-paper/15 pt-6 text-sm text-paper/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>{site.designRegistration}</p>
        </div>
      </div>
    </footer>
  );
}
