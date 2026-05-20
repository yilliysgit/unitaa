import { client } from "../client";
import { contactPageQuery } from "../contact";

export async function getContactPage() {
  return client.fetch(contactPageQuery);
}