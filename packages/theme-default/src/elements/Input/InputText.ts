import { css } from "@pulsar-ui/core";

const InputText = props => {
  const { palette, padding, border } = props.theme;
  return css`
    &:not([type="range"]):not([type="checkbox"]) {
      border: 1px solid ${palette.grayScale[2]};
      padding: ${padding.top} ${padding.right} ${padding.bottom} ${padding.left};
      border-radius: ${border.radius};
      outline: none;
      width: 100%;
    }
  `;
};

export default InputText;
