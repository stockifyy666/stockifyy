export default function ContactSection() {
  const services = [
    "One on One Advisory",
    "Corporate Advisory",
    "Assets Under Advisement",
    "Wealth Planning",
    "Trade Alert",
    "Learning Portal",
    "Webinars",
    "Taxation Services",
    "Stockifyy Exclusive Premium Services",
  ];

  return (
    <section id="contact" className="bg-cream text-ink py-24 md:py-24 ">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16">
        <div>
          <p className="case-index text-ink font-display text-lg mb-4">
            Get in Touch
          </p>

          <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6 text-ink">
            Every conversation begins in{" "}
            <span className="text-gradient-gold">confidence.</span>
          </h2>

          <p className="font-sans text-slate leading-relaxed max-w-md">
            Tell us briefly about the situation. A partner will respond
            directly, typically within one business day, and always under
            confidentiality.
          </p>
        </div>

        <form className="space-y-5">
          {/* Full Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full rounded-full bg-transparent border border-ink/25 px-5 py-3 font-sans text-sm text-ink placeholder:text-ink/40 focus:border-gold outline-none transition-colors"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full rounded-full bg-transparent border border-ink/25 px-5 py-3 font-sans text-sm text-ink placeholder:text-ink/40 focus:border-gold outline-none transition-colors"
          />

          {/* Phone Number */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full rounded-full bg-transparent border border-ink/25 px-5 py-3 font-sans text-sm text-ink placeholder:text-ink/40 focus:border-gold outline-none transition-colors"
          />

          {/* Address */}
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="w-full rounded-full bg-transparent border border-ink/25 px-5 py-3 font-sans text-sm text-ink placeholder:text-ink/40 focus:border-gold outline-none transition-colors"
          />

          {/* Service Dropdown */}
          <div className="relative">
            <select
              name="service"
              defaultValue=""
              aria-label="Select a Service"
              className="w-full appearance-none rounded-full bg-transparent border border-ink/25 px-5 py-3 font-sans text-sm text-ink focus:border-gold outline-none transition-colors cursor-pointer"
            >
              <option value="" disabled className="text-ink/40">
                Select a Service
              </option>
              {services.map((service) => (
                <option key={service} value={service} className="text-ink">
                  {service}
                </option>
              ))}
            </select>
            {/* Dropdown arrow */}
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

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="w-full rounded-2xl bg-transparent border border-ink/25 px-5 py-3 font-sans text-sm text-ink placeholder:text-ink/40 focus:border-gold outline-none transition-colors resize-none"
          />

          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-gold to-goldDeep text-white font-display text-sm font-medium px-7 py-3.5 shadow-lg hover:opacity-90 transition-opacity"
          >
            Send confidentially
          </button>
        </form>
      </div>
    </section>
  );
}
