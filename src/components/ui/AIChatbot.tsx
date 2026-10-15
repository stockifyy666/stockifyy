"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WELCOME = "Assalam o Alaikum! I'm Stockifyy's AI assistant. Ask me anything about our services, Shariah-compliant investing, PSX, or our team — in any language!";

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
  const [showQuick, setShowQuick] = useState(true);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = useCallback(async (text: string) => {
    if (!text.trim()) return;
    setShowQuick(false);

    const userMsg: Message = { role: "user", content: text };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply ?? "Sorry, something went wrong." }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Connection error. Please try again." }]);
    } finally {
      setLoading(false);
    }
  }, [messages]);

  return (
    <>
      {/* Chatbot toggle button */}
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

          {/* Header */}
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-gradient-to-r from-[#FEA500] to-[#7a4e00] shrink-0">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 overflow-hidden p-0.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/stockifyy-logo.webp" alt="Stockifyy" width={28} height={28} className="object-contain" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-white text-[13px] leading-tight">Stockifyy AI</p>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-300 inline-block" />
                <p className="text-white/80 text-[10px]">Online · Always here</p>
              </span>
            </div>
            <button
              onClick={() => { setMessages([{ role: "assistant", content: WELCOME }]); setShowQuick(true); }}
              title="Clear chat"
              className="text-white/70 hover:text-white transition shrink-0"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4h6v2" />
              </svg>
            </button>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2.5" style={{ minHeight: 0 }}>
            {messages.map((m, i) => (
              <div key={i} className={`group flex items-end gap-1 ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                {m.role === "assistant" && (
                  <button
                    onClick={() => setMessages((prev) => prev.filter((_, idx) => idx !== i))}
                    title="Delete message"
                    className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mb-1 text-gray-300 hover:text-red-400"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
                  </button>
                )}
                <div className={`max-w-[88%] rounded-2xl px-3 py-2 text-[13px] leading-relaxed whitespace-pre-wrap break-words ${
                  m.role === "user"
                    ? "bg-gradient-to-br from-[#FEA500] to-[#7a4e00] text-white rounded-br-sm"
                    : "bg-white border border-[#E8DDC8] text-[#1A1A1A] rounded-bl-sm"
                }`}>
                  {m.content}
                </div>
                {m.role === "user" && (
                  <button
                    onClick={() => setMessages((prev) => prev.filter((_, idx) => idx !== i))}
                    title="Delete message"
                    className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mb-1 text-gray-300 hover:text-red-400"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
                  </button>
                )}
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

          {/* Input row */}
          <div className="px-2.5 pb-2.5 pt-2 border-t border-[#E8DDC8] flex items-end gap-1.5 shrink-0">
            <textarea value={input} onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(input); } }}
              placeholder="Ask anything..." rows={1}
              className="flex-1 resize-none bg-white border border-[#E8DDC8] rounded-xl px-2.5 py-1.5 text-[13px] text-[#1A1A1A] outline-none focus:border-[#FEA500] transition placeholder:text-gray-400"
              style={{ maxHeight: "72px" }} />

            <button onClick={() => send(input)} disabled={loading || !input.trim()}
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
