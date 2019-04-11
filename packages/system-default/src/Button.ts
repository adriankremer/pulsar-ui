import { css, cx } from "emotion";

export const useButtonProps = ({ system }, { className, ...htmlProps }) => {
  console.log(system);
  const button = css`
    background-color: salmon;
  `;

  return { ...htmlProps, className: cx(button, className) };
};
