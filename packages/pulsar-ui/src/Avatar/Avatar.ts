import { createComponent } from "../utils/createComponent";
import { useProps } from "../System/useProps";

export function useAvatar({ ...options }) {
  const htmlProps = useProps("useButton", options);
  return htmlProps;
}

export const Avatar = createComponent({
  as: "img",
  useHook: useAvatar
});
