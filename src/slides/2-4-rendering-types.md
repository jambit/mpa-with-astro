---
title: Der Weg zu Astro
subTitle: Rendering Types
mode: dark
---

### Static Site Generation (SSG)

- Server erzeugt HTML und CSS
- Von Haus aus kein JS. Dies muss explizit, punktuell freigeschaltet werden.
- Inselarchitektur erlaubt, einzelne Elemente clientseitig bei Bedarf zu hydrieren oder nachzuladen.
- Alles wird build-time erzeugt

### Server Side Rendering (SSR)

- Seiten können on-demand angefragt werden (server muss laufen)

### Hybrid Rendering

- Kombination aus SSR und SSG, einzelne Seiten können build-time erzeugt werden und andere on-demand.
