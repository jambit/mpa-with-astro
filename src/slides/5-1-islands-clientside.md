---
title: Inseln
subTitle: Clientseitige Inseln
mode: dark
---

- Interaktive UI Komponenten clientseitig hydrieren
- Inseln unabhängig voneinander, können aber kommunizieren und state teilen
- Manuelles Aktivieren je Instanz einer Komponente
- Nur für UI Frameworks, nicht für Astro Komponenten
- Separates JS-Bundle, wird erst geladen sobald notwendig

```astro
<!-- Beim Laden der Webseite -->
<MyReactComponent client:load />
<!-- Sobald der Browser im Idle ist -->
<MyReactComponent client:idle />
<!-- Sobald die Komponente im Viewport ist-->
<MyReactComponent client:visible />
<!-- Wenn ein Media-Query greift -->
<MyReactComponent client:media="(max-width: 50em)" />
<!-- Rein clientseitig ausführen -->
<MyReactComponent client:only="react">
  <div slot="fallback">Loading</div>
</MyReactComponent>
```
