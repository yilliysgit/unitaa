"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Jan V.",
    company: "Ondernemer, Rotterdam",
    initials: "JV",
    quote:
      "Unit AA heeft mijn administratie volledig overgenomen. Ik mis geen enkele deadline meer en houd eindelijk tijd over voor mijn bedrijf.",
    featured: true,
    green: false,
  },
  {
    name: "Sophie M.",
    company: "ZZP'er, Utrecht",
    initials: "SM",
    quote:
      "Heldere communicatie, snelle reacties en veel fiscaal advies waar ik echt iets aan heb.",
    featured: false,
    green: true,
  },
  {
    name: "Mehmet K.",
    company: "BV-eigenaar, Amsterdam",
    initials: "MK",
    quote:
      "Ik weet precies waar ik financieel sta. Unit AA denkt proactief mee en voorkomt verrassingen.",
    featured: false,
    green: false,
  },
];

function Stars({ size = "sm" }: { size?: "sm" | "md" }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={[
            "fill-[#f5a623] text-[#f5a623]",
            size === "md" ? "h-4 w-4" : "h-3 w-3",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

export default function HomeReviews() {
  const featured = reviews.find((r) => r.featured)!;
  const rest = reviews.filter((r) => !r.featured);

  return (
    <section className="bg-[#f4f6fb] py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1fr_1.6fr] lg:px-12">

        {/* ── Links ── */}
        <div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
            Klantervaringen
          </p>
          <h2 className="mb-4 text-[40px] font-extrabold leading-[1.08] tracking-[-1px] text-[#0f1c3d]">
            Vertrouwen is het
            <br />
            <span className="text-[#3db54a]">beste bewijs.</span>
          </h2>
          <p className="mb-7 max-w-[300px] text-[14px] leading-[1.75] text-[#5a6480]">
            Ondernemers kiezen voor Unit AA vanwege heldere communicatie
            en een administratie die altijd op orde is.
          </p>

          <div className="flex items-center gap-2.5">
            <Stars size="md" />
            <div>
              <p className="text-[13px] font-bold text-[#0f1c3d]">
                5.0 beoordeling
              </p>
              <p className="mt-0.5 text-[12px] text-[#8a92a6]">
                Gebaseerd op 120+ klanten
              </p>
            </div>
          </div>
        </div>

        {/* ── Rechts — review cards ── */}
        <div className="grid grid-cols-2 gap-3.5">

          {/* Featured — full width */}
          <article className="col-span-2 grid grid-cols-[auto_1fr] items-center gap-5 rounded-[16px] border border-[#0f1c3d]/7 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#3db54a]/25 hover:shadow-[0_8px_24px_rgba(15,28,61,0.07)]">
            <div className="flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-full bg-[#0f1c3d] text-[16px] font-extrabold text-white">
              {featured.initials}
            </div>
            <div>
              <div className="mb-3">
                <Stars />
              </div>
              <p className="mb-3 text-[14px] leading-[1.7] text-[#4a5268]">
                &ldquo;{featured.quote}&rdquo;
              </p>
              <div>
                <p className="text-[12px] font-bold text-[#0f1c3d]">
                  {featured.name}
                </p>
                <p className="mt-0.5 text-[11px] text-[#8a92a6]">
                  {featured.company}
                </p>
              </div>
            </div>
          </article>

          {/* Smaller cards */}
          {rest.map((review) => (
            <article
              key={review.name}
              className="flex flex-col rounded-[16px] border border-[#0f1c3d]/7 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#3db54a]/25 hover:shadow-[0_8px_24px_rgba(15,28,61,0.07)]"
            >
              <div className="mb-3">
                <Stars />
              </div>
              <p className="mb-4 flex-1 text-[13px] leading-[1.7] text-[#4a5268]">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="mt-auto flex items-center gap-2.5">
                <div
                  className={[
                    "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold text-white",
                    review.green ? "bg-[#3db54a]" : "bg-[#0f1c3d]",
                  ].join(" ")}
                >
                  {review.initials}
                </div>
                <div>
                  <p className="text-[12px] font-bold text-[#0f1c3d]">
                    {review.name}
                  </p>
                  <p className="mt-0.5 text-[11px] text-[#8a92a6]">
                    {review.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}