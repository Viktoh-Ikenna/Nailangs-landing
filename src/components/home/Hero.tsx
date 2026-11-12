"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { KeyboardDemo } from "../KeyboardDemo";

const FLOATING = [
  { ch: "ẹ", className: "left-[4%] top-[14%] text-7xl text-ember", depth: 60 },
  { ch: "ọ̀", className: "right-[6%] top-[8%] text-6xl text-leaf", depth: 110 },
  { ch: "ṣ", className: "left-[10%] bottom-[16%] text-6xl text-forest", depth: 90 },
  { ch: "ɓ", className: "right-[3%] bottom-[24%] text-7xl text-lime", depth: 70 },
  { ch: "ụ", className: "right-[30%] top-[2%] text-5xl text-sun", depth: 140 },
];

const WORDS = ["Yorùbá", "Igbo", "Hausa", "Edo", "Efik", "Tiv"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.2]);

  return (
    <section ref={ref} className="grain relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40">
      {/* warm light */}
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 size-[640px] rounded-full bg-lime/30 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -left-32 top-1/2 size-[420px] rounded-full bg-ember/15 blur-[110px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 lg:grid-cols-[1.15fr_1fr]">
        <motion.div style={{ opacity: fade }}>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-wrap items-center gap-2 rounded-full border border-ink/10 bg-white/60 py-1.5 pl-1.5 pr-4 text-sm text-ink-soft backdrop-blur"
          >
            <span className="rounded-full bg-forest px-2.5 py-0.5 text-xs font-semibold text-paper">New</span>
            Now on Android, iPhone, iPad, Mac &amp; Windows
          </motion.p>

          <h1 className="mt-7 font-display text-[clamp(3rem,7vw,5.4rem)] font-extrabold leading-[0.92] tracking-[-0.035em]">
            <motion.span
              className="block"
              initial={reduce ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Type it right.
            </motion.span>
            <motion.span
              className="block"
              initial={reduce ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              In{" "}
              <span className="relative inline-grid overflow-hidden align-bottom">
                {WORDS.map((w, i) => (
                  <span
                    key={w}
                    className="col-start-1 row-start-1 bg-gradient-to-r from-leaf via-forest-2 to-ember bg-clip-text pb-2 text-transparent"
                    style={
                      reduce
                        ? { opacity: i === 0 ? 1 : 0 }
                        : { animation: `word-cycle ${WORDS.length * 2.2}s ${i * 2.2}s infinite both` }
                    }
                  >
                    {w}.
                  </span>
                ))}
              </span>
            </motion.span>
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
          >
            Nailangs keyboards put the real letters and tone marks of at least 12 Nigerian languages under
            your fingers — so what you write is read the way you mean it.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/download"
              className="focus-ring group inline-flex items-center gap-2 rounded-full bg-ember px-7 py-4 font-semibold text-white shadow-[0_14px_30px_-12px_rgb(239_90_40/0.8)] transition-all hover:-translate-y-0.5 hover:bg-ember-2"
            >
              Download Nailangs
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="#tones"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/50 px-7 py-4 font-semibold backdrop-blur transition-colors hover:bg-white"
            >
              Why tone marks matter
            </Link>
          </motion.div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink/10 pt-6">
            {[
              ["12+", "Nigerian languages"],
              ["4", "platforms"],
              ["0", "keystrokes sent online"],
            ].map(([n, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-3xl font-bold text-forest">{n}</dd>
                <dd className="mt-1 text-sm text-ink-soft">{label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div style={{ y: phoneY }} className="relative">
          {FLOATING.map((f) => (
            <FloatingLetter key={f.ch} {...f} progress={scrollYProgress} reduce={!!reduce} />
          ))}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <KeyboardDemo />
          </motion.div>
        </motion.div>
      </div>
      <style>{`
        @keyframes word-cycle {
          0% { opacity: 0; transform: translateY(60%); filter: blur(6px); }
          4%, ${100 / WORDS.length - 4}% { opacity: 1; transform: translateY(0); filter: blur(0); }
          ${100 / WORDS.length}%, 100% { opacity: 0; transform: translateY(-60%); filter: blur(6px); }
        }
      `}</style>
    </section>
  );
}

function FloatingLetter({
  ch,
  className,
  depth,
  progress,
  reduce,
}: {
  ch: string;
  className: string;
  depth: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduce: boolean;
}) {
  const y = useTransform(progress, [0, 1], [0, reduce ? 0 : -depth]);
  return (
    <motion.span
      aria-hidden
      style={{ y }}
      className={`pointer-events-none absolute z-10 hidden select-none font-display font-bold drop-shadow-sm sm:block ${className}`}
    >
      <span className="block animate-float" style={{ animationDelay: `${depth / 40}s` }}>
        {ch}
      </span>
    </motion.span>
  );
}
