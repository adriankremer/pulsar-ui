import { createComponent } from "../utils/createComponent";
import { useProps } from "../System/useProps";
import { useOptions } from "../System/useOptions";
import { useBox } from "../Box";
import { usePaper } from "../Paper";

export type CardProps = React.HTMLAttributes<any>;

export function useCard({ ...options }, htmlProps: CardProps) {
  options = useOptions("useCard", options, htmlProps);
  htmlProps = useProps("useCard", options, htmlProps);
  htmlProps = useBox(options, htmlProps);
  htmlProps = usePaper(options, htmlProps);
  return htmlProps;
}

export const Card = createComponent({
  as: "div",
  useHook: useCard
});
