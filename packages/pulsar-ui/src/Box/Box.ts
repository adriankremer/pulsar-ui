import { createComponent } from "../utils/createComponent";
import { useProps } from "../System/useProps";

export function useBox({ ...options }) {
  const htmlProps = useProps("useButton", options);
  return htmlProps;
}

export const Box = createComponent({
  as: "button",
  useHook: useBox
});
