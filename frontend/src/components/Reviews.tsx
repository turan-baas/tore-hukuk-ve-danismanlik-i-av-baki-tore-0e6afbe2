"use client";

import { useScrollReveal } from "./useScrollReveal";

const reviews = [
  {
    name: "Mehmet Yılmaz",
    text: "Boşanma davamda Baki Bey her aşamada yanımda oldu. Hem profesyonel hem de insani bir yaklaşımla süreci en az hasarla atlattım. Kendisine minnettarım.",
  },
  {
    name: "Ayşe Kara",
    text: "İş kazası sonrası haklarımı bilmiyordum. Av. Baki Töre sayesinde hem tazminatımı aldım hem de hukuki sürecin her adımını anladım. Kesinlikle tavsiye ederim.",
  },
  {
    name: "Emre Demir",
    text: "Ticari sözleşme uyuşmazlığımızda hızlı ve etkili çözüm üretti. Sonuç odaklı çalışması ve samimi yaklaşımıyla fark yaratan bir avukat. Teşekkürler.",
  },
];

function StarIcon() {
  return (
    <svg
      className="w-4 h-4 text-[var(--color-accent)]"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Reviews() {
  useScrollReveal();

  return (
    <section id="reviews" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Rating Header */}
        <div className="text-center mb-20 reveal">
          <p className="text-[0.8rem] uppercase tracking-[0.2em] text-[var(--color-accent)] font-medium mb-4">
            Yorumlar
          </p>
          <p
            className="font-[family-name:var(--font-heading)] font-bold text-[var(--color-primary)] leading-none"
            style={{ fontSize: "6rem" }}
          >
            5
          </p>
          <div className="flex gap-1.5 justify-center mt-4 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6 text-[var(--color-accent)]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-[var(--color-text-muted)]">
            Google üzerinden değerlendirildi
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl shadow-sm p-8 relative`}
            >
              {/* Decorative quote mark */}
              <svg
                className="absolute top-6 right-6 w-12 h-12 text-[var(--color-accent)] opacity-[0.15]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
              </svg>

              <p className="italic text-[var(--color-text)] leading-[1.8] mb-6 relative z-10">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-surface)] flex items-center justify-center">
                  <span className="text-[var(--color-accent)] font-semibold text-sm">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-[var(--color-primary)]">
                    {review.name}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    Google Yorumu
                  </p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <StarIcon key={j} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
