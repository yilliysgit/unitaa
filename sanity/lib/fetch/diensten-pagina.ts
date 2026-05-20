import { client } from "../client";
import { dienstenPageQuery } from "../queries/diensten-pagina";

export async function getDienstenPage() {
  return client.fetch(dienstenPageQuery);
}