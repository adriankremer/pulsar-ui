import { createComponent } from "../utils/createComponent";
import { useProps } from "../System/useProps";
import { BoxOptions, BoxProps } from "../Box";

export type GridCellOptions = BoxOptions;
export type GridCellProps = BoxProps;

export function useGridCell(
  { ...options }: GridCellOptions,
  htmlProps: GridCellProps
) {
  htmlProps = useProps("useGridCell", options, htmlProps);
  return htmlProps;
}

export const GridCell = createComponent({
  as: "div",
  useHook: useGridCell
});
