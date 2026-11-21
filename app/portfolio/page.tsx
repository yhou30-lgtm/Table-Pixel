import type { Metadata } from "next";
import { Info } from "lucide-react";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import BrowserMockup from "@/components/BrowserMockup";
import { CONCEPTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Three fictional concept websites from Table & Pixel: a modern Italian restaurant, a contemporary Japanese restaurant and a neighborhood café.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="container-page pb-6 pt-16 sm:pt-24">
        <p className="eyebrow">Portfolio</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-tight sm:text-6xl">Three ideas for three kinds of restaurant.</h1>
        <div className="mt-8 flex max-w-2xl gap-3 rounded-xl border border-olive-deep/30 bg-white p-5 text-sm leading-relaxed">
          <Info size={20} className="mt-0.5 shrink-0 text-olive-deep" aria-hidden />
          <p>
            <strong>Concept projects.</strong> Every restaurant below is fictional, and these designs were made to show our approach. They are not work for real clients.
          </p>
        </div>
      </section>

      <div className="container-page section !pt-14 space-y-24 sm:space-y-32">
        {CONCEPTS.map((c, i) => (
          <article key={c.slug} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <Reveal className={i % 2 ? "md:order-2" : ""}>
              <BrowserMockup concept={c} />
            </Reveal>
            <Reveal delay={100}>
              <p className="eyebrow">Concept project · {c.kind}</p>
              <h2 className="mt-3 text-4xl">{c.name}</h2>
              <p className="mt-4 text-lg leading-relaxed text-charcoal/75">{c.blurb}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {c.notes.map((n) => (
                  <li key={n} className="border-t border-charcoal/15 pt-2">
                    {n}
                  </li>
                ))}
              </ul>
            </Reveal>
          </article>
        ))}
      </div>

      <section className="bg-charcoal text-cream">
        <div className="container-page section text-center">
          <h2 className="mx-auto max-w-xl text-4xl leading-tight">Want a design like one of these for your restaurant?</h2>
          <div className="mt-8 flex justify-center">
            <Button href="/contact/" variant="light">
              Get a Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
