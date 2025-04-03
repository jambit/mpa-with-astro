---
title: Komponenten
subTitle: Komponenten Slots
mode: dark
---

Wenn die Parent-Komponente Slots definiert:

```astro
<div class="card">
  <div class="card-head">
    <h2>{title}</h2>
    <div class="card-actions"><slot name="actions" /></div>
  </div>
  <div class="card-body">
    <slot />
  </div>
</div>
```

Können Kinder in diesen platziert werden:

```astro
<Card title="Super Mario">
  <div>It's me!</div>
  <button slot="actions">delete</button>
</Card>
```
