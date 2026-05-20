import { client } from "../client";
import { dienstenQuery } from "../queries/diensten";

export async function getDiensten() {
  return client.fetch(dienstenQuery);
}