import {
  PaletteBoxProps,
  useBoxProps as usePaletteBoxProps,
  useDarken
} from "@pulsar-ui/palette";
import { BoxProps } from "@pulsar-ui/core";
import { css, cx } from "emotion";

export type PulsarBoxProps = PaletteBoxProps;

export function useBoxProps(
  { system }: PulsarBoxProps,
  { className, ...htmlProps }: BoxProps
) {
  const {
    style: { backgroundColor }
  } = usePaletteBoxProps({ system });
  const shadow1 = useDarken(backgroundColor, 0.2);
  const shadow2 = useDarken(backgroundColor, 0.3);
  const box = css`
    background-color: ${backgroundColor || "black"};
    border-radius: 0.3rem;
    box-shadow: 0 1px 0 0 ${shadow1}, 0 1px 2px 0 ${shadow2},
      inset 0 0 7px 0 rgba(255, 255, 255, 0.29);
  `;
  return { ...htmlProps, className: cx(box, className) };
}
