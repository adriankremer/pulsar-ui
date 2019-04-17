import { cx, css } from "emotion";
import { ToolbarProps } from "@pulsar-ui/core";
import { useBoxProps as useBoxPalette } from "@pulsar-ui/palette";
import { PulsarBoxProps } from "./Box";

export function useToolbarProps(
  { system }: PulsarBoxProps,
  { className, ...htmlProps }: ToolbarProps
) {
  const {
    style: { backgroundColor }
  } = useBoxPalette({ system });
  const toolbar = css`
    display: grid;
    grid-gap: 15px 20px;
    grid-template: "start center end"/ 1fr auto 1fr;
    padding: 0.5rem;
    background-color: ${backgroundColor};
  `;
  return { ...htmlProps, className: cx(toolbar, className) };
}
