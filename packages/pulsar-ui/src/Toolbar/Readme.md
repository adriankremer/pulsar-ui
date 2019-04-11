---
title: "Toolbar"
path: "/components/toolbar"
---

```js
import { Toolbar } from "@pulsar-ui/core";
import { Avatar } from "@pulsar-ui/core";

const Example = () => {
  return (
  <Toolbar grid="8px 20px">
    <Toolbar.Content>
    ...
    </Toolbar.Content>
    <Toolbar.Content position="center">
      ...
    </Toolbar.Content>
    <Toolbar.Content position="end">
      <Avatar src="https://placekitten.com/100/100" />
    </Toolbar.Content>
  </Toolbar>
  );
}
```
