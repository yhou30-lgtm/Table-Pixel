"use client";
import { useEffect, useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { FORM_ENDPOINT, PACKAGES } from "@/lib/site";

const SERVICE_OPTIONS = [
  ...PACKAGES.map((p) => ({ id: p.id, label: `${p.name} package ($${p.price})` })),
  { id: "copywriting", label: "Copywriting" },
  { id: "care", label: "Monthly care plan" },
  { id: "unsure", label: "Not sure yet" },
];

type Values = {
  restaurant: string;
  name: string;
  email: string;
  website: string;
  services: string[];
  message: string;
};
type Errors = Partial<Record<keyof Values, string>>;

const EMPTY: Values = { restaurant: "", name: "", email: "", website: "", services: [], message: "" };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.restaurant.trim()) e.restaurant = "Please enter your restaurant name.";
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "That email address does not look right.";
  if (v.website.trim()) {
    try {
      const u = new URL(/^https?:\/\//i.test(v.website.trim()) ? v.website.trim() : `https://${v.website.trim()}`);
      if (!u.hostname.includes(".")) throw new Error("bad");
    } catch {
      e.website = "That web address does not look right. Leave it empty if you do not have one.";
    }
  }
  if (v.services.length === 0) e.services = "Choose at least one option.";
  if (v.message.trim().length < 10) e.message = "Please tell us a little about your project (at least 10 characters).";
  return e;
}

const field = "mt-2 w-full rounded-lg border bg-white px-4 py-3 text-base transition-colors focus:border-olive-deep focus:outline-none";

export default function ContactForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "failed">("idle");

  // Pre-select a package when arriving from the pricing cards (?package=professional).
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("package");
    if (p && SERVICE_OPTIONS.some((o) => o.id === p)) setValues((v) => ({ ...v, services: [p] }));
  }, []);

  const set = <K extends keyof Values>(k: K, val: Values[K]) => {
    setValues((v) => ({ ...v, [k]: val }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      document.getElementById(first === "services" ? "services-group" : `f-${first}`)?.focus();
      return;
    }
    if (!FORM_ENDPOINT) {
      // No form service is connected yet, so nothing is sent.
      setStatus("done");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, services: values.services.join(", ") }),
      });
      setStatus(res.ok ? "done" : "failed");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="rounded-2xl border border-olive-deep/30 bg-white p-8 sm:p-10">
        <CheckCircle2 className="text-olive-deep" size={36} aria-hidden />
        <h2 className="mt-5 text-3xl">{FORM_ENDPOINT ? "Thank you. Your inquiry is on its way." : "Your form is complete."}</h2>
        {FORM_ENDPOINT ? (
          <p className="mt-3 text-lg text-charcoal/75">
            We have received your message about {values.restaurant} and will reply to {values.email}.
          </p>
        ) : (
          <p className="mt-3 text-lg text-charcoal/75">
            This form is not connected to an email service yet, so your message was not sent. Nothing you typed has left this page.
          </p>
        )}
        <button
          type="button"
          onClick={() => {
            setValues(EMPTY);
            setStatus("idle");
          }}
          className="mt-6 text-sm underline underline-offset-4 hover:text-olive-deep"
        >
          Fill in another form
        </button>
      </div>
    );
  }

  const errCls = (k: keyof Values) => (errors[k] ? "border-red-700" : "border-charcoal/25");
  const err = (k: keyof Values) =>
    errors[k] ? (
      <p id={`e-${k}`} className="mt-2 text-sm text-red-800">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="f-restaurant" className="text-sm font-medium">
            Restaurant name
          </label>
          <input id="f-restaurant" autoComplete="organization" className={`${field} ${errCls("restaurant")}`} value={values.restaurant} onChange={(e) => set("restaurant", e.target.value)} aria-invalid={!!errors.restaurant} aria-describedby={errors.restaurant ? "e-restaurant" : undefined} />
          {err("restaurant")}
        </div>
        <div>
          <label htmlFor="f-name" className="text-sm font-medium">
            Your name
          </label>
          <input id="f-name" autoComplete="name" className={`${field} ${errCls("name")}`} value={values.name} onChange={(e) => set("name", e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "e-name" : undefined} />
          {err("name")}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="f-email" className="text-sm font-medium">
            Email
          </label>
          <input id="f-email" type="email" autoComplete="email" className={`${field} ${errCls("email")}`} value={values.email} onChange={(e) => set("email", e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "e-email" : undefined} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="f-website" className="text-sm font-medium">
            Existing website <span className="font-normal text-charcoal/60">(optional)</span>
          </label>
          <input id="f-website" inputMode="url" autoComplete="url" placeholder="yourrestaurant.com" className={`${field} ${errCls("website")}`} value={values.website} onChange={(e) => set("website", e.target.value)} aria-invalid={!!errors.website} aria-describedby={errors.website ? "e-website" : undefined} />
          {err("website")}
        </div>
      </div>

      <fieldset aria-describedby={errors.services ? "e-services" : undefined}>
        <legend className="text-sm font-medium">Desired services</legend>
        <div id="services-group" tabIndex={-1} className="mt-3 grid gap-3 sm:grid-cols-2">
          {SERVICE_OPTIONS.map((o) => {
            const on = values.services.includes(o.id);
            return (
              <label key={o.id} className={`flex cursor-pointer items-center gap-3 rounded-lg border bg-white px-4 py-3 text-sm transition-colors ${on ? "border-olive-deep" : errors.services ? "border-red-700" : "border-charcoal/25"}`}>
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-olive-deep"
                  checked={on}
                  onChange={() => set("services", on ? values.services.filter((s) => s !== o.id) : [...values.services, o.id])}
                />
                {o.label}
              </label>
            );
          })}
        </div>
        {err("services")}
      </fieldset>

      <div>
        <label htmlFor="f-message" className="text-sm font-medium">
          Project description
        </label>
        <textarea id="f-message" rows={6} className={`${field} ${errCls("message")}`} value={values.message} onChange={(e) => set("message", e.target.value)} aria-invalid={!!errors.message} aria-describedby={errors.message ? "e-message" : undefined} placeholder="What kind of restaurant is it, and what should the website help you do?" />
        {err("message")}
      </div>

      {status === "failed" && (
        <p role="alert" className="text-sm text-red-800">
          Something went wrong and your message was not sent. Please try again in a moment.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-charcoal px-8 py-3 text-sm font-medium text-cream transition-colors duration-300 hover:bg-olive-deep disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send inquiry"}
      </button>
    </form>
  );
}
