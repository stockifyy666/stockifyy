import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Users, Clock, Info } from "lucide-react";
import ServiceCard from "@/components/services/ServiceCard";
import { services, getServiceBySlug } from "@/content/services";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return { title: service.title, description: service.metaDescription };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug);

  return (
    <div className="bg-cream">
      {/* Full-bleed hero — image as background, text overlaid */}
      <div className="relative h-[60vh] min-h-[460px] max-h-[620px] w-full overflow-hidden">
        <Image
          src={service.image1}
          alt={service.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />

        <Link
          href="/services"
          className="absolute left-6 top-6 md:left-10 md:top-8 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink hover:border-gold hover:text-goldDeep transition-colors"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          All services
        </Link>

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <span className="inline-flex items-start gap-1.5 rounded-2xl bg-gold px-4 py-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide text-ink max-w-[85vw] sm:max-w-md text-center leading-snug">
            <Icon className="size-3 sm:size-3.5 shrink-0 mt-0.5" aria-hidden="true" />
            <span>{service.tagline}</span>
          </span>

          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl text-white mt-4 max-w-3xl leading-tight px-2 sm:px-0">
            {service.title}
          </h1>

          <p className="font-sans text-white/80 border-y border-gold/50 py-3 mt-4 max-w-xl leading-relaxed text-sm sm:text-base px-2 sm:px-0">
            {service.summary}
          </p>
        </div>
      </div>

      <article className="max-w-content mx-auto px-6 md:px-10 py-10 md:py-14">
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 items-start">

          {/* Main content */}
          <div className="md:col-span-2 space-y-5">
            {service.intro.map((para, i) => (
              <p key={i} className="font-sans text-slate leading-relaxed text-lg">
                {para}
              </p>
            ))}

            <div className="relative aspect-[16/9] w-full mt-2 rounded-2xl overflow-hidden">
              <Image
                src={service.image2}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 720px, 100vw"
              />
            </div>

            {/* Investment Horizons (Wealth Planning) */}
            {service.horizons && service.horizons.length > 0 && (
              <div className="mt-10">
                <div className="flex items-center gap-2 mb-5">
                  <Clock className="size-4 text-gold" />
                  <h2 className="font-display text-xl font-bold text-ink">Choose Your Investment Horizon</h2>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {service.horizons.map((h) => (
                    <div
                      key={h.label}
                      className="rounded-2xl border border-gold/30 bg-white p-5"
                    >
                      <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-goldDeep mb-3">
                        {h.label}
                      </span>
                      <p className="font-display text-sm font-semibold text-ink mb-1">{h.duration}</p>
                      <p className="font-sans text-xs text-slate leading-relaxed">{h.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Who Is It For */}
            {service.whoIsItFor && service.whoIsItFor.length > 0 && (
              <div className="mt-8 rounded-2xl border border-line bg-white p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="size-4 text-gold" />
                  <h2 className="font-display text-base font-bold text-ink">Who Is It For?</h2>
                </div>
                <ul className="space-y-2">
                  {service.whoIsItFor.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="size-4 text-gold shrink-0 mt-0.5" />
                      <span className="font-sans text-sm text-slate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Disclaimer */}
            {service.disclaimer && (
              <div className="mt-6 flex gap-3 rounded-xl border border-gold/20 bg-gold/5 p-4">
                <Info className="size-4 text-gold shrink-0 mt-0.5" />
                <p className="font-sans text-xs text-slate leading-relaxed">{service.disclaimer}</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="rounded-2xl border border-line bg-white p-7 h-fit">
            <p className="font-sans text-xs uppercase tracking-widest text-gold mb-5">
              What this covers
            </p>
            <ul className="space-y-5">
              {service.features.map((f) => (
                <li key={f.title} className="flex gap-3">
                  <Check className="size-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-display text-sm font-semibold text-ink">{f.title}</p>
                    <p className="font-sans text-xs text-slate mt-1 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="/#contact"
              className="block text-center rounded-full bg-gradient-to-r from-gold to-goldDeep text-white font-display text-sm font-medium px-5 py-3 mt-8 shadow-lg hover:opacity-90 transition-opacity"
            >
              Discuss this service
            </Link>
          </aside>
        </div>

        {/* Membership Plans (Stockifyy Membership) */}
        {service.plans && service.plans.length > 0 && (
          <div className="mt-10">
            <p className="case-index text-gold text-sm mb-2">Membership Tiers</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-8">
              Choose the Plan That Fits You
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {service.plans.map((plan, i) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl border p-7 flex flex-col ${
                    i === 1
                      ? "border-gold bg-gradient-to-b from-gold/10 to-transparent"
                      : "border-line bg-white"
                  }`}
                >
                  {i === 1 && (
                    <span className="self-start mb-3 inline-block rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-lg font-bold text-ink">{plan.name}</h3>
                  <p className="font-sans text-xs text-goldDeep font-semibold mt-1 mb-3">{plan.tagline}</p>
                  <p className="font-sans text-sm text-slate leading-relaxed mb-5">{plan.description}</p>
                  <ul className="space-y-2 mt-auto">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="size-3.5 text-gold shrink-0 mt-0.5" />
                        <span className="font-sans text-xs text-slate">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/#contact"
                    className={`mt-6 block text-center rounded-full text-sm font-display font-medium px-5 py-3 transition-opacity hover:opacity-90 ${
                      i === 1
                        ? "bg-gradient-to-r from-gold to-goldDeep text-white shadow-lg"
                        : "border border-gold/50 text-goldDeep hover:bg-gold/5"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related services */}
        <div className="mt-14 pt-8 border-t border-line">
          <p className="case-index text-gold text-sm mb-6">Explore other services</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
