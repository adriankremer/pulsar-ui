import * as React from "react";
import { As } from "./types";

export const useCreateElement = <T extends As>(
  type: T,
  props: any,
  children: React.ReactNode = props.children
): JSX.Element => {
  return React.createElement(type, props, children);
};
