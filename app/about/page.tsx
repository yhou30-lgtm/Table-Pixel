import type { Metadata } from "next";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Table & Pixel is a small web design studio focused on helping independent restaurants improve their digital presence.",
};

const VALUES = [
  ["Independent first", "We work for independent restaurants, where the website often does the job of a front door."],
  ["Made to be found", "A good site answers the questions people ask before they visit: where, when, what to eat, how to book."],
  ["Honest and simple", "Clear scope, clear prices, and no extra features you did not ask for."],
];

export default function AboutPage() {
  return (
    <>
      <section className="container-page pb-6 pt-16 sm:pt-24">
        <p className="eyebrow">About</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-tight sm:text-6xl">A small studio for independent restaurants.</h1>
      </section>

      <section className="container-page section !pt-10">
        <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-charcoal/80">
          <Reveal>
            <p>
              Table & Pixel is a web design studio focused on one thing: helping independent restaurants in the United States improve their digital presence.
            </p>
          </Reveal>
          <Reveal>
            <p>
              For most restaurants, the first visit is online. People search, look at the menu on their phone, check the hours and decide in a minute. We build websites that make that minute easy.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Our work is modern and minimal, with strong imagery, clear type and generous space, so the food and the place can speak for themselves.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page grid gap-10 md:grid-cols-3">
          {VALUES.map(([t, d], i) => (
            <Reveal key={t} delay={i * 90}>
              <div className="border-t border-charcoal/20 pt-6">
                <h2 className="text-2xl">{t}</h2>
                <p className="mt-3 leading-relaxed text-charcoal/75">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-cream">
        <div className="container-page section text-center">
          <h2 className="mx-auto max-w-xl text-4xl leading-tight">Let us talk about your restaurant.</h2>
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
