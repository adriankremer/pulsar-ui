import * as React from "react";
import { render } from "react-testing-library";
import GridCell from "../GridCell";

test("html, attr", () => {
  const { getByTestId } = render(
    <GridCell id="grid" aria-label="test" data-testid="test" />
  );
  expect(getByTestId("test")).toHaveAttribute("id", "grid");
  expect(getByTestId("test")).toHaveAttribute("aria-label", "test");
});

test("styles", () => {
  const { container } = render(<GridCell />);
  expect(container.firstChild).toMatchSnapshot();
});
