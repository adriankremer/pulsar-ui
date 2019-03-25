import styled from "../styled";
import Box, { BoxProps } from "../Box";

interface CardProps extends BoxProps {}

const Card = styled(Box)<CardProps>(props => props.theme.Card);

export default Card;
