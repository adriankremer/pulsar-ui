import use from "reuse";
import { theme } from "styled-tools";
import styled from "../styled";
import Box, { BoxProps } from "../Box";

export interface IRangeProps extends BoxProps {}

const Range = styled(Box)<IRangeProps>`
  ${theme("Range")}
`;

export default use(Range, "input");
