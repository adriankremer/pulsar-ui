import { createComponent } from "../utils/createComponent";
import { useProps } from "../System/useProps";

export function useToolbarItem({ ...options }) {
  const htmlProps = useProps("useButton", options);

  return htmlProps;
}

export const ToolbarItem = createComponent({
  as: "div",
  useHook: useToolbarItem
});
