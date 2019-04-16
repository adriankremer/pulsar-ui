import { css, cx } from "emotion";
import { usePalette, useContrast } from "@pulsar-ui/palette";

export function useButtonProps(
  { system }: any,
  { className, ...htmlProps }: any
) {
  const color = usePalette(system && system.palette);

  const button = css`
    display: inline-block;
    background-color: ${color};
    color: ${useContrast(color)};
    outline: 0;
    border: 0;
    font-size: 0.9rem;
    font-weight: bold;
    padding: 0.3rem 0.8rem;
    margin: 0 0.3rem;
    border-radius: 5px;
  `;

  return { ...htmlProps, className: cx(button, className) };
}
