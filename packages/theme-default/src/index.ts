import Elements from "./elements";

const white = "#FFFDFD";
const black = "#2B2B2B";

const palette = {
  white,
  whiteText: black,
  black,
  blackText: white,
  grayScale: ["#FFFFFB", "#E5E5E2", "#BFBFBC", "#7F7F7E", "#40403F"],
  grayScaleText: [black, black, black, white, white],
  primary: ["#3CFFB5", "#36E5A3", "#2DBF88", "#1E7F5A", "#0F402D"],
  primaryText: [black, black, white, white, white],
  secondary: ["#DFBBFF", "#C9A8E5", "#A78CBF", "#705D7F", "#382F40"],
  secondaryText: [black, black, white, white, white]
};

const spacing = [".3rem", ".5rem", ".8rem"];

const padding = {
  top: spacing[1],
  right: spacing[1],
  bottom: spacing[1],
  left: spacing[1]
};

const breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1200px"
};

const border = {
  radius: "3px"
};

export default {
  palette,
  padding,
  spacing,
  breakpoints,
  border,
  ...Elements
};
