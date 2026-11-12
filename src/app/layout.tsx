import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { platforms, site } from "@/content/site";
import "./globals.css";

// Both fonts carry the Vietnamese subset (where ẹ, ọ, ị, ụ and the tone-marked vowels live)
// AND position combining marks properly, so "ọ̀" stacks its grave over the dotted o.
// Bricolage Grotesque was tried and drops the mark beside the letter ("ọ`"): don't use it.
const display = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-display-face",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Nailangs — Keyboards for Yorùbá, Igbo, Hausa and Nigerian languages",
    template: "%s · Nailangs",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Nigerian keyboard",
    "Yoruba keyboard",
    "Igbo keyboard",
    "Hausa keyboard",
    "tone marks keyboard",
    "Yorùbá tone marks",
    "type Yoruba on phone",
    "Nigerian languages",
    "Nailangs",
    "NKB",
  ],
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "Nailangs — Type Nigerian languages the right way",
    description: site.description,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Nailangs",
    creator: "@Nailangs",
    title: "Nailangs — Type Nigerian languages the right way",
    description: site.description,
  },
  robots: { index: true, follow: true },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#14452a",
  width: "device-width",
  initialScale: 1,
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  logo: `${site.url}/images/nailangs-icon.png`,
  email: site.email.enquiries,
  sameAs: site.socials.map((s) => s.href),
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  inLanguage: "en-NG",
};

const apps = platforms.map((p) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: `Nailangs Keyboard for ${p.name}`,
  operatingSystem: p.name === "iPhone & iPad" ? "iOS, iPadOS" : p.name,
  applicationCategory: "UtilitiesApplication",
  description: p.blurb,
  publisher: { "@type": "Organization", name: site.legalName },
  ...(p.store.href ? { downloadUrl: p.store.href } : {}),
}));

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NG" className={`${display.variable} ${inter.variable}`}>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <JsonLd data={[organization, website, ...apps]} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
