"use client";

import { useState, FormEvent } from "react";
import { useScrollReveal } from "./useScrollReveal";

export default function Contact() {
  useScrollReveal();

  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Gönderim başarısız");
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="py-28 lg:py-36 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: Info + Form */}
          <div className="reveal">
            <p className="text-[0.8rem] uppercase tracking-[0.2em] text-[var(--color-accent)] font-medium mb-4">
              İletişim
            </p>
            <h2
              className="font-[family-name:var(--font-heading)] font-semibold text-[var(--color-primary)] leading-tight tracking-[-0.02em] mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
            >
              Bize Ulaşın
            </h2>

            {/* Contact Details */}
            <div className="space-y-5 mb-12">
              <a
                href="tel:+905364905133"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-[var(--color-accent)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Telefon
                  </p>
                  <p className="font-medium text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                    +90 536 490 51 33
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-[var(--color-accent)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Adres
                  </p>
                  <p className="font-medium text-[var(--color-primary)]">
                    Çağlayan, Park Cd No:89/a, 34403 Kağıthane/İstanbul
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {formState === "success" ? (
              <div className="bg-white rounded-2xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-xl text-[var(--color-primary)] mb-2">
                  Mesajınız Alındı!
                </h3>
                <p className="text-[var(--color-text-muted)]">
                  En kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {formState === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-5 py-3 text-sm">
                    Bir hata oluştu. Lütfen tekrar deneyin.
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    required
                    placeholder="Adınız Soyadınız"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white rounded-xl border border-neutral-200 px-5 py-3.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)] transition-all"
                  />
                  <input
                    type="email"
                    required
                    placeholder="E-posta Adresiniz"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-white rounded-xl border border-neutral-200 px-5 py-3.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)] transition-all"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Telefon Numaranız"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-white rounded-xl border border-neutral-200 px-5 py-3.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)] transition-all"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="Mesajınız..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-white rounded-xl border border-neutral-200 px-5 py-3.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)] transition-all resize-none"
                />
                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full bg-[var(--color-accent)] text-white text-sm uppercase tracking-[0.15em] font-medium rounded-full py-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === "loading" ? "Gönderiliyor..." : "Mesaj Gönderin"}
                </button>
              </form>
            )}
          </div>

          {/* Right: Map placeholder */}
          <div className="reveal reveal-delay-1">
            <div className="relative w-full h-full min-h-[500px] rounded-2xl overflow-hidden bg-[var(--color-primary)] border border-[var(--color-accent)]/20">
              {/* Stylized map illustration */}
              <div className="absolute inset-0">
                {/* Grid lines to suggest a map */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                  }}
                />

                {/* Accent area */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-40 h-40 rounded-full bg-[var(--color-accent)]/10 animate-pulse" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 rounded-full bg-[var(--color-accent)]/15" />
                </div>

                {/* Map pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+40px)]">
                  <svg
                    className="w-12 h-12 text-[var(--color-accent)]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C7.802 0 4 3.403 4 7.602 4 11.8 7.469 16.812 12 24c4.531-7.188 8-12.2 8-16.398C20 3.403 16.199 0 12 0zm0 11a3 3 0 110-6 3 3 0 010 6z" />
                  </svg>
                </div>
              </div>

              {/* Bottom overlay with info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/90 to-transparent p-8 pt-20">
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-white text-lg mb-2">
                  Töre Hukuk ve Danışmanlık
                </h3>
                <p className="text-white/60 text-sm mb-4">
                  Çağlayan, Park Cd No:89/a, 34403 Kağıthane/İstanbul
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Çağlayan+Park+Cd+No:89/a+34403+Kağıthane+İstanbul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white text-sm font-medium rounded-full px-6 py-2.5 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  Google Maps&apos;te Aç
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
