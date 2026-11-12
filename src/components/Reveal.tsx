"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/** Fades and lifts its children in as they scroll into view (instantly with reduced motion). */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** A section heading: small label, big title, optional lead. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] ${
          light ? "text-lime" : "text-leaf"
        }`}
      >
        <span className={`h-px w-8 ${light ? "bg-lime" : "bg-leaf"}`} />
        {eyebrow}
      </p>
      <h2
        className={`text-balance mt-4 font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? "text-paper/75" : "text-ink-soft"}`}>{lead}</p>
      )}
    </Reveal>
  );
}
