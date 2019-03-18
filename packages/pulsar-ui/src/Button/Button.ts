import use from "reuse";
import styled from "../styled";
import Box, { BoxProps } from "../Box";

export interface IButtonProps extends BoxProps {
  blub?: string;
}

const ButtonComponent = styled(Box)<IButtonProps>(props => props.theme.Button);

ButtonComponent.defaultProps = {
  theme: {
    colors: { main: { "500": "cornflowerblue" } }
  }
};

/** @component */
export default use(ButtonComponent, "button");
