"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toneExamples } from "@/content/site";
import { Reveal, SectionHeading } from "../Reveal";

/** Pick a spelling and watch the meaning change: the case for tone marks in one widget. */
export function ToneMatters() {
  const [lang, setLang] = useState(0);
  const [form, setForm] = useState(0);
  const example = toneExamples[lang];
  const current = example.forms[form];

  return (
    <section id="tones" className="relative overflow-hidden bg-ink py-24 text-paper lg:py-32">
      <div className="adire absolute inset-0" aria-hidden />
      <div aria-hidden className="absolute -right-24 top-10 size-[460px] rounded-full bg-leaf/25 blur-[120px]" />
      <div className="relative mx-auto grid max-w-6xl gap-16 px-5 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            light
            eyebrow="Why tone marks matter"
            title={
              <>
                Same letters. <span className="text-lime">Different words.</span>
              </>
            }
            lead={
              <>
                Nigerian languages are tonal: the marks above and below the letters change the meaning. Typed
                without them, <em>{example.bare}</em> could be any of these — and the reader has to guess.
              </>
            }
          />
          <Reveal delay={0.1}>
            <div className="mt-8 inline-flex rounded-full bg-white/10 p-1" role="tablist" aria-label="Language">
              {toneExamples.map((t, i) => (
                <button
                  key={t.language}
                  role="tab"
                  aria-selected={lang === i}
                  onClick={() => {
                    setLang(i);
                    setForm(0);
                  }}
                  className={`focus-ring rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                    lang === i ? "bg-paper text-ink" : "text-paper/70 hover:text-paper"
                  }`}
                >
                  {t.language}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-paper/50">Without marks</p>
            <p className="mt-1 font-display text-3xl font-semibold text-paper/40 line-through decoration-ember/70">
              {example.bare}
            </p>

            <div className="mt-8 min-h-[150px]" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${lang}-${form}`}
                  initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="font-display text-7xl font-extrabold tracking-tight text-lime sm:text-8xl">
                    {current.word}
                  </p>
                  <p className="mt-3 text-2xl text-paper/85">
                    means <strong className="font-semibold text-paper">“{current.meaning}”</strong>
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {example.forms.map((f, i) => (
                <button
                  key={f.word}
                  onClick={() => setForm(i)}
                  aria-pressed={form === i}
                  className={`focus-ring rounded-2xl border px-3 py-3 text-left transition-all ${
                    form === i
                      ? "border-lime bg-lime text-ink"
                      : "border-white/15 text-paper hover:border-white/40 hover:bg-white/5"
                  }`}
                >
                  <span className="block font-display text-2xl font-bold">{f.word}</span>
                  <span className={`text-xs ${form === i ? "text-ink/70" : "text-paper/60"}`}>{f.meaning}</span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
