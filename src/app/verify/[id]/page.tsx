import type { Metadata } from "next";
import { getCertificateById } from "@/content/certificates";
import Link from "next/link";
import Image from "next/image";
// eslint-disable-next-line @next/next/no-page-custom-font
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ weight: ["600", "700"], subsets: ["latin"] });

type Props = { params: { id: string } };

export function generateMetadata({ params }: Props): Metadata {
  const cert = getCertificateById(params.id);
  if (!cert) return { title: "Certificate Not Found — Stockifyy" };
  return {
    title: `Certificate Verified — ${cert.name} | Stockifyy`,
    description: `Verify the certificate of ${cert.name} for ${cert.course} issued by Stockifyy.`,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-PK", {
    day: "numeric", month: "long", year: "numeric",
  });
}

export default function VerifyPage({ params }: Props) {
  const cert = getCertificateById(params.id);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12"
      style={{ background: "#FFFFFF", paddingInline: "clamp(16px, 4vw, 48px)" }}>

      <style suppressHydrationWarning>{`
        @media (max-width: 480px) {
          .cert-details-grid { display: flex !important; flex-direction: column !important; }
          .cert-details-cell { border-right: none !important; border-bottom: 1px solid rgba(201,168,76,0.2); }
          .cert-details-cell:last-child { border-bottom: none; }
          .cert-sig-row { flex-direction: column !important; gap: 20px !important; align-items: center !important; }
          .cert-sig-row > div { text-align: center !important; }
          .cert-sig-row > div > div:first-child { margin: 0 auto !important; width: 100% !important; }
        }
      `}</style>

      {cert ? (
        <>
          {/* ── CERTIFICATE ── */}
          <div className="w-full" style={{ maxWidth: "min(1100px, calc(100vw - 48px))" }}>

            {/* Outer gold border frame */}
            <div style={{
              background: "linear-gradient(135deg, #C9A84C 0%, #F0D080 40%, #C9A84C 60%, #8B6914 100%)",
              padding: 3,
              borderRadius: 0,
              boxShadow: "0 30px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(201,168,76,0.2)",
            }}>
              {/* Inner border */}
              <div style={{
                background: "#FFFFFF",
                borderRadius: 0,
                padding: 6,
              }}>
                <div style={{
                  border: "1px solid rgba(201,168,76,0.4)",
                  borderRadius: 0,
                  background: "#FFFFFF",
                  position: "relative",
                  overflow: "hidden",
                  padding: "clamp(20px, 5vw, 48px) clamp(16px, 6vw, 60px) clamp(20px, 4vw, 40px)",
                }}>

                  {/* Watermark */}
                  <div style={{
                    position: "absolute", inset: 0, display: "flex",
                    alignItems: "center", justifyContent: "center",
                    pointerEvents: "none", opacity: 0.06, zIndex: 0,
                  }}>
                    <Image src="/images/ICON.png" alt="" width={600} height={600}
                      style={{ objectFit: "contain" }} />
                  </div>

                  {/* Corner ornaments */}
                  {["top-4 left-4", "top-4 right-4 rotate-90", "bottom-4 left-4 -rotate-90", "bottom-4 right-4 rotate-180"].map((pos, i) => (
                    <svg key={i} viewBox="0 0 40 40" style={{ position: "absolute", width: 40, height: 40 }}
                      className={`absolute ${pos}`} fill="none">
                      <path d="M2,20 L2,2 L20,2" stroke="#C9A84C" strokeWidth="1.5" opacity="0.7" />
                      <path d="M2,2 L8,8" stroke="#C9A84C" strokeWidth="1" opacity="0.5" />
                    </svg>
                  ))}

                  <div style={{ position: "relative", zIndex: 1 }}>

                    {/* Gold line divider */}
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, #C9A84C)" }} />
                      <svg viewBox="0 0 20 20" width={16} height={16}>
                        <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8" fill="#C9A84C" opacity="0.8" />
                      </svg>
                      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, #C9A84C, transparent)" }} />
                    </div>

                    {/* Certificate of Completion */}
                    <div className="text-center mb-4">
                      <p style={{ fontFamily: "Georgia, serif", fontSize: "clamp(0.5rem, 1.2vw, 0.7rem)", letterSpacing: "0.3em", color: "#8B6914", textTransform: "uppercase", marginBottom: 10 }}>
                        Certificate of Completion
                      </p>
                      <p style={{ fontFamily: "Georgia, serif", fontSize: "clamp(0.65rem, 1.5vw, 0.85rem)", color: "rgba(26,18,9,0.55)", marginBottom: 16 }}>
                        This is to certify that
                      </p>
                      {/* Name */}
                      <h1 className={cormorant.className} style={{
                        fontSize: "clamp(2.5rem, 6vw, 4rem)",
                        fontWeight: 700, color: "#1A1209",
                        letterSpacing: "0.01em", lineHeight: 1.2,
                        marginBottom: 6,
                      }}>
                        {cert.name}
                      </h1>
                      {/* Underline */}
                      <div style={{ width: 200, height: 1, background: "linear-gradient(90deg, transparent, #C9A84C 30%, #C9A84C 70%, transparent)", margin: "0 auto 16px" }} />
                      <p style={{ fontFamily: "Georgia, serif", fontSize: "clamp(0.65rem, 1.5vw, 0.85rem)", color: "rgba(26,18,9,0.55)", marginBottom: 8 }}>
                        has successfully completed
                      </p>
                      <p style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                        fontWeight: 700, color: "#8B6914",
                        letterSpacing: "0.02em", marginBottom: 6,
                      }}>
                        {cert.course}
                      </p>
                    </div>

                    {/* Details row */}
                    <div className="cert-details-grid" style={{
                      display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                      gap: 0, margin: "24px 0",
                      border: "1px solid rgba(201,168,76,0.25)",
                      borderRadius: 4, overflow: "hidden",
                    }}>
                      {[
                        { label: "Certificate No", value: cert.certificateNo },
                        { label: "Completion Date", value: formatDate(cert.completionDate) },
                        { label: "Enrollment ID", value: cert.id },
                      ].map(({ label, value }, i) => (
                        <div key={label} className="cert-details-cell" style={{
                          padding: "clamp(8px, 2vw, 14px) clamp(8px, 2vw, 20px)", textAlign: "center",
                          borderRight: i < 2 ? "1px solid rgba(201,168,76,0.2)" : "none",
                          background: i === 1 ? "rgba(201,168,76,0.04)" : "transparent",
                        }}>
                          <p style={{ fontSize: "clamp(0.45rem, 1vw, 0.6rem)", fontFamily: "sans-serif", letterSpacing: "0.18em", textTransform: "uppercase", color: "#B89A50", marginBottom: 4 }}>{label}</p>
                          <p style={{ fontSize: "clamp(0.6rem, 1.4vw, 0.8rem)", fontFamily: "Georgia, serif", fontWeight: 700, color: "#1A1209" }}>{value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Instructor + Verified seal row */}
                    <div className="cert-sig-row" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: -20 }}>

                      {/* Instructor signature block */}
                      {cert.instructor && (
                        <div style={{ textAlign: "center" }}>
                          <Image src="/images/dr-rashid masood signature.png" alt="Instructor Signature"
                            width={160} height={60}
                            style={{ width: "clamp(100px, 16vw, 160px)", height: "auto", display: "block", margin: "0 auto 2px", objectFit: "contain" }} />
                          <div style={{ width: "clamp(100px, 18vw, 220px)", borderBottom: "1px solid rgba(26,18,9,0.25)", marginBottom: 6, margin: "0 auto 6px" }} />
                          <p style={{ fontSize: "clamp(0.55rem, 1.2vw, 0.7rem)", fontFamily: "Georgia, serif", fontWeight: 700, color: "#1A1209" }}>{cert.instructor}</p>
                          <p style={{ fontSize: "clamp(0.45rem, 1vw, 0.58rem)", fontFamily: "sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B89A50", marginTop: 2 }}>Instructor</p>
                        </div>
                      )}

                      <div style={{ flex: 1 }} />

                      {/* Issuer signature block */}
                      <div style={{ textAlign: "center" }}>
                        <Image src="/images/mufeez aziz signature.png" alt="CEO Signature"
                          width={160} height={60}
                          style={{ width: "clamp(100px, 16vw, 160px)", height: "auto", display: "block", margin: "0 auto 2px", objectFit: "contain" }} />
                        <div style={{ width: "clamp(100px, 18vw, 220px)", borderBottom: "1px solid rgba(26,18,9,0.25)", marginBottom: 6, margin: "0 auto 6px" }} />
                        <p style={{ fontSize: "clamp(0.55rem, 1.2vw, 0.7rem)", fontFamily: "Georgia, serif", fontWeight: 700, color: "#1A1209" }}>CEO Mufeez Azeez</p>
                        <p style={{ fontSize: "clamp(0.45rem, 1vw, 0.58rem)", fontFamily: "sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B89A50", marginTop: 2 }}>Issuing Authority</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Verified notice below certificate */}
          <div className="flex items-center gap-2 mt-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: "#10B981" }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#10B981" }} />
            </span>
            <p className="font-sans text-xs" style={{ color: "rgba(0,0,0,0.4)" }}>
              Certificate verified · Stockifyy Identity Governance ·{" "}
              <a href="mailto:info@stockifyy.com" style={{ color: "rgba(201,168,76,0.7)", textDecoration: "underline" }}>info@stockifyy.com</a>
            </p>
          </div>
        </>

      ) : (
        /* ── NOT FOUND ── */
        <div className="w-full" style={{ maxWidth: "min(1100px, calc(100vw - 48px))" }}>
          <div style={{
            background: "linear-gradient(135deg, #C9A84C 0%, #F0D080 40%, #C9A84C 60%, #8B6914 100%)",
            padding: 3, borderRadius: 0,
            boxShadow: "0 30px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(201,168,76,0.2)",
          }}>
            <div style={{ background: "#FFFFFF", borderRadius: 0, padding: 6 }}>
              <div style={{
                border: "1px solid rgba(201,168,76,0.4)", borderRadius: 0,
                background: "#FFFFFF", position: "relative", overflow: "hidden",
                padding: "clamp(20px, 5vw, 48px) clamp(16px, 6vw, 60px) clamp(20px, 4vw, 40px)",
                textAlign: "center",
              }}>
                {/* Watermark */}
                <div style={{
                  position: "absolute", inset: 0, display: "flex",
                  alignItems: "center", justifyContent: "center",
                  pointerEvents: "none", opacity: 0.06, zIndex: 0,
                }}>
                  <Image src="/images/ICON.png" alt="" width={600} height={600}
                    style={{ objectFit: "contain" }} />
                </div>

                {/* Corner ornaments */}
                {["top-4 left-4", "top-4 right-4 rotate-90", "bottom-4 left-4 -rotate-90", "bottom-4 right-4 rotate-180"].map((pos, i) => (
                  <svg key={i} viewBox="0 0 40 40" style={{ position: "absolute", width: 40, height: 40 }}
                    className={`absolute ${pos}`} fill="none">
                    <path d="M2,20 L2,2 L20,2" stroke="#C9A84C" strokeWidth="1.5" opacity="0.7" />
                    <path d="M2,2 L8,8" stroke="#C9A84C" strokeWidth="1" opacity="0.5" />
                  </svg>
                ))}

                <div style={{ position: "relative", zIndex: 1 }}>

                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
                    <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, #C9A84C)" }} />
                    <svg viewBox="0 0 20 20" width={16} height={16}>
                      <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8" fill="#C9A84C" opacity="0.8" />
                    </svg>
                    <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, #C9A84C, transparent)" }} />
                  </div>

                  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, borderRadius: 100, padding: "6px 14px", background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", marginBottom: 24 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#EF4444", display: "inline-block" }} />
                    <span style={{ fontSize: "0.6rem", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#DC2626" }}>Not Verified</span>
                  </div>

                  <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#1A1209", marginBottom: 12 }}>
                    Certificate Not Found
                  </h1>
                  <p style={{ fontFamily: "Georgia, serif", fontSize: "clamp(0.65rem, 1.5vw, 0.85rem)", color: "rgba(26,18,9,0.5)", marginBottom: 6 }}>
                    No certificate matching ID
                  </p>
                  <p style={{ fontFamily: "Georgia, serif", fontSize: "clamp(0.9rem, 2vw, 1.1rem)", fontWeight: 700, color: "#8B6914", marginBottom: 28 }}>
                    {params.id}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                    <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, #C9A84C)" }} />
                    <svg viewBox="0 0 20 20" width={16} height={16}>
                      <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8" fill="#C9A84C" opacity="0.8" />
                    </svg>
                    <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, #C9A84C, transparent)" }} />
                  </div>

                  <p style={{ fontFamily: "sans-serif", fontSize: "0.75rem", color: "rgba(26,18,9,0.4)", marginBottom: 28, lineHeight: 1.7 }}>
                    Double-check the ID printed on your certificate, or contact us for assistance.
                  </p>

                  <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                    <Link href="/" style={{
                      display: "inline-flex", alignItems: "center", borderRadius: 100,
                      padding: "10px 28px", fontFamily: "sans-serif", fontSize: "0.75rem",
                      fontWeight: 600, background: "linear-gradient(135deg, #C9A84C, #8B6914)", color: "#fff",
                      textDecoration: "none",
                    }}>Go to Homepage</Link>
                    <Link href="/#contact" style={{
                      display: "inline-flex", alignItems: "center", borderRadius: 100,
                      padding: "10px 28px", fontFamily: "sans-serif", fontSize: "0.75rem",
                      fontWeight: 600, border: "1px solid rgba(201,168,76,0.4)", color: "#8B6914",
                      textDecoration: "none", background: "transparent",
                    }}>Contact Us</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
