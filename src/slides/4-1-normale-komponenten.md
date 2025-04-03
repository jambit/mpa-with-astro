---
title: Komponenten
subTitle: Normale Komponenten
mode: dark
---

```astro
---
// src/components/User.astro
import Layout from "../layouts/Layout.astro";

interface Props {
  id: string;
  name: string;
}

const { id, name } = Astro.props;
---

<div>
  <a href={`/users/${id}`}>
    {name}
  </a>
  <!-- ... -->
</div>
```
