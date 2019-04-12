import { createComponent } from "../utils/createComponent";
import { useProps } from "../System/useProps";

export function useToolbarContent({ ...options }) {
  let htmlProps = useProps("useButton", options);

  htmlProps = {
    ...htmlProps,
    ...{
      style: {
        display: "grid",
        gridArea: "start",
        justifyContent: "start",
        alignItems: "center",
        gridAutoFlow: "column",
        gridAutoColumns: "min-content",
        gridGap: "inherit"
      }
    }
  };

  return htmlProps;
}

export const ToolbarContent = createComponent({
  as: "div",
  useHook: useToolbarContent
});
