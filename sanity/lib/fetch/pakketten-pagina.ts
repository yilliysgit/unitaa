import { client } from "../client";
import { pakkettenPageQuery } from "../pakketten-pagina";

export async function getPakkettenPage() {
  return client.fetch(pakkettenPageQuery);
}