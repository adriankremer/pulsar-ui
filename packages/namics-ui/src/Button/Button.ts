import use from "reuse";
import styled from "../styled";

import Box, { BoxProps } from "../Box";

export interface IButtonProps extends BoxProps {
  blub?: string;
}

const ButtonComponent = styled(Box)<IButtonProps>`
  background-color: ${props => props.theme.colors.main[500]};
`;

ButtonComponent.defaultProps = {
  theme: {
    colors: { main: { "500": "cornflowerblue" } }
  }
};

/** @component */
export default use(ButtonComponent, "button");
