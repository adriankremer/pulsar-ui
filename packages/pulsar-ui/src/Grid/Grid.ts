import { createComponent } from "../utils/createComponent";
import { useProps } from "../System/useProps";

export function useGrid({ ...options }) {
  let htmlProps = useProps("useButton", options);

  htmlProps = {
    ...htmlProps,
    ...{
      style: {
        display: "grid",
        gridGap: "15px 20px",
        gridTemplateColumns: "repeat(12, 1fr)"
      }
    }
  };

  return htmlProps;
}

export const Grid = createComponent({
  as: "div",
  useHook: useGrid
});
