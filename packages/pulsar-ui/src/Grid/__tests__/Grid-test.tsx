import * as React from "react";
import { render } from "react-testing-library";
import Grid from "../Grid";

test("html, attr", () => {
  const { getByTestId } = render(
    <Grid id="grid" aria-label="test" data-testid="test" />
  );
  expect(getByTestId("test")).toHaveAttribute("id", "grid");
  expect(getByTestId("test")).toHaveAttribute("aria-label", "test");
});

test("styles", () => {
  const { container } = render(<Grid />);
  expect(container.firstChild).toMatchSnapshot();
});
