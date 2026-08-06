import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-cream min-h-[70vh] flex items-center">
      <section className="max-w-content mx-auto px-6 md:px-10 py-12 text-center w-full">
        {/* Gold decorative number */}
        <p
          className="font-display font-black select-none leading-none mb-6"
          style={{
            fontSize: "clamp(6rem, 20vw, 12rem)",
            background: "linear-gradient(135deg, #FEA500 0%, #7C5200 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            opacity: 0.18,
          }}
          aria-hidden="true"
        >
          404
        </p>

        <p className="case-index text-gold text-sm uppercase tracking-widest mb-4 -mt-10 md:-mt-16">
          Page Not Found
        </p>

        <h1 className="font-display text-4xl md:text-5xl text-ink mb-5 leading-tight">
          This page isn&apos;t on file.
        </h1>

        <p className="font-sans text-slate max-w-md mx-auto mb-10 leading-relaxed">
          The page you&apos;re looking for may have moved, been renamed, or no
          longer exists. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-block rounded-full bg-gradient-to-r from-gold to-goldDeep text-white font-display text-sm font-medium px-7 py-3.5 shadow-lg hover:opacity-90 transition-opacity"
          >
            Return Home
          </Link>
          <Link
            href="/services"
            className="inline-block rounded-full border border-gold/40 text-ink font-display text-sm font-medium px-7 py-3.5 hover:border-gold hover:text-goldDeep transition-colors"
          >
            Explore Services
          </Link>
        </div>
      </section>
    </div>
  );
}
