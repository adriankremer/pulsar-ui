import * as React from "react";
import { render } from "react-testing-library";
import Avatar from "../Avatar";

describe("Avatar element", () => {
  it("renders source attribute", () => {
    const { getByTestId } = render(
      <Avatar data-testid="test" src="kitten.jpg" />
    );
    expect(getByTestId("test")).toHaveAttribute("src", "kitten.jpg");
  });
  it("renders image element", () => {
    const { getByTestId } = render(<Avatar data-testid="test" src="" />);
    expect(getByTestId("test")).toBeInstanceOf(HTMLImageElement);
  });
});
