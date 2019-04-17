import { cx, css } from "emotion";
import { ToolbarItemProps } from "@pulsar-ui/core";
import { PulsarBoxProps } from ".";

export function useToolbarItemProps(
  _: PulsarBoxProps,
  { className, ...htmlProps }: ToolbarItemProps
) {
  const toolbar = css`
    display: grid;
  `;
  return { ...htmlProps, className: cx(toolbar, className) };
}
