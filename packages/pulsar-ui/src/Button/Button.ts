import use from "reuse";
import { theme } from "styled-tools";
import styled from "../styled";
import Box, { BoxProps } from "../Box";

export interface IButtonProps extends BoxProps {}

const Button = styled(Box)<IButtonProps>`
  ${theme("Button")}
`;

export default use(Button, "button");
