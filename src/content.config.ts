import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const slides = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/slides" }),
    schema: z.object({
        title: z.string(),
        subTitle: z.string().optional(),
        mode: z.enum(["dark", "light"]),
        logoMode: z.enum(["dark", "light", "alt"]).optional(),
        logoShadow: z.boolean().optional(),
        background: z.string().optional(),
        bgCredits: z.string().optional(),
        bgBrightness: z.string().optional(),
        type: z.enum(["agenda"]).optional(),
    }),
});

export const collections = { slides };
