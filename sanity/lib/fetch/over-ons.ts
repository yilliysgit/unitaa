import { client } from "../client";
import { overOnsPageQuery } from "../queries/over-ons";

export async function getOverOnsPage() {
  return client.fetch(overOnsPageQuery);
}