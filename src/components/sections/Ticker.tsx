"use client";

/**
 * components/home/Ticker.tsx
 * Light-mode PSX ticker tape — gold accent on cream background.
 */

const TICKER_ITEMS = [
  { label: "KSE-100", change: "+2.4%",  up: true  },
  { label: "OGDC",    change: "+1.8%",  up: true  },
  { label: "HBL",     change: "+0.9%",  up: true  },
  { label: "PSO",     change: "-0.3%",  up: false },
  { label: "LUCK",    change: "+3.1%",  up: true  },
  { label: "MCB",     change: "+1.2%",  up: true  },
  { label: "ENGRO",   change: "+2.7%",  up: true  },
  { label: "UBL",     change: "-0.6%",  up: false },
  { label: "BAFL",    change: "+1.5%",  up: true  },
  { label: "FFBL",    change: "+0.8%",  up: true  },
  { label: "HUBC",    change: "-0.4%",  up: false },
  { label: "PPL",     change: "+1.1%",  up: true  },
  { label: "FCCL",    change: "+0.7%",  up: true  },
  { label: "EFERT",   change: "-0.2%",  up: false },
  { label: "MARI",    change: "+2.0%",  up: true  },
];

const ITEMS = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

export function Ticker() {
  return (
    <div
      className="relative overflow-hidden border-b border-t"
      style={{
        background: "linear-gradient(90deg, #fffdf7, #fef9ec, #fffdf7)",
        borderColor: "rgba(254,165,0,0.2)",
      }}
      role="marquee"
      aria-label="Live Pakistan Stock Exchange ticker"
    >
      {/* left fade */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16"
        style={{ background: "linear-gradient(to right, #fffdf7, transparent)" }}
      />
      {/* right fade */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16"
        style={{ background: "linear-gradient(to left, #fffdf7, transparent)" }}
      />

      {/* scrolling strip */}
      <div
        className="flex w-max py-2.5"
        style={{ animation: "ticker-scroll 55s linear infinite" }}
      >
        {ITEMS.map((item, i) => (
          <span
            key={i}
            className="mx-5 inline-flex items-center gap-2 whitespace-nowrap font-mono text-[11px] font-semibold tracking-wider"
          >
            {/* label */}
            <span style={{ color: "#7C5200" }}>{item.label}</span>

            {/* arrow + change */}
            <span style={{ color: item.up ? "#16a34a" : "#dc2626" }}>
              {item.up ? "▲" : "▼"} {item.change}
            </span>

            {/* dot separator */}
            <span style={{ color: "rgba(254,165,0,0.4)" }}>·</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

      `}</style>
    </div>
  );
}