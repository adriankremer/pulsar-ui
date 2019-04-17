import {
  PaletteBoxProps,
  useBoxProps as useBoxPalette
} from "@pulsar-ui/palette";
import { BoxProps } from "@pulsar-ui/core";
import { css, cx } from "emotion";

export type PulsarBoxProps = PaletteBoxProps;

export function useBoxProps(
  { system }: PulsarBoxProps,
  { className, ...htmlProps }: BoxProps
) {
  const { style } = useBoxPalette({ system });
  const box = css`
    margin: unset;
    padding: unset;
    border: unset;
    background: unset;
    font: unset;
    font-family: inherit;
    font-size: 100%;
    box-sizing: border-box;

    &:focus:not(:focus-visible) {
      outline: none;
    }

    ${style}
  `;
  return { ...htmlProps, className: cx(box, className) };
}
