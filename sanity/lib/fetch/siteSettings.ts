import { client } from "../client";
import { siteSettingsQuery } from "../queries/siteSettings";

export async function getSiteSettings() {
  return client.fetch(siteSettingsQuery);
}