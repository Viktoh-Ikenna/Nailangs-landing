import { CoverTeaser } from "@/components/home/CoverTeaser";
import { Faq } from "@/components/home/Faq";
import { Features } from "@/components/home/Features";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { Languages, Marquee } from "@/components/home/Languages";
import { Platforms } from "@/components/home/Platforms";
import { Story } from "@/components/home/Story";
import { ToneMatters } from "@/components/home/ToneMatters";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/content/site";

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqPage} />
      <Hero />
      <Marquee />
      <Languages />
      <ToneMatters />
      <Features />
      <Platforms />
      <Story />
      <CoverTeaser />
      <Faq />
      <FinalCta />
    </>
  );
}
