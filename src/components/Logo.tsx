import { asset } from "@/lib/asset";
import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="focus-ring group inline-flex items-center gap-2.5 rounded-xl" aria-label="Nailangs home">
      <Image
        src={asset("/images/nailangs-icon.png")}
        alt=""
        width={40}
        height={40}
        priority
        className="size-10 rounded-[11px] shadow-sm transition-transform duration-500 group-hover:-rotate-6"
      />
      <span className={`font-display text-xl font-bold tracking-tight ${light ? "text-paper" : "text-ink"}`}>
        Nailangs
      </span>
    </Link>
  );
}
