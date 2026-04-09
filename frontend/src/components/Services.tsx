"use client";

import { useScrollReveal } from "./useScrollReveal";

const services = [
  {
    title: "Aile Hukuku",
    description:
      "Boşanma, velayet, nafaka ve mal paylaşımı davalarında müvekkillerimizin haklarını titizlikle koruyoruz. Aile içi uyuşmazlıklarda uzlaşma odaklı ve kararlı bir yaklaşım sunuyoruz.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
  {
    title: "Ceza Hukuku",
    description:
      "Ceza davalarında savunma hakkınızı en etkin şekilde kullanmanızı sağlıyoruz. Soruşturma aşamasından yargılama sürecine kadar yanınızdayız. Tutukluluk itirazları ve tahliye talepleri konusunda hızlı aksiyon alıyoruz.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
        />
      </svg>
    ),
  },
  {
    title: "Ticaret Hukuku",
    description:
      "Şirket kuruluşu, sözleşme hazırlama, ticari uyuşmazlıklar ve alacak takibi konularında işletmenize profesyonel hukuki destek sağlıyoruz. Ticari ilişkilerinizi hukuki güvence altına alıyoruz.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21"
        />
      </svg>
    ),
  },
];

export default function Services() {
  useScrollReveal();

  return (
    <section id="services" className="py-28 lg:py-36 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <p className="text-[0.8rem] uppercase tracking-[0.2em] text-[var(--color-accent)] font-medium mb-4">
            Hizmetlerimiz
          </p>
          <h2
            className="font-[family-name:var(--font-heading)] font-semibold text-[var(--color-primary)] leading-tight tracking-[-0.02em]"
            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
          >
            Uzman Hukuki Destek
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal reveal-delay-${i + 1} group bg-white rounded-2xl border border-neutral-200 p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[var(--color-accent)]/30`}
            >
              <div className="text-[var(--color-accent)] mb-6">
                {service.icon}
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg text-[var(--color-primary)] mb-4">
                {service.title}
              </h3>
              <p className="text-[var(--color-text-muted)] leading-[1.8]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 reveal">
          <p className="text-[var(--color-text-muted)] mb-6">
            Hukuki sorunlarınız için hemen bizimle iletişime geçin.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[var(--color-accent)] text-white text-sm uppercase tracking-[0.15em] font-medium rounded-full px-10 py-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
          >
            Randevu Alın
          </a>
        </div>
      </div>
    </section>
  );
}
