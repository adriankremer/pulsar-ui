import use from "reuse";
import styled from "../styled";
import Box, { BoxProps } from "../Box";

export interface IAvatarProps extends BoxProps {
  src: string;
}

const Avatar = styled(Box)<IAvatarProps>(props => props.theme.Avatar);

export default use(Avatar, "img");
