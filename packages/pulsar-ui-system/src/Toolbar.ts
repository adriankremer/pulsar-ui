import { cx, css } from "emotion";
import { ToolbarProps } from "@pulsar-ui/core";
import { PulsarBoxProps } from "./Box";

export function useToolbarProps(
  _: PulsarBoxProps,
  { className, ...htmlProps }: ToolbarProps
) {
  const toolbar = css`
    display: grid;
    grid-gap: 15px 20px;
    grid-template: "start center end"/ 1fr auto 1fr;
    padding: 0.5rem;
  `;
  return { ...htmlProps, className: cx(toolbar, className) };
}
