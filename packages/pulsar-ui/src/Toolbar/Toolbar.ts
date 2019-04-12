import { createComponent } from "../utils/createComponent";
import { useProps } from "../System/useProps";

export function useToolbar({ ...options }) {
  let htmlProps = useProps("useButton", options);

  htmlProps = {
    ...htmlProps,
    ...{
      style: {
        display: "grid",
        gridGap: "15px 20px",
        gridTemplate: `"start center end"/ 1fr auto 1fr`,
        padding: ".5rem"
      }
    }
  };

  return htmlProps;
}

export const Toolbar = createComponent({
  as: "div",
  useHook: useToolbar
});
