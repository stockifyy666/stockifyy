"use client";

import { useState } from "react";

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzt2qmwHg9EDYCi1nXYdtNTx93CAz576usRiGMwWzquqn9T8iXhqAflOQ4g3pdVasICBg/exec";

const SERVICE_LIST = [
  "One on One Advisory",
  "Corporate Advisory",
  "Assets Under Advisement Model",
  "Wealth Planning",
  "Training & Webinars",
  "Stockifyy Membership",
  "Account Opening in PSX",
  "Taxation Services",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus("success");
      setForm({ name: "", email: "", phone: "", address: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-full bg-transparent border border-ink/25 px-5 py-3 font-sans text-sm text-ink placeholder:text-ink/40 focus:border-gold outline-none transition-colors";

  return (
    <section id="contact" className="bg-cream text-ink py-24 md:py-24">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16">
        <div>
          <p className="case-index text-ink font-display text-lg mb-4">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6 text-ink">
            Let&apos;s Start a{" "}
            <span className="text-gradient-gold">Conversation</span>
          </h2>
          <p className="font-sans text-slate leading-relaxed max-w-md">
            Tell us what you are looking for, and our team will connect you with the right
            service and guide you on the next steps.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className={inputClass}
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className={inputClass}
          />
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
            className={inputClass}
          />

          {/* Service Dropdown */}
          <div className="relative">
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              aria-label="Select a Service"
              className="w-full appearance-none rounded-full bg-transparent border border-ink/25 px-5 py-3 font-sans text-sm text-ink focus:border-gold outline-none transition-colors cursor-pointer"
            >
              <option value="" disabled>Select a Service</option>
              {SERVICE_LIST.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-ink/50">
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className="w-full rounded-2xl bg-transparent border border-ink/25 px-5 py-3 font-sans text-sm text-ink placeholder:text-ink/40 focus:border-gold outline-none transition-colors resize-none"
          />

          {/* Success message */}
          {status === "success" && (
            <p className="text-sm font-sans text-green-600 font-medium">
              ✓ Message sent successfully! We&apos;ll be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm font-sans text-red-500 font-medium">
              Something went wrong. Please try again or contact us on WhatsApp.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-gradient-to-r from-gold to-goldDeep text-white font-display text-sm font-medium px-7 py-3.5 shadow-lg hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "SUBMIT YOUR ENQUIRY"}
          </button>
        </form>
      </div>
    </section>
  );
}
