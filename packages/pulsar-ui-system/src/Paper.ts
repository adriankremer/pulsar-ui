import { AvatarProps } from "@pulsar-ui/core";
import { useBoxProps as useBoxPalette, useDarken } from "@pulsar-ui/palette";
import { css, cx } from "emotion";
import { PulsarBoxProps } from "./Box";

export function usePaperProps(
  { system }: PulsarBoxProps,
  { className, ...htmlProps }: AvatarProps
) {
  const {
    style: { backgroundColor, color }
  } = useBoxPalette({ system });
  const shadow1 = useDarken(backgroundColor, 0.2);
  const shadow2 = useDarken(backgroundColor, 0.3);

  const paper = css`
    display: inline-block;
    box-shadow: 0 1px 0 0 ${shadow1}, 0 1px 2px 0 ${shadow2};
  `;

  return { ...htmlProps, className: cx(paper, className) };
}
