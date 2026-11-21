import type { Metadata } from "next";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import PackageCard from "@/components/PackageCard";
import { ADDONS, PACKAGES, PRICING_NOTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for restaurant websites: Starter $299, Professional $399, Premium $499, plus optional extras.",
};

export default function PricingPage() {
  return (
    <>
      <section className="container-page pb-6 pt-16 sm:pt-24">
        <p className="eyebrow">Pricing</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-tight sm:text-6xl">Prices you can read before you call.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/75">
          Three packages at $299, $399 and $499. Anything beyond them is listed below, so there are no surprises.
        </p>
      </section>

      <section className="container-page section !pt-12">
        <div className="grid gap-6 md:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <PackageCard pkg={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <SectionHeading eyebrow="Optional services" title="Add only what you need" text="These are extras on top of any package." />
          </Reveal>
          <Reveal delay={100}>
            <dl className="divide-y divide-charcoal/15 border-y border-charcoal/15">
              {ADDONS.map((a) => (
                <div key={a.name} className="grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:gap-6">
                  <div>
                    <dt className="font-serif text-xl">{a.name}</dt>
                    <dd className="mt-1 text-sm text-charcoal/70">{a.note}</dd>
                  </div>
                  <dd className="font-medium sm:text-right">{a.price}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow="Good to know" title="Additional costs" />
            <ul className="mt-8 space-y-3 leading-relaxed text-charcoal/80">
              {PRICING_NOTES.map((n) => (
                <li key={n} className="border-t border-charcoal/15 pt-3">
                  {n}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/contact/">Get a Free Consultation</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
