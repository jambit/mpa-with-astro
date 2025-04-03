---
title: Content Collections
subTitle: Auslesen
mode: dark
---

```astro
---
import { getCollection, render } from "astro:content";

type Props = { post: AnyEntryMap["blog"][string] };

export async function getStaticPaths() {
  // Autocompletion für Collectionnamen
  const posts = await getCollection("blog");

  // Via zod automatisch typisiert!
  return posts.map((post) => ({
    params: { id: post.id },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await render(post);
---

<h1>{post.data.title}</h1>
<Content />
```
