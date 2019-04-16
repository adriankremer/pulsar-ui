import React from "react";
import { render } from "react-testing-library";
import { Tabbable } from "../Tabbable";

test("render", () => {
  const { getByText } = render(<Tabbable>test</Tabbable>);
  expect(getByText("test")).toMatchInlineSnapshot(`
<div
  tabindex="0"
>
  test
</div>
`);
});
