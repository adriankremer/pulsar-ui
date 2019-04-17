import { createComponent } from "../utils/createComponent";
import { useProps } from "../System/useProps";
import { BoxProps, BoxOptions } from "../Box";

export type ToolbarItemOptions = BoxOptions;
export type ToolbarItemProps = BoxProps;

export function useToolbarItem(
  { ...options }: ToolbarItemOptions,
  htmlProps: ToolbarItemProps
) {
  htmlProps = useProps("useToolbarItem", options, htmlProps);

  return htmlProps;
}

export const ToolbarItem = createComponent({
  as: "div",
  useHook: useToolbarItem
});
