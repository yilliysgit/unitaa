// components/services/detail/FreeConsultForm.tsx

"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function FreeConsultForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    monthlyInvoices: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier komt je API call / webhook / CRM integratie
    console.log("Form data:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl bg-[#f0f9f1] border border-[#3db54a]/20 p-8 text-center">
        <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-[#3db54a]" />
        <h3 className="text-[20px] font-bold text-[#0f1c3d]">Bedankt!</h3>
        <p className="text-[14px] text-[#5a6480]">
          We nemen binnen 24 uur contact met u op om een gratis kennismaking in te plannen.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-[#f4f6fb] py-16 sm:py-20">
      <div className="mx-auto max-w-[960px] px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Linkerkant: uitleg */}
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
                  Vrijblijvend
                </p>
            <h2 className="font-syne mb-4 text-[28px] font-extrabold tracking-[-0.8px] text-[#0f1c3d] sm:text-[34px]">
              Plan uw gratis kennismaking
            </h2>
            <p className="mb-4 text-[16px] text-[#5a6480]">
              Geen verplichtingen. We bespreken uw administratie, kijken naar
              kansen en geven u een heldere offerte.
            </p>
            <div className="space-y-2">
              {[
                "30 minuten – telefonisch of bij u op kantoor",
                "U ontvangt direct een indicatie van uw maandtarief",
                "Geen verkooppraatjes, alleen advies",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[13px] text-[#3d4760]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#3db54a]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rechterkant: formulier */}
          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-md">
            <div className="mb-4">
              <label className="mb-1 block text-[13px] font-semibold text-[#0f1c3d]">
                Naam *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl border border-[#0f1c3d]/12 px-4 py-2.5 text-[14px] outline-none focus:border-[#3db54a] focus:ring-1 focus:ring-[#3db54a]"
                placeholder="Jan de Vries"
              />
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-[13px] font-semibold text-[#0f1c3d]">
                E-mailadres *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-[#0f1c3d]/12 px-4 py-2.5 text-[14px] outline-none focus:border-[#3db54a] focus:ring-1 focus:ring-[#3db54a]"
                placeholder="jan@bedrijf.nl"
              />
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-[13px] font-semibold text-[#0f1c3d]">
                Bedrijfsnaam
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full rounded-xl border border-[#0f1c3d]/12 px-4 py-2.5 text-[14px] outline-none focus:border-[#3db54a] focus:ring-1 focus:ring-[#3db54a]"
                placeholder="Uw bedrijfsnaam"
              />
            </div>

            <div className="mb-5">
              <label className="mb-1 block text-[13px] font-semibold text-[#0f1c3d]">
                Hoeveel facturen stuurt u per maand?
              </label>
              <select
                value={formData.monthlyInvoices}
                onChange={(e) => setFormData({ ...formData, monthlyInvoices: e.target.value })}
                className="w-full rounded-xl border border-[#0f1c3d]/12 px-4 py-2.5 text-[14px] outline-none focus:border-[#3db54a] focus:ring-1 focus:ring-[#3db54a]"
              >
                <option value="">Maak een keuze</option>
                <option value="0-25">0-25 facturen</option>
                <option value="25-50">25-50 facturen</option>
                <option value="50-150">50-150 facturen</option>
                <option value="150+">150+ facturen</option>
              </select>
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#0f1c3d] py-3.5 text-[14px] font-bold text-white transition-all hover:bg-[#162d57]"
            >
              Plan gratis kennismaking
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            <p className="mt-3 text-center text-[11px] text-[#8a92a6]">
              Geen spam. U krijgt alleen een reactie van ons.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}