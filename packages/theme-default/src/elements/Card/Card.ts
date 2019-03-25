import { css } from "@pulsar-ui/core/styled";
import { getCSSValue } from "../../utils/cssobjects";

const Card = props => css`
  padding: ${getCSSValue(props.theme.padding)};
  border-radius: ${props.theme.border.radius};
  background-color: ${props.theme.palette.grayScale[1]};
`;

export default Card;
