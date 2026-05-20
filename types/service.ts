// types/service.ts

/* -------------------------------------------------------------------------- */
/* Herbruikbare types                                                          */
/* -------------------------------------------------------------------------- */

export interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceStep {
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceStat {
  value: string;
  label: string;
  icon?: string;
}

export interface ServiceTestimonial {
  quote: string;
  author: string;
  company?: string;
}

export interface ServiceReview {
  name: string;
  company: string;
  quote: string;
  initials?: string;
  rating?: number;
}

export interface ServiceSeo {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
}

/* -------------------------------------------------------------------------- */
/* Pricing                                                                     */
/* -------------------------------------------------------------------------- */

export interface ServicePricing {
  startingPrice?: number;
  priceLabel?: string;
  unit?: string;
  note?: string;
}

/* -------------------------------------------------------------------------- */
/* CTA                                                                         */
/* -------------------------------------------------------------------------- */

export interface ServiceCta {
  title: string;
  description?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

/* -------------------------------------------------------------------------- */
/* Main Service Type                                                           */
/* -------------------------------------------------------------------------- */

// Voeg dit toe aan je Service interface in types/service.ts

export interface Service {
  slug: string;

  title: string;
  shortTitle?: string;

  eyebrow?: string;
  subtitle?: string;

  description: string;
  longDescription?: string;

  image: string;
  imageAlt?: string;

  location?: string;

  /* Hero */
  trustItems?: string[];
  stats?: ServiceStat[];
  testimonial?: ServiceTestimonial;

  /* Content */
  introTrustItems?: string[];

  includedItems?: ServiceFeature[];
  includedDescription?: string;
  includedFooterNote?: string;

  benefits?: ServiceItem[];

  process?: ServiceStep[];

  faqs?: ServiceFaq[];

  /* Pricing */
  pricing?: ServicePricing;

  /* CTA's */
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;

  /* Homepage / sorting */
  featured?: boolean;
  order?: number;

  /* Related services */
  relatedServices?: string[];

  /* SEO */
  seo?: ServiceSeo;
}
/* -------------------------------------------------------------------------- */
/* Collection                                                                  */
/* -------------------------------------------------------------------------- */

export type Services = Record<string, Service>;