import { client } from "../client";
import { dienstQuery } from "../queries/dienst";

export async function getDienst(slug: string, locale: string) {
  return client.fetch(dienstQuery, { slug, locale });
}