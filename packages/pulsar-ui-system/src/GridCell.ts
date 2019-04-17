import { cx, css } from "emotion";
import { GridCellProps } from "@pulsar-ui/core";
import { PulsarBoxProps } from "./Box";
import { breakpoints } from "./utils/systemVariables";

export type PulsarGridCellProps = PulsarBoxProps & {
  system: {
    cellWidth?: number[];
    cellHeight?: number[];
  };
};

export function useGridCellProps(
  { system }: PulsarGridCellProps,
  { className, ...htmlProps }: GridCellProps
) {
  const { cellWidth = [], cellHeight = [] } = system;
  const initialWidth = cellWidth.shift();
  const initialheight = cellHeight.shift();
  const gridCell = css`
    grid-column-end: span ${initialWidth || "12"};
    grid-row-end: span ${initialheight || "1"};
    align-items: center;
    ${cellWidth.map(
      (column, index) => `
      @media screen and (min-width: ${breakpoints[index]}) {
        grid-column-end: span ${column};
      }
    `
    )}
  `;
  return { ...htmlProps, className: cx(gridCell, className) };
}
