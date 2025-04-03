---
title: Komponenten
subTitle: UI Frameworks
background: partial/astro-frameworks.png
mode: dark
---

- Support für React, Preact, Vue, Svelte, SolidJS, Alpine.js
- Von Haus aus nur serverseitig! (Clientside: später...)
- Mixen möglich (sollte abgeworgen werden).
- Auch nesting verschiedener Frameworks möglich.
- Shared states mit Nanostores.

```astro
---
import MyReactComponent from "../components/MyReactComponent.tsx";
import MySvelteComponent from "../components/MySvelteComponent.tsx";
import MyVueComponent from "../components/MyVueComponent.vue";
---

<MyReactComponent />
<MySvelteComponent />
<MyVueComponent />
```
