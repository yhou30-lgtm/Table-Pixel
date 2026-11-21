import type { Concept } from "@/lib/site";
import BrowserMockup from "./BrowserMockup";

export default function ConceptCard({ concept }: { concept: Concept }) {
  return (
    <article className="group">
      <div className="transition-transform duration-500 group-hover:-translate-y-1">
        <BrowserMockup concept={concept} />
      </div>
      <p className="eyebrow mt-6">Concept project · {concept.kind}</p>
      <h3 className="mt-2 text-2xl">{concept.name}</h3>
      <p className="mt-3 text-charcoal/75">{concept.blurb}</p>
    </article>
  );
}
