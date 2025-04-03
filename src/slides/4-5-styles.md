---
title: Komponenten
subTitle: Styling
mode: dark
---

- Scoped & Global Styles
- TypeScript Import und Links
- Inline CSS, Tailwind, SCSS & mehr

```astro
---
import "package-name/styles.css";
---

<div class="scoped-class">
  <span class:list={["nested-class", !isVisible && "hidden"]}>...</span>
</div>

<style lang="scss">
  .scoped-class {
    /* ... */
  }
</style>
```
