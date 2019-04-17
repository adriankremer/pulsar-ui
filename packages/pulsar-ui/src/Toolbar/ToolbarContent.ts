import { createComponent } from "../utils/createComponent";
import { useProps } from "../System/useProps";
import { BoxProps, BoxOptions } from "../Box";

export type ToolbarContentOptions = BoxOptions;
export type ToolbarContentProps = BoxProps & {
  position?: "start" | "center" | "end";
};

export function useToolbarContent(
  { ...options }: ToolbarContentOptions,
  htmlProps: ToolbarContentProps
) {
  htmlProps = useProps("useToolbarContent", options, htmlProps);

  return htmlProps;
}

export const ToolbarContent = createComponent({
  as: "div",
  useHook: useToolbarContent
});
