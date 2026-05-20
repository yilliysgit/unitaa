import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  CheckCircle2,
  FolderOpen,
  MessageSquare,
} from "lucide-react";
import { getLocalizedValue } from "@/sanity/lib/getLocalizedValue";

const iconList: LucideIcon[] = [
  MessageSquare,
  FolderOpen,
  CheckCircle2,
  BarChart3,
];

interface LocaleString {
  nl?: string;
  en?: string;
  tr?: string;
}

interface ProcessStep {
  title?: LocaleString;
  description?: LocaleString;
}

interface DienstData {
  process?: ProcessStep[];
}

interface ServiceProcessProps {
  data?: DienstData;
  locale: string;
}

export default function ServiceProcess({ data, locale }: ServiceProcessProps) {
  const t = (val?: LocaleString) => getLocalizedValue(val, locale);

  return (
    <section className="bg-[#f4f6fb] py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
            Werkwijze
          </p>
          <h2 className="mb-4 text-[40px] font-extrabold leading-[1.08] tracking-[-1px] text-[#0f1c3d] sm:text-[50px]">
            Zo eenvoudig werkt
            <span className="block text-[#3db54a]">samenwerken met Unit AA.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {data?.process?.map((step, i) => {
            const Icon = iconList[i % iconList.length];
            return (
              <div
                key={i}
                className="relative rounded-[20px] border border-[#0f1c3d]/8 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(15,28,61,0.08)]"
              >
                <div className="absolute right-5 top-5 text-[12px] font-bold text-[#c0c8d8]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#f0f9f1]">
                  <Icon className="h-5 w-5 text-[#3db54a]" />
                </div>
                <h3 className="mb-3 text-[18px] font-bold text-[#0f1c3d]">
                  {t(step.title)}
                </h3>
                <p className="text-[14px] leading-[1.75] text-[#5a6480]">
                  {t(step.description)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}