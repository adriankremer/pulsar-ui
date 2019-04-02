import use from "reuse";
import { theme, prop, ifProp } from "styled-tools";
import Box, { BoxProps } from "../Box";
import styled from "../styled";

export interface CellProps extends BoxProps {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  width?: number;
  height?: number;
}

const GridCell = styled(Box)<CellProps>`
  grid-column-end: span ${prop("width", "12")};
  grid-row-end: span ${prop("height", "1")};

  @media screen and (min-width: ${theme("breakpoints.sm", "768px")}) {
    grid-column-end: span ${ifProp("sm", prop("sm"), prop("width"))};
  }
  @media screen and (min-width: ${theme("breakpoints.md", "768px")}) {
    grid-column-end: span ${ifProp("md", prop("md"), prop("width"))};
  }
  @media screen and (min-width: ${theme("breakpoints.lg", "1024px")}) {
    grid-column-end: span ${ifProp("lg", prop("lg"), prop("width"))};
  }
  @media screen and (min-width: ${theme("breakpoints.xl", "1200px")}) {
    grid-column-end: span ${ifProp("xl", prop("xl"), prop("width"))};
  }
  ${theme("GridCell")}
`;

export default use(GridCell, "div");
