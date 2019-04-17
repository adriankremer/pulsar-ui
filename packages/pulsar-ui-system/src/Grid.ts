import { cx, css } from "emotion";
import { ToolbarProps } from "@pulsar-ui/core";
import { PulsarBoxProps } from "./Box";

export function useGridProps(
  _: PulsarBoxProps,
  { className, ...htmlProps }: ToolbarProps
) {
  const grid = css`
    display: grid;
    grid-gap: 15px 20px;
    grid-template-columns: repeat(12, 1fr);
  `;
  return { ...htmlProps, className: cx(grid, className) };
}
