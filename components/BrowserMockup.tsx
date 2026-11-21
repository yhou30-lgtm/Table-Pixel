import type { Concept } from "@/lib/site";

/** Draws a small website preview in pure CSS, so no photo files are needed. Swap for real screenshots later. */
export default function BrowserMockup({ concept, className = "" }: { concept: Concept; className?: string }) {
  const { bg, ink, accent, tile } = concept.palette;
  return (
    <div
      role="img"
      aria-label={`Concept website preview for ${concept.name}, a ${concept.kind.toLowerCase()}`}
      className={`overflow-hidden rounded-xl border border-charcoal/15 shadow-[0_20px_50px_-25px_rgba(25,25,25,0.45)] ${className}`}
      style={{ background: bg }}
    >
      <div className="flex items-center gap-1.5 border-b px-3 py-2" style={{ borderColor: `${ink}22` }}>
        <span className="h-2 w-2 rounded-full" style={{ background: `${ink}33` }} />
        <span className="h-2 w-2 rounded-full" style={{ background: `${ink}33` }} />
        <span className="h-2 w-2 rounded-full" style={{ background: `${ink}33` }} />
      </div>
      <div className="flex items-center justify-between px-5 py-3" style={{ color: ink }}>
        <span className="font-serif text-sm">{concept.name}</span>
        <span className="flex gap-3 text-[9px] uppercase tracking-widest opacity-70">
          <span>Menu</span>
          <span>Visit</span>
          <span style={{ color: accent }}>Reserve</span>
        </span>
      </div>
      <div className="px-5 pb-4 pt-6 sm:pt-8" style={{ color: ink }}>
        <p className="max-w-[16rem] font-serif text-2xl leading-tight sm:text-3xl">{concept.headline}</p>
        <span className="mt-4 inline-block rounded-full px-3 py-1 text-[9px] uppercase tracking-widest" style={{ background: accent, color: bg }}>
          Reserve a table
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 px-5 pb-5 pt-2">
        {tile.map((c, i) => (
          <div key={i} className="aspect-[4/5] rounded-md" style={{ background: c }} />
        ))}
      </div>
    </div>
  );
}
