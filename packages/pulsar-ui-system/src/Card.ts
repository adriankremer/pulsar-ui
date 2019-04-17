import { cx, css } from "emotion";
import { CardProps } from "@pulsar-ui/core";
import { PulsarBoxProps } from "./Box";

export function useCardProps(
  _: PulsarBoxProps,
  { className, ...htmlProps }: CardProps
) {
  const card = css`
    display: inline-grid;
    grid-template-rows: "start center end"/ 1fr auto 1fr;
    border-radius: 0.3rem;
    overflow: hidden;
  `;
  return { ...htmlProps, className: cx(card, className) };
}
