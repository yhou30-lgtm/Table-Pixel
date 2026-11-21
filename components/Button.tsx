import Link from "next/link";
import type { ReactNode } from "react";

type Props = { href: string; children: ReactNode; variant?: "primary" | "secondary" | "light"; className?: string };

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300";
const styles = {
  primary: "bg-charcoal text-cream hover:bg-olive-deep",
  secondary: "border border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-cream",
  light: "bg-cream text-charcoal hover:bg-white",
};

export default function Button({ href, children, variant = "primary", className = "" }: Props) {
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
