import type { Metadata } from "next";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import PackageCard from "@/components/PackageCard";
import { PACKAGES, SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Restaurant website packages from Table & Pixel: Starter, Professional and Premium, with clear lists of what is included.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-page pb-6 pt-16 sm:pt-24">
        <p className="eyebrow">Services</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-tight sm:text-6xl">Three packages, one clear scope each.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/75">
          Pick the package that fits your restaurant. Each one lists exactly what is included, so you know what you are getting before we start.
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
        <p className="mt-8 text-sm text-charcoal/65">Optional extras and what is not included are on the pricing page.</p>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="What every site gets" title="The same care in every package" />
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <Reveal key={s.title}>
                <div className="border-t border-charcoal/20 pt-6">
                  <h3 className="text-2xl">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-charcoal/75">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="How it works" title="From first conversation to launch" />
          </Reveal>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              ["Talk", "You tell us about your restaurant, your menu and what you want the site to do."],
              ["Design", "We design and build your site, and you review it before it goes live."],
              ["Launch", "We publish it and hand over what you need to keep it running."],
            ].map(([t, d], i) => (
              <li key={t}>
                <Reveal delay={i * 90}>
                  <p className="font-serif text-4xl text-olive">{i + 1}</p>
                  <h3 className="mt-2 text-2xl">{t}</h3>
                  <p className="mt-2 leading-relaxed text-charcoal/75">{d}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          <div className="mt-14">
            <Button href="/contact/">Get a Free Consultation</Button>
          </div>
        </div>
      </section>
    </>
  );
}
