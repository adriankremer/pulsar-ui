import { palette as p } from "styled-tools";
import Elements from "./elements";

const palette = {
  white: "#FFFDFD",
  whiteText: p("black"),
  black: "#2B2B2B",
  blackText: p("white"),
  grayScale: ["#FFFFFB", "#E5E5E2", "#BFBFBC", "#7F7F7E", "#40403F"],
  grayScaleText: [p("black"), p("black"), p("black"), p("white"), p("white")],
  primary: ["#3CFFB5", "#36E5A3", "#2DBF88", "#1E7F5A", "#0F402D"],
  primaryText: [p("black"), p("black"), p("white"), p("white"), p("white")],
  secondary: ["#DFBBFF", "#C9A8E5", "#A78CBF", "#705D7F", "#382F40"],
  secondaryText: [p("black"), p("black"), p("white"), p("white"), p("white")]
};

const padding = {
  top: ".5rem",
  right: ".5rem",
  bottom: ".5rem",
  left: ".5rem"
};

export default {
  palette,
  padding,
  ...Elements
};
