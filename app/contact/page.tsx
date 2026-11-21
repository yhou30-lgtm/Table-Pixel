import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Ask Table & Pixel for a free consultation about a new website for your restaurant.",
};

export default function ContactPage() {
  return (
    <section className="container-page grid gap-12 pb-24 pt-16 sm:pt-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div>
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 text-5xl leading-tight">Get a free consultation.</h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/75">
          Tell us about your restaurant and what you would like your website to do. The first conversation is free.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
