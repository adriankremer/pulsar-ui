import use from "reuse";
import { theme } from "styled-tools";
import Box, { BoxProps } from "../Box";
import styled from "../styled";

export interface ToolbarItemProps extends BoxProps {}

const ToolbarItem = styled(Box)<ToolbarItemProps>`
  ${theme("ToolbarItem")}
`;

export default use(ToolbarItem, "div");
