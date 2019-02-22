import use from "reuse";
import styled from "../styled";
import Box, { BoxProps } from "../Box";

export interface IRangeProps extends BoxProps {}

const Range = styled(Box)<IRangeProps>`
  ${props => props.theme.range}
`;

export default use(Range, "input");
