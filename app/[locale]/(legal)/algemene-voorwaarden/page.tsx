// app/[locale]/(legal)/algemene-voorwaarden/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Download,
  FileText,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden | Unit AA",
  description:
    "Algemene voorwaarden van Unit AA voor administratie, boekhouding, belastingaangiftes en financieel advies.",
};

const sections = [
  "Definities",
  "Toepasselijkheid",
  "Diensten",
  "Totstandkoming overeenkomst",
  "Verplichtingen opdrachtgever",
  "Uitvoering van de opdracht",
  "Vastgoed- en aankoopbegeleiding",
  "Tarieven en betaling",
  "Duur en beëindiging",
  "Aansprakelijkheid",
  "Privacy en vertrouwelijkheid",
  "Toepasselijk recht",
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "en")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function Section({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={slugify(title)} className="scroll-mt-28 border-b border-slate-200 pb-10 last:border-0">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7AC943]/10 text-sm font-black text-[#1E396B]">
          {number}
        </span>
        <h2 className="text-2xl font-black tracking-tight text-[#1E396B]">
          {title}
        </h2>
      </div>
      <div className="prose prose-slate max-w-none prose-p:leading-8 prose-li:leading-8 prose-strong:text-[#1E396B]">
        {children}
      </div>
    </section>
  );
}

export default function AlgemeneVoorwaardenPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1E396B] to-[#10264A] pt-32 pb-20">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Terug naar home
          </Link>

          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur">
              <Shield className="h-4 w-4 text-[#7AC943]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">
                Juridische informatie
              </span>
            </div>

            <h1 className="font-syne text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl">
              Algemene
              <span className="block text-[#7AC943]">Voorwaarden</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Deze algemene voorwaarden zijn van toepassing op alle diensten van
              Unit AA, waaronder administratie, boekhouding,
              belastingaangiftes en financieel advies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
              <div className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#7AC943]" />
                Laatst bijgewerkt: januari 2026
              </div>
              <div className="inline-flex items-center gap-2">
                <FileText className="h-4 w-4 text-[#7AC943]" />
                12 artikelen
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:px-8">
          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Company card */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#7AC943]/10">
                    <Landmark className="h-5 w-5 text-[#7AC943]" />
                  </div>
                  <div>
                    <h3 className="font-syne text-lg font-black text-[#1E396B]">
                      Unit AA
                    </h3>
                    <p className="text-sm text-slate-500">Administratiekantoor</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#7AC943]" />
                    <p className="text-slate-600">
                      Jarmuiden 27F
                      <br />
                      1046 AC Amsterdam
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#7AC943]" />
                    <p className="text-slate-600">info@unitaa.nl</p>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#7AC943]" />
                    <p className="text-slate-600">06 15 52 38 64</p>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-4 text-xs text-slate-500">
                  KvK: 63764741
                  <br />
                  BTW: NL002257703B15
                </div>
              </div>

              {/* TOC */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-sm font-black uppercase tracking-wide text-[#1E396B]">
                  Inhoudsopgave
                </h3>
                <nav className="space-y-2">
                  {sections.map((section, index) => (
                    <a
                      key={section}
                      href={`#${slugify(section)}`}
                      className="block text-sm text-slate-600 transition hover:text-[#1E396B]"
                    >
                      {index + 1}. {section}
                    </a>
                  ))}
                </nav>
              </div>

              {/* PDF button */}
              <Link
                href="/algemene-voorwaarden.pdf"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#1E396B]/10 bg-white px-4 py-3 text-sm font-bold text-[#1E396B] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </Link>
            </div>
          </aside>

          {/* Main content */}
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
            <div className="space-y-10">
              <Section number={1} title="Definities">
                <p>
                  In deze algemene voorwaarden wordt verstaan onder:
                </p>
                <ul>
                  <li><strong>Opdrachtnemer:</strong> Unit AA.</li>
                  <li><strong>Opdrachtgever:</strong> de natuurlijke persoon of rechtspersoon die gebruikmaakt van de diensten van Unit AA.</li>
                  <li><strong>Diensten:</strong> administratie, boekhouding, belastingaangiftes en financieel advies.</li>
                </ul>
              </Section>

              <Section number={2} title="Toepasselijkheid">
                <ol>
                  <li>Deze voorwaarden zijn van toepassing op alle offertes, overeenkomsten en diensten van Unit AA.</li>
                  <li>Afwijkingen zijn alleen geldig indien schriftelijk overeengekomen.</li>
                  <li>Algemene voorwaarden van opdrachtgever worden uitdrukkelijk uitgesloten.</li>
                </ol>
              </Section>

              <Section number={3} title="Diensten">
                <p>Unit AA biedt onder meer de volgende diensten aan:</p>
                <ul>
                  <li>Boekhouding en administratie</li>
                  <li>BTW-, inkomstenbelasting- en VPB-aangiftes</li>
                  <li>Jaarrekeningen</li>
                  <li>Financieel advies</li>
                  <li>Ondersteuning bij financieringsaanvragen</li>
                </ul>
              </Section>

              <Section number={4} title="Totstandkoming overeenkomst">
                <ol>
                  <li>Een overeenkomst komt tot stand zodra opdrachtgever akkoord geeft op een offerte of voorstel.</li>
                  <li>Unit AA behoudt zich het recht voor opdrachten te weigeren.</li>
                </ol>
              </Section>

              <Section number={5} title="Verplichtingen opdrachtgever">
                <ol>
                  <li>Opdrachtgever levert tijdig, volledig en correct alle benodigde informatie aan.</li>
                  <li>Opdrachtgever blijft verantwoordelijk voor de juistheid van aangeleverde gegevens.</li>
                  <li>Boetes als gevolg van te late of onvolledige aanlevering zijn voor rekening van opdrachtgever.</li>
                </ol>
              </Section>

              <Section number={6} title="Uitvoering van de opdracht">
                <ol>
                  <li>Unit AA voert werkzaamheden uit naar beste inzicht en vermogen.</li>
                  <li>Er geldt een inspanningsverplichting en geen resultaatsverplichting.</li>
                  <li>Opgegeven termijnen zijn indicatief.</li>
                </ol>
              </Section>

              <Section number={7} title="Vastgoed- en aankoopbegeleiding">
                <p>
                  Indien Unit AA ondersteuning biedt bij vastgoed- of aankooptrajecten,
                  betreft dit uitsluitend begeleiding. Er worden geen garanties gegeven
                  ten aanzien van financiering, aankoop of rendement.
                </p>
              </Section>

              <Section number={8} title="Tarieven en betaling">
                <ol>
                  <li>Alle tarieven zijn exclusief btw, tenzij anders vermeld.</li>
                  <li>Facturen dienen binnen 14 dagen te worden voldaan.</li>
                  <li>Meerwerk wordt afzonderlijk in rekening gebracht.</li>
                </ol>
              </Section>

              <Section number={9} title="Duur en beëindiging">
                <ol>
                  <li>Doorlopende overeenkomsten worden aangegaan voor onbepaalde tijd.</li>
                  <li>Opzegging is mogelijk met een opzegtermijn van één maand.</li>
                </ol>
              </Section>

              <Section number={10} title="Aansprakelijkheid">
                <ol>
                  <li>De aansprakelijkheid is beperkt tot het bedrag dat door de aansprakelijkheidsverzekering wordt uitgekeerd.</li>
                  <li>Indien geen uitkering plaatsvindt, is aansprakelijkheid beperkt tot maximaal drie maanden dienstverlening.</li>
                </ol>
              </Section>

              <Section number={11} title="Privacy en vertrouwelijkheid">
                <ol>
                  <li>Alle gegevens worden vertrouwelijk behandeld.</li>
                  <li>Persoonsgegevens worden verwerkt conform de AVG.</li>
                </ol>
              </Section>

              <Section number={12} title="Toepasselijk recht">
                <p>
                  Op alle overeenkomsten tussen Unit AA en opdrachtgever is
                  uitsluitend Nederlands recht van toepassing.
                </p>
              </Section>
            </div>

            <div className="mt-12 rounded-3xl bg-[#F7F8FA] p-6 text-sm leading-7 text-slate-600">
              Deze algemene voorwaarden zijn op verzoek als PDF beschikbaar.
              Heeft u vragen? Neem contact op via info@unitaa.nl.
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
