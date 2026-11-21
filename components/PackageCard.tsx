import Link from "next/link";
import { Check } from "lucide-react";
import type { Pkg } from "@/lib/site";

export default function PackageCard({ pkg, showList = true }: { pkg: Pkg; showList?: boolean }) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl p-7 sm:p-8 ${pkg.featured ? "bg-charcoal text-cream" : "border border-charcoal/15 bg-white"}`}
    >
      <div className="flex items-baseline justify-between">
        <h3 className="text-2xl">{pkg.name}</h3>
        {pkg.featured && <span className="rounded-full bg-olive-soft px-3 py-1 text-xs font-medium text-charcoal">Most chosen</span>}
      </div>
      <p className="mt-5 font-serif text-5xl">${pkg.price}</p>
      <p className={`mt-4 text-sm leading-relaxed ${pkg.featured ? "text-cream/80" : "text-charcoal/75"}`}>{pkg.blurb}</p>
      {showList && (
        <ul className="mt-6 space-y-3 text-sm">
          {pkg.includes.map((item) => (
            <li key={item} className="flex gap-3">
              <Check size={18} className={`mt-0.5 shrink-0 ${pkg.featured ? "text-olive-soft" : "text-olive-deep"}`} aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      <Link
        href={`/contact/?package=${pkg.id}`}
        className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 ${showList ? "mt-8" : "mt-6"} ${
          pkg.featured ? "bg-cream text-charcoal hover:bg-white" : "bg-charcoal text-cream hover:bg-olive-deep"
        }`}
      >
        Choose {pkg.name}
      </Link>
    </article>
  );
}
