import use from "reuse";
import styled from "../styled";
import Box, { BoxProps } from "../Box";

export interface IInputProps extends BoxProps {}

const Input = styled(Box)<IInputProps>(props => props.theme.Input);

export default use(Input, "input");
