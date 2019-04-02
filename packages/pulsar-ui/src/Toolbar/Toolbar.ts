import use from "reuse";
import { prop } from "styled-tools";
import styled from "../styled";
import Box, { BoxProps } from "../Box";

export interface ToolbarProps extends BoxProps {
  gutter: string;
}

const Toolbar = styled(Box)<ToolbarProps>`
  display: grid;
  grid-gap: ${prop("gutter")};
  grid-template:
    "start center end"
    / 1fr auto 1fr;
  padding: ${prop("gutter")};
`;

export default use(Toolbar, "div");
