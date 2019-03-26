import use from "reuse";
import { theme, prop, ifProp } from "styled-tools";
import Box, { BoxProps } from "../Box";
import styled, { css } from "../styled";

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

  @media screen and (min-width: ${theme("breakpoints.sm", "480px")}) {
    ${ifProp("sm", `grid-column-end: span ${prop("sm")};`)}
  }
  @media screen and (min-width: ${theme("breakpoints.md", "768px")}) {
    ${ifProp("md", `grid-column-end: span ${prop("md")};`)}
  }
  @media screen and (min-width: ${theme("breakpoints.lg", "1024px")}) {
    ${ifProp("lg", `grid-column-end: span ${prop("lg")};`)}
  }
  @media screen and (min-width: ${theme("breakpoints.xl", "1200px")}) {
    ${ifProp("xl", `grid-column-end: span ${prop("xl")};`)}
  }
  ${theme("GridCell")}
`;

export default use(GridCell, "div");
