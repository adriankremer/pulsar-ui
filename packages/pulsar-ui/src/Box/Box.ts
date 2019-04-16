import React from "react";
import { createComponent } from "../utils/createComponent";
import { useProps } from "../System/useProps";

export type BoxOptions = {
  system?: {};
};

export type BoxProps = React.HTMLAttributes<any>;

export function useBox({ ...options }, htmlProps: BoxProps) {
  htmlProps = useProps("useBox", options, htmlProps);
  return htmlProps;
}

export const Box = createComponent({
  as: "div",
  useHook: useBox
});
