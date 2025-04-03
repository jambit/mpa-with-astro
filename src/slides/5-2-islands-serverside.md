---
title: Inseln
subTitle: Serverseitige Inseln
mode: dark
---

- Teile der Webseite verzögert laden, aber von Server rendern lassen
- Statische Inhalte gut cachebar
- Kombinierbar mit clientseitigen Inseln
- Manuelles Aktivieren je Instanz einer Komponente
- Auch für Astro Komponenten

```astro
<MyComponent server:defer client:visible>
  <div slot="fallback">loading</div>
</MyComponent>
```
