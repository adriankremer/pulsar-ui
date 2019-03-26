import use from "reuse";
import Box, { BoxProps } from "../Box";
import styled from "../styled";

export interface IGridProps extends BoxProps {
  fill?: string;
}

const Grid = styled(Box)<IGridProps>`
  display: grid;
  /* @todo: we need utils for this.. */
  grid-gap: ${props =>
    (props.theme.spacing && props.theme.spacing[1]) || ".5rem"};
  grid-template-columns: repeat(12, 1fr);
  ${props => props.theme.Grid}
`;

export default use(Grid, "div");
