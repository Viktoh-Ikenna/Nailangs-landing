import type { Platform } from "@/content/site";

/** Simple line marks for each platform (generic shapes, not the vendors' logos). */
export function PlatformIcon({ id, className = "size-7" }: { id: Platform["id"]; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (id) {
    case "android":
      return (
        <svg {...common}>
          <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
          <path d="M10.5 18.5h3" />
        </svg>
      );
    case "ios":
      return (
        <svg {...common}>
          <rect x="3" y="3.5" width="12" height="17" rx="2" />
          <rect x="15.5" y="7.5" width="6" height="12" rx="1.6" />
        </svg>
      );
    case "mac":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="11" rx="1.6" />
          <path d="M2 19h20M9 15l-.5 4M15 15l.5 4" />
        </svg>
      );
    case "windows":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="12" rx="1.6" />
          <path d="M8 20h8M12 16v4" />
          <path d="M7 8h2M11 8h2M15 8h2M8 11h8" />
        </svg>
      );
  }
}
