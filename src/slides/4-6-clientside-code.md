---
title: Komponenten
subTitle: Clientside Code
mode: dark
---

- Script-Tags werden gebundelt und einmal für komplette Seite ausgeführt
- Opt-Out via `is:inline`, dann code unverändert.

```astro
---
// Serverseitige Variablen im Frontend nutzen
const message = await getMessage();
---

<button class="foo" data-message={message}>Click Me</button>

<script>
  import { debounce } from "../../utils/debounce";
  const element: HTMLButtonElement = document.querySelector(".foo");
  element.addEventListener(
    "click",
    debounce(() => alert(element.dataset.message), 200),
  );
</script>
```
