import { css, cx } from "emotion";
import { InputProps } from "@pulsar-ui/core";
import { useBoxProps as useBoxPalette } from "@pulsar-ui/palette";
import { PulsarBoxProps } from "./Box";

export function useInputProps(
  { system }: PulsarBoxProps,
  { className, ...htmlProps }: InputProps
) {
  const {
    style: { backgroundColor, color }
  } = useBoxPalette({ system });

  const input = css`
    display: inline-block;
    background-color: ${backgroundColor};
    color: ${color};
    outline: 0;
    border: 0;
    font-size: 0.9rem;
    font-weight: bold;
    padding: 0.3rem 0.8rem;
    margin: 0 0.3rem;
    border-radius: 0.3rem;
  `;

  return { ...htmlProps, className: cx(input, className) };
}
