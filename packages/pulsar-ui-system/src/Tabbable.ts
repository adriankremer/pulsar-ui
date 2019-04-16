import { AvatarProps } from "@pulsar-ui/core";
import { useBoxProps as useBoxPalette, useFade } from "@pulsar-ui/palette";
import { css, cx } from "emotion";
import { PulsarBoxProps } from "./Box";

export function useTabbableProps(
  { system }: PulsarBoxProps,
  { className, ...htmlProps }: AvatarProps
) {
  const {
    style: { backgroundColor }
  } = useBoxPalette({ system });
  const focusColor = useFade(backgroundColor, 0.8);
  const tabbable = css`
    transition: box-shadow 0.2s ease-in-out;
    outline: 0;
    &:focus {
      box-shadow: 0 0 0 0.2rem ${focusColor};
    }
  `;

  return { ...htmlProps, className: cx(tabbable, className) };
}
