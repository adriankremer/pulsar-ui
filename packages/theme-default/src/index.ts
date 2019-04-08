import Elements from "./elements";

const white = "#FFFFFF";
const black = "#2B2B2B";

const palette = {
  white,
  whiteText: black,
  black,
  blackText: white,
  grayScale: ["#FFFFFB", "#E5E5E2", "#BFBFBC", "#7F7F7E", "#40403F"],
  grayScaleText: [black, black, black, white, white],
  primary: ["#00E7FF", "#2FD1FF", "#00A1FF", "#007FFF", "#0057AD"],
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

const boxShadow = `
  0px 1px 3px 0px rgba(0,0,0,0.2),
  0px 1px 1px 0px rgba(0,0,0,0.14),
  0px 2px 1px -1px rgba(0,0,0,0.12)
`;

export default {
  palette,
  padding,
  spacing,
  boxShadow,
  breakpoints,
  border,
  ...Elements
};
