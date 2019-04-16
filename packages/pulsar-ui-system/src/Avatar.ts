import { AvatarProps } from "@pulsar-ui/core";
import { css, cx } from "emotion";

export function useAvatarProps({ className, ...htmlProps }: AvatarProps) {
  const avatar = css`
    border-radius: 50%;
  `;

  return { ...htmlProps, className: cx(avatar, className) };
}
