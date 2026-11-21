import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export default function Footer() {
  const all = [...NAV, { href: "/contact/", label: "Contact" }];
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl">{SITE.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/75">
            Modern websites for independent restaurants in the United States.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow !text-olive-soft">Pages</p>
          <ul className="mt-4 space-y-2 text-sm">
            {all.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-cream/80 transition-colors hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="eyebrow !text-olive-soft">Start a project</p>
          <p className="mt-4 text-sm leading-relaxed text-cream/75">Tell us about your restaurant and we will reply with next steps.</p>
          <Link href="/contact/" className="mt-4 inline-block text-sm underline underline-offset-4 hover:text-white">
            Get a free consultation
          </Link>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <p className="container-page py-5 text-xs text-cream/60">
          © {new Date().getFullYear()} {SITE.name}. All portfolio projects shown are fictional concepts.
        </p>
      </div>
    </footer>
  );
}
