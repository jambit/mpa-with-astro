---
title: Routing
subTitle: API Routes
mode: dark
---

Gleiches Prinzip, nur mit .ts als Dateiendung:

```ts
// src/pages/user-[id].json.ts  -> mysite.com/api/user-1.json
import type { APIRoute } from "astro";

// GET kann build-time sein!
export const GET: APIRoute = ({ params, request }) =>
  new Response(JSON.stringify({ message: `This was a GET for ${params.id}!` }));

export const POST: APIRoute = ({ request }) => new Response(JSON.stringify({ message: "This was a POST!" }));

export const DELETE: APIRoute = ({ request }) => new Response(JSON.stringify({ message: "This was a DELETE!" }));

export const ALL: APIRoute = ({ request }) =>
  new Response(JSON.stringify({ message: `This was a ${request.method}!` }));
```
