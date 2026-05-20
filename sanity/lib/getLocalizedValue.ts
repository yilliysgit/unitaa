// lib/getLocalizedValue.ts

export interface LocalizedValue {
  nl?: string;
  en?: string;
  tr?: string;
}

export function getLocalizedValue(
  value: LocalizedValue | undefined,
  locale: string,
  fallback = ""
): string {
  if (!value) return fallback;

  return (
    value[locale as keyof LocalizedValue] ??
    value.nl ??
    value.en ??
    value.tr ??
    fallback
  );
}