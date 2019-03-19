import { css } from "@pulsar-ui/core";

const sliderThumb = props => css`
  height: 16px;
  width: 16px;
  border-radius: 16px;
  background: ${props.theme.palette.primary[1]};
  cursor: pointer;
  margin-top: -4px;
`;

const sliderTrack = props => css`
  width: 100%;
  height: 8px;
  cursor: pointer;
  border-radius: 8px;
  background: ${props.theme.palette.grayScale[1]};
`;

const stepIndicator = props => css`
  position: relative;
  &:before {
    content: "";
    height: 8px;
    width: 1px;
    position: absolute;
    top: calc(100% + 8px);
    background-color: ${props.theme.palette.grayScale[2]};
    right: 8px;
  }
  &:after {
    content: "";
    position: absolute;
    top: calc(100% + 8px);
    background-image: linear-gradient(
      90deg,
      ${props.theme.palette.grayScale[2]} 1px,
      transparent 1px
    );
    background-size: ${props.step}%;
    left: 0;
    right: 0;
    height: 8px;
    background-color: transparent;
    margin: 0 8px;
  }
`;

const InputRange = props => css`
  &[type="range"] {
    ${stepIndicator(props)};
    -webkit-appearance: none;
    margin: 18px 0;
    width: 100%;
    &:focus {
      outline: none;
    }
    &::-webkit-slider-thumb {
      ${sliderThumb(props)};
      -webkit-appearance: none;
    }
    &::-webkit-slider-runnable-track {
      ${sliderTrack(props)};
    }
    &::-moz-range-thumb {
      ${sliderThumb(props)};
    }
    &::-moz-range-track {
      ${sliderTrack(props)};
    }
    &::-ms-thumb {
      ${sliderThumb(props)};
    }
    &::-ms-track {
      ${sliderTrack(props)};
      color: transparent;
    }
    &::-ms-fill-lower {
      ${sliderTrack(props)};
    }
    &::-ms-fill-upper {
      ${sliderTrack(props)};
    }
  }
`;

export default InputRange;
