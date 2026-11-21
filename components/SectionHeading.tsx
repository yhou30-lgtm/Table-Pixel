export default function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow?: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className={`eyebrow ${light ? "!text-olive-soft" : ""}`}>{eyebrow}</p>}
      <h2 className={`mt-3 text-3xl leading-tight sm:text-4xl ${light ? "text-cream" : ""}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-cream/80" : "text-charcoal/75"}`}>{text}</p>}
    </div>
  );
}
