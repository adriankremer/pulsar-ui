import use from "reuse";
import Box, { BoxProps } from "../Box";
import styled from "../styled";

interface IGridProps extends BoxProps {
  fill: string;
}

const Grid = styled(Box)<IGridProps>(props => props.theme.Grid);

export default use(Grid, "div");
