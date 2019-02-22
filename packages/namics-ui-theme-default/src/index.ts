import { css } from "namics-ui";
import { palette as p } from "styled-tools";

export const palette = {
  white: "#FFFDFD",
  whiteText: p("black"),
  black: "#2B2B2B",
  blackText: p("white"),
  primary: ["#3CFFB5", "#36E5A3", "#2DBF88", "#1E7F5A", "#0F402D"],
  primaryText: [p("black"), p("black"), p("white"), p("white"), p("white")],
  secondary: ["#DFBBFF", "#C9A8E5", "#A78CBF", "#705D7F", "#382F40"],
  secondaryText: [p("black"), p("black"), p("white"), p("white"), p("white")]
};

export const Range = css`
  &[type="range"] {
    -webkit-appearance: none;
    margin: 18px 0;
    width: 100%;
    &:focus {
      outline: none;
    }
    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 8px;
      cursor: pointer;
      animate: 0.2s;
      border-radius: 8px;
      background: ${p("primary", 1)};
    }
    &::-webkit-slider-thumb {
      height: 16px;
      width: 16px;
      border-radius: 16px;
      background: ${p("primary", 5)};
      cursor: pointer;
      margin-top: -4px;
      -webkit-appearance: none;
    }
    &:focus::-webkit-slider-runnable-track {
      background: #367ebd;
    }
    &::-moz-range-track {
      width: 100%;
      height: 8.4px;
      cursor: pointer;
      animate: 0.2s;
      box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
      background: #3071a9;
      border-radius: 1.3px;
      border: 0.2px solid #010101;
    }
    &::-moz-range-thumb {
      box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
      border: 1px solid #000000;
      height: 36px;
      width: 16px;
      border-radius: 3px;
      background: #ffffff;
      cursor: pointer;
    }
    &::-ms-track {
      width: 100%;
      height: 8.4px;
      cursor: pointer;
      animate: 0.2s;
      background: transparent;
      border-color: transparent;
      border-width: 16px 0;
      color: transparent;
    }
    &::-ms-fill-lower {
      background: #2a6495;
      border: 0.2px solid #010101;
      border-radius: 2.6px;
      box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    }
    &::-ms-fill-upper {
      background: #3071a9;
      border: 0.2px solid #010101;
      border-radius: 2.6px;
      box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    }
    &::-ms-thumb {
      box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
      border: 1px solid #000000;
      height: 36px;
      width: 16px;
      border-radius: 3px;
      background: #ffffff;
      cursor: pointer;
    }
    &:focus::-ms-fill-lower {
      background: #3071a9;
    }
    &:focus::-ms-fill-upper {
      background: #367ebd;
    }
  }
`;

export default {
  palette,
  Range
};
