import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { readFileSync } from "fs";
import matter from "gray-matter";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const indexPath = resolve(__dirname, "../index.md");
const index = readFileSync(indexPath, "utf-8");
const { data } = matter(index);
const features = data.features || [];

export const sidebar = [
  {
    items: features.map(({ title, link }) => ({
      text: title,
      link,
    })),
  },
];
