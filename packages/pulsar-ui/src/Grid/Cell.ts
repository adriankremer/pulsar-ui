import use from "reuse";
import Box, { BoxProps } from "../Box";
import styled from "../styled";

interface CellProps extends BoxProps {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  height: number;
}

const Cell = styled(Box)<CellProps>(props => props.theme.Cell);

export default use(Cell, "div");
