import { createComponent } from "../utils/createComponent";
import { useProps } from "../System/useProps";

export type InputProps = React.InputHTMLAttributes<any>;

export function useInput({ ...options }, htmlProps: InputProps) {
  htmlProps = useProps("useInput", options, htmlProps);
  return htmlProps;
}

export const Input = createComponent({
  as: "input",
  useHook: useInput
});
