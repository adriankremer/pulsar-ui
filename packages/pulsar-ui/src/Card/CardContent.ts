import { createComponent } from "../utils/createComponent";
import { useProps } from "../System/useProps";
import { useOptions } from "../System/useOptions";
import { useBox } from "../Box";

export type CardContentProps = React.HTMLAttributes<any>;

export function useCardContent({ ...options }, htmlProps: CardContentProps) {
  options = useOptions("useCardContent", options, htmlProps);
  htmlProps = useProps("useCardContent", options, htmlProps);
  htmlProps = useBox(options, htmlProps);
  return htmlProps;
}

export const CardContent = createComponent({
  as: "div",
  useHook: useCardContent
});
