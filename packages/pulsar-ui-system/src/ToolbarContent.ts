import { cx, css } from "emotion";
import { ToolbarContentProps } from "@pulsar-ui/core";
import { PulsarBoxProps } from ".";

export function useToolbarContentProps(
  _: PulsarBoxProps,
  { className, ...htmlProps }: ToolbarContentProps
) {
  const { position } = htmlProps;
  const toolbar = css`
    display: grid;
    grid-area: ${position};
    justify-content: ${position};
    align-items: center;
    grid-auto-flow: column;
    grid-auto-columns: min-content;
    grid-gap: inherit;
  `;
  return { ...htmlProps, className: cx(toolbar, className) };
}
