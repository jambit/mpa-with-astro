---
title: Komponenten
subTitle: Page Komponenten mit Parametern
mode: dark
---

```astro
---
// src/pages/users/[id].astro
import Layout from "../layouts/Layout.astro";
import User from "../components/User.astro";
import { userApi } from "../apis/user";

export async function getStaticPaths() {
  const users = await userApi.getUsers();

  return users.map(({ id, name }) => ({
    params: { id },
    props: { id, name },
  }));
}

interface Props {
  id: string;
  name: string;
}

const { id, name } = Astro.props;
---

<Layout>
  <User id={id} name={name} />
</Layout>
```
