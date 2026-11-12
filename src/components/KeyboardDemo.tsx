"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

/** What the demo types, in turn: real greetings, with the letters only Nailangs has. */
const PHRASES = [
  { text: "Ẹ kú àárọ̀ o!", lang: "Yorùbá" },
  { text: "Ụtụtụ ọma!", lang: "Igbo" },
  { text: "Ina kwana?", lang: "Hausa" },
  { text: "Ẹ ṣé gan an!", lang: "Yorùbá" },
];

const ROWS = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
/** Keys that hold more letters (the small dot on the real keyboard). */
const VARIANTS: Record<string, string[]> = {
  a: ["à", "á", "ā"],
  e: ["é", "è", "ẹ", "ẹ́", "ẹ̀"],
  i: ["í", "ì", "ị"],
  o: ["ó", "ò", "ọ", "ọ́", "ọ̀"],
  u: ["ú", "ù", "ụ"],
  s: ["ṣ"],
  n: ["ń", "ǹ", "ṅ"],
  b: ["ɓ"],
  d: ["ɗ"],
  k: ["ƙ"],
  y: ["ƴ"],
};

const BASE: Record<string, string> = { "ɓ": "b", "ɗ": "d", "ƙ": "k", "ƴ": "y" };

/** The key a letter is typed from: "ẹ̀" → "e", "ṣ" → "s". */
function baseKey(grapheme: string): string {
  const lower = grapheme.toLowerCase();
  if (BASE[lower]) return BASE[lower];
  return lower.normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function graphemes(text: string): string[] {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const seg = new Intl.Segmenter("en", { granularity: "grapheme" });
    return Array.from(seg.segment(text), (s) => s.segment);
  }
  return Array.from(text.normalize("NFC"));
}

type Step = { typed: string; key: string | null; popup: { key: string; pick: string } | null };

/** Every frame of typing one phrase: press the key, or hold it and pick from the grid. */
function stepsFor(text: string): Step[] {
  const steps: Step[] = [];
  let typed = "";
  for (const g of graphemes(text)) {
    const key = baseKey(g);
    const plain = g.toLowerCase() === key;
    if (!plain && VARIANTS[key]) {
      steps.push({ typed, key, popup: null });
      steps.push({ typed, key, popup: { key, pick: "" } });
      steps.push({ typed, key, popup: { key, pick: g.toLowerCase() } });
    } else {
      steps.push({ typed, key: /[a-z]/.test(key) ? key : g === " " ? "space" : null, popup: null });
    }
    typed += g;
    steps.push({ typed, key: null, popup: null });
  }
  return steps;
}

export function KeyboardDemo() {
  const reduce = useReducedMotion();
  const [phrase, setPhrase] = useState(0);
  const [frame, setFrame] = useState(0);
  const steps = useMemo(() => stepsFor(PHRASES[phrase].text), [phrase]);
  const step = reduce ? { typed: PHRASES[0].text, key: null, popup: null } : steps[Math.min(frame, steps.length - 1)];

  useEffect(() => {
    if (reduce) return;
    const done = frame >= steps.length - 1;
    const current = steps[Math.min(frame, steps.length - 1)];
    const delay = done ? 2200 : current.popup ? (current.popup.pick ? 420 : 520) : current.key ? 120 : 70;
    const t = setTimeout(() => {
      if (done) {
        setPhrase((p) => (p + 1) % PHRASES.length);
        setFrame(0);
      } else setFrame((f) => f + 1);
    }, delay);
    return () => clearTimeout(t);
  }, [frame, steps, reduce]);

  const lang = PHRASES[reduce ? 0 : phrase].lang;

  return (
    <div className="relative mx-auto w-[300px] sm:w-[330px]" aria-hidden>
      {/* phone */}
      <div className="relative rounded-[2.8rem] bg-ink p-2.5 shadow-[0_40px_80px_-30px_rgb(20_69_42/0.55),0_0_0_1px_rgb(255_255_255/0.06)_inset]">
        <div className="relative overflow-hidden rounded-[2.3rem] bg-[#eef0ea]">
          <div className="absolute left-1/2 top-2.5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-ink" />
          {/* chat */}
          <div className="flex h-[300px] flex-col justify-end gap-2.5 px-4 pb-3 pt-12 sm:h-[320px]">
            <div className="max-w-[78%] self-start rounded-2xl rounded-bl-md bg-white px-3.5 py-2 text-[13px] text-ink-soft shadow-sm">
              Good morning! 👋🏾
            </div>
            <div className="self-end text-[10px] font-medium uppercase tracking-wider text-ink-soft/60">
              Typing in {lang}
            </div>
            <div className="min-h-[38px] max-w-[85%] self-end rounded-2xl rounded-br-md bg-leaf px-3.5 py-2 font-display text-[17px] font-medium text-white shadow-sm">
              {step.typed}
              <span className="ml-px inline-block h-[1.05em] w-[2px] translate-y-[3px] animate-blink bg-white/90" />
            </div>
          </div>
          {/* suggestion bar */}
          <div className="flex border-y border-ink/5 bg-[#e3e6df] text-[12px] text-ink-soft">
            {["Ẹ", "ẹ kú", "Ẹ̀yin"].map((s) => (
              <span key={s} className="flex-1 border-r border-ink/5 py-2 text-center last:border-0">
                {s}
              </span>
            ))}
          </div>
          {/* keyboard */}
          <div className="space-y-1.5 bg-[#d5d9d0] px-1 pb-7 pt-2">
            {ROWS.map((row, r) => (
              <div key={row} className="flex justify-center gap-[5px]" style={{ paddingInline: r === 1 ? 12 : r === 2 ? 30 : 0 }}>
                {row.split("").map((k) => {
                  const pressed = step.key === k;
                  const showPopup = step.popup?.key === k;
                  return (
                    <div key={k} className="relative flex-1">
                      <div
                        className={`relative grid h-9 place-items-center rounded-md text-[15px] font-medium shadow-[0_1px_0_rgb(0_0_0/0.25)] transition-all duration-100 ${
                          pressed ? "-translate-y-px bg-lime text-ink" : "bg-white text-ink"
                        }`}
                      >
                        {k}
                        {VARIANTS[k] && <span className="absolute right-1 top-1 size-[3px] rounded-full bg-ink/40" />}
                      </div>
                      <AnimatePresence>
                        {showPopup && (
                          <motion.div
                            initial={{ opacity: 0, y: 6, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 4, scale: 0.95 }}
                            transition={{ duration: 0.16 }}
                            className="absolute bottom-[calc(100%+6px)] left-1/2 z-20 flex -translate-x-1/2 gap-1 rounded-xl bg-white p-1.5 shadow-xl ring-1 ring-ink/10"
                          >
                            {VARIANTS[k].map((v) => (
                              <span
                                key={v}
                                className={`grid h-9 min-w-8 place-items-center rounded-lg px-1.5 font-display text-[17px] ${
                                  step.popup?.pick === v ? "bg-ember text-white" : "text-ink"
                                }`}
                              >
                                {v}
                              </span>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            ))}
            <div className="flex gap-[5px] px-0.5">
              <div className="grid h-9 w-14 place-items-center rounded-md bg-[#b9beb3] text-[11px] font-semibold text-ink">!#1</div>
              <div
                className={`grid h-9 flex-1 place-items-center rounded-md text-[12px] font-semibold shadow-[0_1px_0_rgb(0_0_0/0.25)] transition-colors ${
                  step.key === "space" ? "bg-lime text-ink" : "bg-white text-ink-soft"
                }`}
              >
                Nailangs
              </div>
              <div className="grid h-9 w-14 place-items-center rounded-md bg-[#b9beb3] text-[15px] text-ink">↵</div>
            </div>
          </div>
          <div className="absolute bottom-2 left-1/2 h-1 w-28 -translate-x-1/2 rounded-full bg-ink/70" />
        </div>
      </div>
    </div>
  );
}
