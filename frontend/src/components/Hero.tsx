"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--color-primary)" }}
    >
      {/* Background geometric composition */}
      <div className="absolute inset-0">
        {/* Gradient base */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, #1a2d42 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, #162436 0%, transparent 50%), radial-gradient(ellipse at 60% 80%, #0f1922 0%, transparent 60%)",
          }}
        />

        {/* Subtle dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #A67C52 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating geometric shapes */}
        <div
          className="absolute top-[15%] right-[10%] w-72 h-72 rounded-full border border-[var(--color-accent)]/20 animate-float"
        />
        <div
          className="absolute bottom-[20%] left-[5%] w-48 h-48 rounded-full border border-[var(--color-accent)]/10 animate-float-reverse"
        />
        <div
          className="absolute top-[60%] right-[25%] w-32 h-32 rotate-45 border border-[var(--color-accent)]/15 animate-float-slow"
        />
        <div
          className="absolute top-[10%] left-[20%] w-20 h-20 rotate-12 bg-[var(--color-accent)]/5 animate-float-reverse"
        />
        <div
          className="absolute bottom-[35%] right-[8%] w-56 h-56 rounded-full bg-[var(--color-accent)]/[0.03] animate-float-slow"
        />

        {/* Diagonal accent line */}
        <div
          className="absolute top-0 right-[30%] w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--color-accent)]/10 to-transparent"
        />
        <div
          className="absolute top-0 left-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--color-accent)]/5 to-transparent"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Small pre-heading */}
        <p
          className="text-[0.8rem] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-6 animate-fade-in-up"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Hukuk ve Danışmanlık
        </p>

        {/* Main heading */}
        <h1
          className="font-[family-name:var(--font-heading)] font-bold text-white leading-[1.05] tracking-[-0.03em] animate-fade-in-up-delay-1"
          style={{
            fontSize: "clamp(2.75rem, 8vw, 5rem)",
          }}
        >
          Av. Baki{" "}
          <span className="text-[var(--color-accent)]">TÖRE</span>
        </h1>

        {/* Decorative line */}
        <div className="flex justify-center mt-8 mb-8">
          <div
            className="h-[1px] bg-[var(--color-accent)] animate-expand-line"
          />
        </div>

        {/* Tagline */}
        <p
          className="text-white/70 text-lg lg:text-xl max-w-xl mx-auto leading-relaxed animate-fade-in-up-delay-2"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Haklarınızı korumak için yanınızdayız. Güvenilir, kararlı ve
          sonuç odaklı hukuki danışmanlık.
        </p>

        {/* CTA */}
        <div className="mt-12 animate-fade-in-up-delay-3">
          <a
            href="#contact"
            className="inline-block bg-[var(--color-accent)] text-white text-sm uppercase tracking-[0.15em] font-medium rounded-full px-10 py-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:brightness-110"
          >
            Ücretsiz Danışmanlık
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
    </section>
  );
}
