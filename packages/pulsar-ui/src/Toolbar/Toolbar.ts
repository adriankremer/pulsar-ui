import { createComponent } from "../utils/createComponent";
import { useProps } from "../System/useProps";
import { BoxProps, BoxOptions } from "../Box";

export type ToolbarOptions = BoxOptions;

export type ToolbarProps = BoxProps;

export function useToolbar(
  { ...options }: ToolbarOptions,
  htmlProps: ToolbarProps
) {
  htmlProps = useProps("useToolbar", options, htmlProps);
  return htmlProps;
}

export const Toolbar = createComponent({
  as: "div",
  useHook: useToolbar
});
