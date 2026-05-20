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

async function importDoc(filePath) {
  const raw = readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw);

  const id = data._id;
  if (!id) {
    console.error("Geen _id gevonden in JSON");
    process.exit(1);
  }

  const existing = await client.fetch(`*[_id == $id][0]._id`, { id });

  if (existing) {
    console.log(`Document "${id}" bestaat al — updaten...`);
    await client.patch(id).set(data).commit();
    console.log(`✓ Document "${id}" geüpdatet`);
  } else {
    console.log(`Document "${id}" aanmaken...`);
    await client.createOrReplace(data);
    console.log(`✓ Document "${id}" aangemaakt`);
  }
}

const file = process.argv[2];
if (!file) {
  console.error("Gebruik: node scripts/import-doc.mjs scripts/data/contact.json");
  process.exit(1);
}

importDoc(resolve(file)).catch(console.error);