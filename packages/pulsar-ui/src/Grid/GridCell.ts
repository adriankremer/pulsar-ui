import { createComponent } from "../utils/createComponent";
import { useProps } from "../System/useProps";

export function useGridCell({ ...options }) {
  const htmlProps = useProps("useButton", options);

  return htmlProps;
}

export const GridCell = createComponent({
  as: "div",
  useHook: useGridCell
});
