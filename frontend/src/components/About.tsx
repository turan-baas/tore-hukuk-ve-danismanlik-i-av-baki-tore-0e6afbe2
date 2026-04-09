"use client";

import { useScrollReveal } from "./useScrollReveal";

export default function About() {
  useScrollReveal();

  return (
    <section id="about" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-center">
          {/* Text Column */}
          <div className="lg:col-span-3 reveal">
            <p className="text-[0.8rem] uppercase tracking-[0.2em] text-[var(--color-accent)] font-medium mb-4">
              Hakkımızda
            </p>
            <h2
              className="font-[family-name:var(--font-heading)] font-semibold text-[var(--color-primary)] leading-tight tracking-[-0.02em] mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
            >
              Hukuki Güvenceniz,
              <br />
              Bizim Önceliğimiz
            </h2>

            <div className="space-y-6 text-[1.125rem] leading-[1.8] text-[var(--color-text-muted)]">
              <p>
                İstanbul Kağıthane&apos;nin kalbinde, Çağlayan Adliyesi&apos;ne
                yürüme mesafesinde yer alan büromuz, müvekkillerimize hızlı ve
                etkili hukuki çözümler sunmaktadır. Av. Baki Töre, yılların
                getirdiği deneyim ve birikimle her davaya titizlikle yaklaşır.
              </p>
              <p>
                Aile hukukundan ticaret hukukuna, ceza davalarından idari
                uyuşmazlıklara kadar geniş bir yelpazede hizmet veriyoruz. Her
                müvekkilimizin hikayesini dinler, ihtiyaçlarına özel stratejiler
                geliştiririz. Bizim için her dava, bir güven ilişkisinin
                başlangıcıdır.
              </p>
              <p>
                Park Caddesi üzerindeki büromuzda, sıcak ve profesyonel bir
                ortamda sizleri ağırlamaktan mutluluk duyarız. İlk
                görüşmenizde, haklarınız ve seçenekleriniz hakkında
                kapsamlı bilgilendirme yapılır.
              </p>
            </div>
          </div>

          {/* Decorative Column */}
          <div className="lg:col-span-2 reveal reveal-delay-1">
            <div className="relative">
              {/* Abstract decorative composition */}
              <div className="relative w-full aspect-square max-w-sm mx-auto">
                {/* Background shape */}
                <div className="absolute inset-4 rounded-3xl bg-[var(--color-surface)]" />

                {/* Accent circle */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[var(--color-accent)]/10" />
                <div className="absolute bottom-8 left-0 w-24 h-24 rounded-full border-2 border-[var(--color-accent)]/20" />

                {/* Rating display */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-center">
                    <p
                      className="font-[family-name:var(--font-heading)] font-bold text-[var(--color-primary)] leading-none"
                      style={{ fontSize: "5rem" }}
                    >
                      5.0
                    </p>
                    <div className="flex gap-1 justify-center mt-3 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-[var(--color-accent)]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-[var(--color-text-muted)] text-sm uppercase tracking-wider">
                      Google Değerlendirme
                    </p>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 border-r-2 border-b-2 border-[var(--color-accent)]/30 rounded-br-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
