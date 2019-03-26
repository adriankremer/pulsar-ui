import { css } from "@pulsar-ui/core";
import { getCSSValue } from "../../utils/cssobjects";

const Card = props => css`
  padding: ${getCSSValue(props.theme.padding)};
  border-radius: ${props.theme.border.radius};
  background-color: ${props.theme.palette.white};
  box-shadow: ${props.theme.boxShadow};
`;

export default Card;
