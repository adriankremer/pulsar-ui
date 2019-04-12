import { createComponent } from "../utils/createComponent";
import { useProps } from "../System/useProps";

export function useCard({ ...options }) {
  const htmlProps = useProps("useButton", options);
  return htmlProps;
}

export const Card = createComponent({
  as: "div",
  useHook: useCard
});
