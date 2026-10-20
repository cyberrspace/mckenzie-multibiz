import Image from "next/image";
import { brand, site } from "@/lib/site";

type WordmarkProps = {
  tone?: "light" | "dark";
  /** Load the logo immediately (use for the header, which is above the fold). */
  eager?: boolean;
  className?: string;
};

export default function Wordmark({
  tone = "light",
  eager = false,
  className = "",
}: WordmarkProps) {
  const nameColor = tone === "light" ? "text-ink" : "text-white";
  const subColor = tone === "light" ? "text-muted" : "text-white/50";

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src={brand.mark.src}
        width={brand.mark.width}
        height={brand.mark.height}
        alt=""
        aria-hidden="true"
        sizes="64px"
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className="h-8 w-auto shrink-0 sm:h-9"
      />
      <span className="flex items-baseline gap-2">
        <span
          className={`font-display text-[20px] font-bold tracking-[-0.035em] ${nameColor}`}
        >
          {site.shortName}
        </span>
        <span className={`label hidden sm:block ${subColor}`}>{site.suffix}</span>
      </span>
    </span>
  );
}
