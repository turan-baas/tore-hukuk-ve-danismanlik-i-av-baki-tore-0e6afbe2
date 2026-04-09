"use client";

import { useState, useRef } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const fd = new FormData(e.currentTarget);
    const body = {
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      phone: fd.get("phone") as string,
      message: fd.get("message") as string,
    };

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
        <svg className="w-12 h-12 text-green-500 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-lg font-semibold text-green-800 mb-1">Message Received!</p>
        <p className="text-sm text-green-600">We'll get back to you shortly.</p>
        <button onClick={() => setStatus("idle")} className="mt-4 text-sm text-green-700 underline hover:no-underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <input name="name" type="text" required placeholder="Your name"
          className="w-full rounded-xl border border-neutral-200 bg-white px-5 py-3.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)] outline-none transition-all" />
        <input name="email" type="email" required placeholder="Your email"
          className="w-full rounded-xl border border-neutral-200 bg-white px-5 py-3.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)] outline-none transition-all" />
      </div>
      <input name="phone" type="tel" placeholder="Your phone (optional)"
        className="w-full rounded-xl border border-neutral-200 bg-white px-5 py-3.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)] outline-none transition-all" />
      <textarea name="message" rows={4} required placeholder="Your message"
        className="w-full rounded-xl border border-neutral-200 bg-white px-5 py-3.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 resize-none focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)] outline-none transition-all" />
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
      <button type="submit" disabled={status === "sending"}
        className="rounded-full bg-[var(--color-accent)] px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium text-white hover:opacity-90 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 disabled:opacity-60">
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
