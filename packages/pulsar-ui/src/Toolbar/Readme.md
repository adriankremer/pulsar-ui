---
title: "Toolbar"
path: "/components/toolbar"
---

```jsx
import { Toolbar, ToolbarItem, ToolbarContent } from "@pulsar-ui/core";
import { Avatar } from "@pulsar-ui/core";
import { MdMenu } from "react-icons/md";
import Logo from "./logo.svg";

const Example = () => {
  return (
  <Toolbar>
    <ToolbarContent>
      <ToolbarItem>
        <MdMenu />
      </ToolbarItem>
    </ToolbarContent>
    <ToolbarContent position="center">
      <ToolbarItem>
        <img width="50" src={Logo} />
      </ToolbarItem>
    </ToolbarContent>
    <ToolbarContent position="end">
      <Avatar src="https://placekitten.com/40/40" />
    </ToolbarContent>
  </Toolbar>
  );
}
```
