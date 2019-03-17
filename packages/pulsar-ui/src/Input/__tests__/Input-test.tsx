import * as React from "react";
import { render, fireEvent } from "react-testing-library";
import Input from "../Input";

describe("Input element", () => {
  it("renders attributes", () => {
    const { getByTestId } = render(
      <Input id="test" aria-label="test" data-testid="test" />
    );
    expect(getByTestId("test")).toHaveAttribute("id", "test");
    expect(getByTestId("test")).toHaveAttribute("aria-label", "test");
  });
});

describe("InputText element", () => {
  it("renders with an empty value", () => {
    const { getByTestId } = render(
      <Input id="test" aria-label="test" data-testid="test" />
    );
    const input = getByTestId("test") as HTMLInputElement;
    expect(input.value).toBe("");
  });

  it("renders the entered value", () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = render(
      <Input
        id="test"
        onChange={mockOnChange}
        aria-label="test"
        data-testid="test"
      />
    );
    const input = getByTestId("test") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "foo" } });
    expect(input.value).toBe("foo");
    expect(mockOnChange).toBeCalled();
  });
});

describe("InputCheckbox element", () => {
  it("is checked if clicked", () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = render(
      <Input
        id="test"
        onChange={mockOnChange}
        aria-label="test"
        data-testid="test"
      />
    );
    const checkbox = getByTestId("test") as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(checkbox).toHaveProperty("checked");
  });
});
