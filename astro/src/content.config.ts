// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders"; // The essential new import

const blog = defineCollection({
  // Use the glob loader to point to your markdown files
  // Ensure the 'base' matches where your .md files actually live
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(), // Coerce ensures strings from MD are Date objects
  }),
});

// If you have other collections (like 'projects'), add them here with their own loader
export const collections = { blog };
