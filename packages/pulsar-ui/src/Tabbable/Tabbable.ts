import React from "react";
import { useProps } from "../System";
import { useBox, BoxProps, BoxOptions } from "../Box";
import { createComponent } from "../utils/createComponent";

export type TabbableOptions = BoxOptions;

export type TabbableProps = BoxProps & {
  disabled?: boolean;
};

export function useTabbable(
  { ...options },
  { disabled, tabIndex = 0, ...htmlProps }: TabbableProps
) {
  const trulyDisabled = disabled && !tabIndex;

  htmlProps = {
    ...{ disabled: trulyDisabled, tabIndex: !trulyDisabled && tabIndex },
    ...htmlProps
  };

  htmlProps = useProps("useTabbable", options, htmlProps);
  htmlProps = useBox(options, htmlProps);
  return htmlProps;
}

export const Tabbable = createComponent({
  as: "div",
  useHook: useTabbable
});
