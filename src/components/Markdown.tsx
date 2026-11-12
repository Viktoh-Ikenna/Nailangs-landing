import { Fragment, type ReactNode } from "react";

/**
 * A tiny Markdown renderer for the policy pages: headings, paragraphs, bullet lists, **bold**,
 * _italic_, `code` and [links](url). Enough for the policies, nothing more.
 */
export function Markdown({ source, skipTitle = false }: { source: string; skipTitle?: boolean }) {
  const blocks = source.trim().split(/\n\s*\n/);
  const out: ReactNode[] = [];
  blocks.forEach((block, i) => {
    const lines = block.split("\n");
    if (block.startsWith("# ")) {
      if (!skipTitle) out.push(<h2 key={i} className="font-display text-3xl font-bold">{inline(block.slice(2))}</h2>);
    } else if (block.startsWith("## ")) {
      out.push(
        <h3 key={i} className="mt-10 font-display text-xl font-bold text-forest">
          {inline(block.slice(3))}
        </h3>,
      );
    } else if (lines.every((l) => /^\s*-\s/.test(l) || /^\s{2,}\S/.test(l))) {
      const items: string[] = [];
      for (const l of lines) {
        if (/^\s*-\s/.test(l)) items.push(l.replace(/^\s*-\s/, ""));
        else items[items.length - 1] += " " + l.trim();
      }
      out.push(
        <ul key={i} className="mt-4 list-disc space-y-2 pl-6 text-ink-soft">
          {items.map((it, n) => (
            <li key={n}>{inline(it)}</li>
          ))}
        </ul>,
      );
    } else {
      out.push(
        <p key={i} className="mt-4 leading-relaxed text-ink-soft">
          {inline(lines.join(" "))}
        </p>,
      );
    }
  });
  return <>{out}</>;
}

function inline(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|_[^_]+_|`[^`]+`|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith("**")) return <strong key={i} className="font-semibold text-ink">{part.slice(2, -2)}</strong>;
    if (part.startsWith("_") && part.endsWith("_") && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>;
    if (part.startsWith("`")) return <code key={i} className="rounded bg-paper-2 px-1.5 py-0.5 text-sm">{part.slice(1, -1)}</code>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link)
      return (
        <a key={i} href={link[2]} className="font-medium text-leaf underline underline-offset-4" rel="noopener noreferrer">
          {link[1]}
        </a>
      );
    return <Fragment key={i}>{part}</Fragment>;
  });
}
