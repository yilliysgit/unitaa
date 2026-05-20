import { setRequestLocale } from "next-intl/server";

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function NieuwsPage({
  params,
}: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-4xl font-bold text-[#0f1c3d]">
        Nieuws
      </h1>

      <p className="mt-6 text-lg text-[#5a6480]">
        Binnenkort publiceren wij hier artikelen,
        tips en updates voor ondernemers.
      </p>
    </main>
  );
}