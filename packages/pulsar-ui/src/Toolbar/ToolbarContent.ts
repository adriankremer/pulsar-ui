import use from "reuse";
import { prop } from "styled-tools";
import Box, { BoxProps } from "../Box";
import styled from "../styled";

export interface ToolbarContentProps extends BoxProps {
  position?: "start" | "center" | "end";
}

const ToolbarContent = styled(Box)<ToolbarContentProps>`
  display: grid;
  grid-area: ${prop("position")};
  justify-content: ${prop("position")};
  align-items: center;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  grid-gap: inherit;
`;

export default use(ToolbarContent, "div");
