---
title: Komponenten
subTitle: Page Komponenten
mode: dark
---

```astro
---
// src/pages/users/index.astro
import Layout from "../layouts/Layout.astro";
import User from "../components/User.astro";
import { userApi } from "../apis/user";

const users = await userApi.getUsers();
---

<Layout>
  <ul>
    {
      users.map(({ id, name }) => (
        <li>
          <User id={id} name={name} />
        </li>
      ))
    }
  </ul>
</Layout>
```
