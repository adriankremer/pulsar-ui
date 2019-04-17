---
title: "Card"
path: "/components/card"
---

# Card

```jsx
import { Card, CardContent } from "@pulsar-ui/core";
import { MdPets } from "react-icons/md";

function Example() {
  return (
    <>
      <Card>
        <img src="https://placekitten.com/300/150" />
        <CardContent>
          <strong>Pizzacat</strong>
          <p>
            I'm strong, watch out..
          </p>
        </CardContent>
        <CardContent>
          <MdPets />
          <span>4</span>
        </CardContent>
      </Card>
    </>
    );
}
```
