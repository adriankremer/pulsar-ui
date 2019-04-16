import { cx, css } from "emotion";
import { usePalette } from "@pulsar-ui/palette";

export function useCardProps(
  { system }: any,
  { className, ...htmlProps }: any
) {
  const color = usePalette(system.palette);

  const card = css`
    content: "${color}";
  `;
  return { ...htmlProps, className: cx(card, className) };
}
