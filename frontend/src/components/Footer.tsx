export default function Footer() {
  const navLinks = [
    { label: "Ana Sayfa", href: "#hero" },
    { label: "Hakkımızda", href: "#about" },
    { label: "Hizmetler", href: "#services" },
    { label: "Yorumlar", href: "#reviews" },
    { label: "İletişim", href: "#contact" },
  ];

  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {/* Left: Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
              Töre{" "}
              <span className="text-[var(--color-accent)]">Hukuk</span>
            </h3>
            <p className="text-white/50 leading-relaxed">
              Güvenilir hukuk danışmanlığı ile haklarınızı
              koruyoruz. Kağıthane, İstanbul.
            </p>
          </div>

          {/* Center: Nav */}
          <div>
            <h4 className="text-[0.8rem] uppercase tracking-[0.15em] text-[var(--color-accent)] font-medium mb-6">
              Hızlı Bağlantılar
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[var(--color-accent)] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact */}
          <div>
            <h4 className="text-[0.8rem] uppercase tracking-[0.15em] text-[var(--color-accent)] font-medium mb-6">
              İletişim Bilgileri
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+905364905133"
                className="flex items-center gap-3 text-white/60 hover:text-[var(--color-accent)] transition-colors duration-300 text-sm"
              >
                <svg
                  className="w-4 h-4 shrink-0"
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
                +90 536 490 51 33
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <svg
                  className="w-4 h-4 shrink-0 mt-0.5"
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
                Çağlayan, Park Cd No:89/a, 34403 Kağıthane/İstanbul
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; 2026 Töre Hukuk ve Danışmanlık | Av. Baki TÖRE
          </p>
          <p className="text-white/40 text-sm">
            Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
