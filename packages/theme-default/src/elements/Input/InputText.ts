import { css } from "@pulsar-ui/core";
import { palette as p, theme } from "styled-tools";

const InputText = css`
  &:not([type="range"]):not([type="checkbox"]) {
    border: 1px solid ${p("grayScale", 2)};
    padding: ${theme("padding.top")} ${theme("padding.right")}
      ${theme("padding.bottom")} ${theme("padding.left")};
    border-radius: ${theme("border.radius")};
    outline: none;
    width: 100%;
  }
`;

export default InputText;
