"use client";

import { useState } from "react";
import { HeartHandshake, ShieldCheck, SearchCheck, Play } from "lucide-react";

const YOUTUBE_ID = "Q2116h_ERHY";

const reasons = [
  {
    icon: HeartHandshake,
    title: "SECP-Licensed Advisory",
    body: "Professional financial guidance delivered within a regulated and responsible advisory framework.",
  },
  {
    icon: ShieldCheck,
    title: "Shariah-Compliant Investing",
    body: "Every investment opportunity is evaluated against recognised Shariah screening criteria, ensuring that your portfolio remains aligned with your values.",
  },
  {
    icon: SearchCheck,
    title: "Research-Driven Guidance",
    body: "Investment decisions supported by disciplined market research, company analysis and responsible risk assessment..",
  },
];

export default function WhyChooseUs() {
  // Load the actual YouTube iframe only after a click. Google's
  // embed sets third-party cookies as soon as the iframe loads
  // (flagged in Chrome DevTools' Issues panel and dinged by
  // Lighthouse), and it also ships a lot of JS on every page view
  // whether or not the visitor ever plays the video. A thumbnail
  // facade avoids both — full video only loads on real intent.
  const [playing, setPlaying] = useState(false);

  return (
    <div className="bg-[#FFF7E9]/95">
      <section className="max-w-content mx-auto px-6 md:px-10 py-24 md:py-24">
        <div className="">
          <p className="case-index font-display text-ink text-lg mb-4">Why Choose Us</p>
          <h2 className="font-display text-3xl md:text-5xl text-ink leading-tight mb-6">
            Why investors <br /> choose <span className="text-gradient-gold">Stockifyy</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 mt-12 items-center">
          {/* YouTube embed — thumbnail facade until clicked (see note above) */}
          <div className="relative aspect-video w-full overflow-hidden rounded-[20px] shadow-xl bg-ink">
            {playing ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1`}
                title="Why Choose Stockifyy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="Play video: Why Choose Stockifyy"
                className="group absolute inset-0 w-full h-full"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- external YouTube thumbnail, not a local/optimizable asset */}
                <img
                  src={`https://i.ytimg.com/vi/${YOUTUBE_ID}/hqdefault.jpg`}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-gold to-goldDeep text-white shadow-lg group-hover:scale-105 transition-transform">
                    <Play className="size-6 ml-0.5" fill="currentColor" />
                  </span>
                </span>
              </button>
            )}
          </div>

          <div className="space-y-8">
            {reasons.map((r) => (
              <div key={r.title} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-gold to-goldDeep text-white shadow-sm">
                  <r.icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-ink mb-1">{r.title}</h3>
                  <p className="font-sans text-sm text-slate leading-relaxed">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
