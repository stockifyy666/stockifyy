"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
  image?: string;
}

const WELCOME = "Assalam o Alaikum! I'm Stockifyy's AI assistant. Ask me anything about our services, Shariah-compliant investing, PSX, or our Data Portal — in any language!";

const QUICK_QUESTIONS = [
  "What services does Stockifyy offer?",
  "Is Stockifyy SECP certified?",
  "How do I open a PSX account?",
  "What is the AUA model?",
  "Tell me about Stockifyy Membership",
];

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: WELCOME }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [imageMimeType, setImageMimeType] = useState<string>("image/jpeg");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [showQuick, setShowQuick] = useState(true);

  const bottomRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<{ stop: () => void; start: () => void; lang: string; interimResults: boolean; onresult: unknown; onerror: unknown; onend: unknown } | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = useCallback(async (text: string) => {
    if (!text.trim() && !imageBase64) return;
    setShowQuick(false);

    const userMsg: Message = { role: "user", content: text, image: imagePreview ?? undefined };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput("");
    const capturedBase64 = imageBase64;
    const capturedMime = imageMimeType;
    setImageBase64(null);
    setImagePreview(null);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history.map((m) => ({ role: m.role, content: m.content })),
          imageBase64: capturedBase64,
          imageMimeType: capturedMime,
        }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply ?? "Sorry, something went wrong." }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Connection error. Please try again." }]);
    } finally {
      setLoading(false);
    }
  }, [messages, imageBase64, imageMimeType, imagePreview]);

  const handleVoice = () => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      alert("Voice not supported in this browser. Please use Chrome.");
      return;
    }
    if (listening) { recognitionRef.current?.stop(); setListening(false); return; }
    const w = window as Window & { webkitSpeechRecognition?: new () => { lang: string; interimResults: boolean; onresult: unknown; onerror: unknown; onend: unknown; start: () => void; stop: () => void }; SpeechRecognition?: new () => { lang: string; interimResults: boolean; onresult: unknown; onerror: unknown; onend: unknown; start: () => void; stop: () => void } };
    const SR = w.webkitSpeechRecognition || w.SpeechRecognition;
    if (!SR) return;
    const rec = new SR();
    rec.lang = "en-US";
    rec.interimResults = false;
    rec.onresult = (e: { results: { [key: number]: { [key: number]: { transcript: string } } } }) => {
      setInput(e.results[0][0].transcript);
      setListening(false);
    };
    rec.onerror = () => setListening(false);
    rec.onend = () => setListening(false);
    recognitionRef.current = rec;
    rec.start();
    setListening(true);
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageMimeType(file.type);
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setImageBase64(result.split(",")[1]);
      setImagePreview(result);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  return (
    <>
      {/* Chatbot toggle button — above WhatsApp */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open Stockifyy AI Chat"
        className="fixed bottom-24 right-6 z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full shadow-lg flex items-center justify-center bg-gradient-to-br from-[#FEA500] to-[#7a4e00] hover:scale-110 active:scale-95 transition-transform"
      >
        {open ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
        ) : (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <circle cx="9" cy="10" r="1" fill="white" /><circle cx="12" cy="10" r="1" fill="white" /><circle cx="15" cy="10" r="1" fill="white" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-40 right-4 z-40 flex flex-col rounded-2xl shadow-2xl border border-[#E8DDC8] bg-[#FFF7E9] overflow-hidden"
          style={{ width: "min(300px, calc(100vw - 24px))", height: "min(420px, calc(100vh - 200px))" }}>

          {/* Header — logo icon only */}
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-gradient-to-r from-[#FEA500] to-[#7a4e00] shrink-0">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/favicon.ico" alt="Stockifyy" width={24} height={24} className="object-contain" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-white text-[13px] leading-tight">Stockifyy AI</p>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-300 inline-block" />
                <p className="text-white/80 text-[10px]">Online · Always here</p>
              </span>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2.5" style={{ minHeight: 0 }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[88%] rounded-2xl px-3 py-2 text-[13px] leading-relaxed whitespace-pre-wrap break-words ${
                  m.role === "user"
                    ? "bg-gradient-to-br from-[#FEA500] to-[#7a4e00] text-white rounded-br-sm"
                    : "bg-white border border-[#E8DDC8] text-[#1A1A1A] rounded-bl-sm"
                }`}>
                  {m.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={m.image} alt="uploaded" className="rounded-lg mb-1.5 max-h-28 object-cover w-full" />
                  )}
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-[#E8DDC8] rounded-2xl rounded-bl-sm px-3.5 py-3">
                  <div className="flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-[#986300] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-[#986300] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-[#986300] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            {/* Quick questions */}
            {showQuick && messages.length === 1 && (
              <div className="flex flex-col gap-1.5 mt-1">
                {QUICK_QUESTIONS.map((q) => (
                  <button key={q} onClick={() => send(q)}
                    className="text-left text-[11px] px-3 py-1.5 rounded-xl border border-[#E8DDC8] bg-white text-[#986300] hover:bg-[#FFF0D0] transition-colors leading-snug">
                    {q}
                  </button>
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Image preview */}
          {imagePreview && (
            <div className="px-3 pb-1 flex items-center gap-2 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imagePreview} alt="preview" className="h-10 w-10 rounded-lg object-cover border border-[#E8DDC8]" />
              <button onClick={() => { setImagePreview(null); setImageBase64(null); }} className="text-[11px] text-red-400 hover:text-red-600">Remove</button>
            </div>
          )}

          {/* Input row */}
          <div className="px-2.5 pb-2.5 pt-2 border-t border-[#E8DDC8] flex items-end gap-1.5 shrink-0">
            <button onClick={() => fileRef.current?.click()} title="Upload image" className="shrink-0 text-[#986300] hover:opacity-70 transition pb-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
              </svg>
            </button>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImage} />

            <textarea value={input} onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(input); } }}
              placeholder="Ask anything..." rows={1}
              className="flex-1 resize-none bg-white border border-[#E8DDC8] rounded-xl px-2.5 py-1.5 text-[13px] text-[#1A1A1A] outline-none focus:border-[#FEA500] transition placeholder:text-gray-400"
              style={{ maxHeight: "72px" }} />

            <button onClick={handleVoice} title="Voice" className={`shrink-0 pb-1 transition ${listening ? "text-red-500 animate-pulse" : "text-[#986300] hover:opacity-70"}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10a7 7 0 0 0 14 0" /><line x1="12" y1="19" x2="12" y2="22" /><line x1="8" y1="22" x2="16" y2="22" />
              </svg>
            </button>

            <button onClick={() => send(input)} disabled={loading || (!input.trim() && !imageBase64)}
              className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#FEA500] to-[#7a4e00] flex items-center justify-center text-white hover:opacity-90 transition disabled:opacity-40">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
