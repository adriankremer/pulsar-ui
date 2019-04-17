import { cx, css } from "emotion";
import { CardContentProps } from "@pulsar-ui/core";
import { PulsarBoxProps } from "./Box";
import { getCssValue } from "./utils/objectToCss";
import { padding } from "./utils/systemVariables";

export function useCardContentProps(
  _: PulsarBoxProps,
  { className, ...htmlProps }: CardContentProps
) {
  const cardContent = css`
    padding: ${getCssValue(padding)};
  `;
  return { ...htmlProps, className: cx(cardContent, className) };
}
