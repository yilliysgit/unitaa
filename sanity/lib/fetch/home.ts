import { client } from "../client";
import { homePageQuery } from "../queries/home";

export async function getHomePage() {
  return client.fetch(homePageQuery);
}