import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ConceptCard from "@/components/ConceptCard";
import BrowserMockup from "@/components/BrowserMockup";
import PackageCard from "@/components/PackageCard";
import { CONCEPTS, PACKAGES, SERVICES, SITE } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="overflow-hidden">
        <div className="container-page grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="eyebrow">{SITE.tagline}</p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">Your food deserves a better website.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/75">
              We help independent restaurants build beautiful, modern websites that make it easier for customers to discover, explore, and visit them.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact/">Get a Free Consultation</Button>
              <Button href="/portfolio/" variant="secondary">
                View Our Work
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <BrowserMockup concept={CONCEPTS[0]} className="relative z-10 w-[88%]" />
            <BrowserMockup concept={CONCEPTS[1]} className="relative z-20 -mt-24 ml-auto w-[62%] sm:-mt-32" />
            <p className="mt-4 text-xs text-charcoal/60">Concept designs for fictional restaurants.</p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Featured work"
              title="Three concept websites"
              text="These are fictional concept projects we designed to show our approach. They are not work for real clients."
            />
          </Reveal>
          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
            {CONCEPTS.map((c, i) => (
              <Reveal key={c.slug} delay={i * 90}>
                <ConceptCard concept={c} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <Link href="/portfolio/" className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 hover:text-olive-deep">
              See all concepts <ArrowRight size={16} aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Services" title="Everything a restaurant site needs, nothing it does not" />
          </Reveal>
          <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className="border-t border-charcoal/20 pt-6">
                  <h3 className="text-2xl">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-charcoal/75">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <Link href="/services/" className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 hover:text-olive-deep">
              Explore our services <ArrowRight size={16} aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Pricing" title="Clear prices, from $299" text="Three packages. The price is on the page, so there is nothing to guess." />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PACKAGES.map((p, i) => (
              <Reveal key={p.id} delay={i * 90}>
                <PackageCard pkg={p} showList={false} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link href="/pricing/" className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 hover:text-olive-deep">
              Compare packages in detail <ArrowRight size={16} aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal text-cream">
        <div className="container-page section text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-4xl leading-tight sm:text-5xl">Ready for a website that does your food justice?</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-cream/80">Tell us about your restaurant. The first conversation is free.</p>
            <div className="mt-9 flex justify-center">
              <Button href="/contact/" variant="light">
                Get a Free Consultation
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
