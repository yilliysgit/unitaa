import { getContactPage } from "@/sanity/lib/fetch/contact";
import ContactClient from "./ContactClient";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const data = await getContactPage();
  return <ContactClient data={data} locale={locale} />;
}