import { cx, css } from "emotion";
import { CardProps } from "@pulsar-ui/core";
import {
  useBoxProps as usePaletteBoxProps,
  getPalette,
  useContrast
} from "@pulsar-ui/palette";
import { PulsarBoxProps } from "./Box";

export function useCardProps(
  { system }: PulsarBoxProps,
  { className, ...htmlProps }: CardProps
) {
  const {
    style: { backgroundColor }
  } = usePaletteBoxProps({ system });

  const defaultBackgroundColor = system
    ? backgroundColor
    : getPalette(undefined, "white");

  const color = useContrast(defaultBackgroundColor);

  const card = css`
    background-color: ${defaultBackgroundColor};
    color: ${color};
    border-radius: 0.3rem;
  `;
  return { ...htmlProps, className: cx(card, className) };
}
