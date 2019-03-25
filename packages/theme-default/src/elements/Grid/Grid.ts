import { css } from "@pulsar-ui/core/styled";

export const Cell = props => css`
  grid-column-end: span ${props.width || 1};
  grid-row-end: span ${props.height || 1};
`;

const Grid = props => css`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  ${props.fill &&
    css`
      grid-template-columns: repeat(auto-fill, ${props.fill});
    `}
`;

export default Grid;
