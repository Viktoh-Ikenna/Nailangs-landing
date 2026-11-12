import type { Platform } from "@/content/site";
import { PlatformIcon } from "./PlatformIcon";

/** The store link for a platform, or a quiet "Coming soon" until the listing is live. */
export function StoreButton({ platform, compact = false }: { platform: Platform; compact?: boolean }) {
  const size = compact ? "px-4 py-2.5 text-sm" : "px-6 py-3.5";
  if (!platform.store.href) {
    return (
      <span
        className={`inline-flex items-center gap-2 rounded-full border border-dashed border-ink/25 font-semibold text-ink-soft ${size}`}
      >
        <span className="size-1.5 animate-pulse rounded-full bg-ember" />
        Coming soon
      </span>
    );
  }
  return (
    <a
      href={platform.store.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`focus-ring inline-flex items-center gap-2 rounded-full bg-ink font-semibold text-paper transition-all hover:-translate-y-0.5 hover:bg-forest ${size}`}
    >
      <PlatformIcon id={platform.id} className="size-4" />
      {platform.store.label}
    </a>
  );
}
