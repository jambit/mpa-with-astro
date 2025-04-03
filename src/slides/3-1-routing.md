---
title: Routing
subTitle: Seiten
mode: dark
---

Dateistruktur definiert URL-Pfade:

```yaml
- src/
  - pages/
    - index.astro            # mysite.com/
    - about.astro            # mysite.com/about
    - about/
      - index.astro          # mysite.com/about
      - me.astro             # mysite.com/about/me
      - employee-[id].astro  # mysite.com/about/employee-123
    - posts/
      - [id].md              # mysite.com/posts/123/astro
      - [id]/
        - comments.astro     # mysite.com/posts/123/comments
    - [...rest].astro        # mysite.com/well/now/you/know
```
