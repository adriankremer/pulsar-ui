import { css } from "pulsar-ui";
import { palette as p, prop } from "styled-tools";

const SliderThumb = css`
  height: 16px;
  width: 16px;
  border-radius: 16px;
  background: ${p("primary", 1)};
  cursor: pointer;
  margin-top: -4px;
`;

const SliderTrack = css`
  width: 100%;
  height: 8px;
  cursor: pointer;
  border-radius: 8px;
  background: ${p("grayScale", 1)};
`;

const StepIndicator = css`
  position: relative;
  &:before {
    content: "";
    height: 8px;
    width: 1px;
    position: absolute;
    top: calc(100% + 8px);
    background-color: ${p("grayScale", 2)};
    right: 8px;
  }
  &:after {
    content: "";
    position: absolute;
    top: calc(100% + 8px);
    background-image: linear-gradient(
      90deg,
      ${p("grayScale", 2)} 1px,
      transparent 1px
    );
    background-size: ${prop("step")}%;
    left: 0;
    right: 0;
    height: 8px;
    background-color: transparent;
    margin: 0 8px;
  }
`;

const InputRange = css`
  &[type="range"] {
    ${StepIndicator}
    -webkit-appearance: none;
    margin: 18px 0;
    width: 100%;
    &:focus {
      outline: none;
    }
    &::-webkit-slider-thumb {
      ${SliderThumb}
      -webkit-appearance: none;
    }
    &::-webkit-slider-runnable-track {
      ${SliderTrack}
    }
    &::-moz-range-thumb {
      ${SliderThumb}
    }
    &::-moz-range-track {
      ${SliderTrack}
    }
    &::-ms-thumb {
      ${SliderThumb}
    }
    &::-ms-track {
      ${SliderTrack}
      color: transparent;
    }
    &::-ms-fill-lower {
      ${SliderTrack}
    }
    &::-ms-fill-upper {
      ${SliderTrack}
    }
  }
`;

export default InputRange;
