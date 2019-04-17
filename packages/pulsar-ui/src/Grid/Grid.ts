import { createComponent } from "../utils/createComponent";
import { useProps } from "../System/useProps";
import { BoxProps, BoxOptions } from "../Box";

export type GridOptions = BoxOptions;
export type GridProps = BoxProps;

export function useGrid({ ...options }: GridOptions, htmlProps: GridProps) {
  htmlProps = useProps("useGrid", options, htmlProps);
  return htmlProps;
}

export const Grid = createComponent({
  as: "div",
  useHook: useGrid
});
