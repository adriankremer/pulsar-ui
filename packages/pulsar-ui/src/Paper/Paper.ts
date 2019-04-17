import { createComponent } from "../utils/createComponent";
import { useProps } from "../System/useProps";
import { useOptions } from "../System/useOptions";

export type PaperProps = React.HTMLAttributes<any>;

export function usePaper({ ...options }, htmlProps: PaperProps) {
  options = useOptions("usePaper", options, htmlProps);
  htmlProps = useProps("usePaper", options, htmlProps);
  return htmlProps;
}

export const Paper = createComponent({
  as: "div",
  useHook: usePaper
});
