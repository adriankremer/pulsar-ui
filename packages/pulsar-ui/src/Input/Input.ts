import { createComponent } from "../utils/createComponent";
import { useProps } from "../System/useProps";

export function useInput({ ...options }) {
  const htmlProps = useProps("useButton", options);

  return htmlProps;
}

export const Input = createComponent({
  as: "input",
  useHook: useInput
});
