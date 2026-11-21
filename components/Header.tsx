"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const all = [...NAV, { href: "/contact/", label: "Contact" }];

  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-cream/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-tight" onClick={() => setOpen(false)}>
          {SITE.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={isActive(n.href) ? "page" : undefined}
              className={`text-sm transition-colors hover:text-olive-deep ${isActive(n.href) ? "text-olive-deep underline underline-offset-8" : "text-charcoal/80"}`}
            >
              {n.label}
            </Link>
          ))}
          <Link href="/contact/" className="rounded-full bg-charcoal px-5 py-2 text-sm text-cream transition-colors hover:bg-olive-deep">
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-charcoal/10 bg-cream md:hidden">
          <ul className="container-page flex flex-col py-3">
            {all.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(n.href) ? "page" : undefined}
                  className={`block py-3 font-serif text-2xl ${isActive(n.href) ? "text-olive-deep" : ""}`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
