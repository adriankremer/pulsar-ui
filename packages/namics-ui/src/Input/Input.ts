import use from "reuse";
import { theme } from "styled-tools";
import styled from "../styled";
import Box, { BoxProps } from "../Box";

export interface IInputProps extends BoxProps {}

const Input = styled(Box)<IInputProps>`
  ${theme("Input")}
`;

export default use(Input, "input");
