import { css, cx } from "emotion";

export function useButtonProps(
  { system }: any,
  { className, ...htmlProps }: any
) {
  console.log(system);
  const button = css`
    background-color: salmon;
  `;

  return { ...htmlProps, className: cx(button, className) };
}
