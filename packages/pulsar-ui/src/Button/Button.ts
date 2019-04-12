import { createComponent } from "../utils/createComponent";
import { useProps } from "../System/useProps";

type ButtonProps = React.ButtonHTMLAttributes<any>;

export function useButton({ ...options }, htmlProps: ButtonProps) {
  htmlProps = useProps("useButton", options, htmlProps);

  htmlProps = {
    ...htmlProps,
    ...{
      style: {
        backgroundColor: htmlProps.color
      }
    }
  };
  return htmlProps;
}

export const Button = createComponent({
  as: "button",
  useHook: useButton
});
