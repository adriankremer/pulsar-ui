import { createComponent } from "../utils/createComponent";
import { useProps } from "../System/useProps";
import { useOptions } from "../System/useOptions";

export type AvatarProps = React.ImgHTMLAttributes<any>;

export function useAvatar({ ...options }, htmlProps: AvatarProps) {
  options = useOptions("useAvatar", options, htmlProps);
  htmlProps = useProps("useAvatar", options, htmlProps);
  return htmlProps;
}

export const Avatar = createComponent({
  as: "img",
  useHook: useAvatar
});
