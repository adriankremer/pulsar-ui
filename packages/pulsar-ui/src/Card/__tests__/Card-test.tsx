import * as React from "react";
import { render } from "react-testing-library";
import Card from "../Card";

describe("Card element", () => {
  it("renders children", () => {
    const { container, getByTestId } = render(
      <Card>
        <p data-testid="test">test</p>
      </Card>
    );
    expect(container).toContainElement(getByTestId("test"));
  });
});
