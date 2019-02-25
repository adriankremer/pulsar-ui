import { css } from "namics-ui";
import { palette as p, theme } from "styled-tools";

const InputText = css`
  &:not([type="range"]) {
    border: 1px solid ${p("grayScale", 2)};
    padding: ${theme("padding.top")} ${theme("padding.right")}
      ${theme("padding.bottom")} ${theme("padding.left")};
    border-radius: 3px;
    outline: none;
    width: 100%;
  }
`;

export default InputText;