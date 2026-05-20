import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { resolve } from "path";

const client = createClient({
  projectId: "xuy6fqzz",
  dataset: "production",
  token: "skVG4BBa1jF8rEfaqn3bczD8m5CPCocrEGLGzNJ8jYjiJDWttQ9mmTeVY6rn0MC7yNq4fV0ylLP1V43K7Kbp14ultPuul8wU520o2ForuemLKt1OTLZrL76oNOxcZJN3Nurnay1taq05vhNaLeEEkOzjbvtWifpEpFmTje7X137sRfOSxQfw",
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function importDienst(filePath) {
  const raw = readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw);

  const slug = data.slug?.nl?.current;
  if (!slug) {
    console.error("Geen NL slug gevonden in JSON");
    process.exit(1);
  }

  const existing = await client.fetch(
    `*[_type == "dienst" && slug.nl.current == $slug][0]._id`,
    { slug }
  );

  if (existing) {
    console.log(`Dienst "${slug}" bestaat al — updaten...`);
    await client.patch(existing).set(data).commit();
    console.log(`✓ Dienst "${slug}" geüpdatet`);
  } else {
    console.log(`Dienst "${slug}" aanmaken...`);
    await client.create(data);
    console.log(`✓ Dienst "${slug}" aangemaakt`);
  }
}

const file = process.argv[2];
if (!file) {
  console.error("Gebruik: node scripts/import-dienst.mjs scripts/data/administratie.json");
  process.exit(1);
}

importDienst(resolve(file)).catch(console.error);