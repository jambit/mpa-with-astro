---
title: Content Collections
subTitle: Config Definition
mode: dark
---

```ts
import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const dogs = defineCollection({
  loader: file("src/data/dogs.json"),
  schema: /* ... */
});

const blog = defineCollection({
  loader: glob({ pattern: ['*.md'], base: 'src/data/blog' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['Vlog', 'Promotion', 'Review']),
    /* .. */
  }),
});

export const collections = { dogs, blog };
```
