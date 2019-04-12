import React from "react";
import { As } from "./types";
import { useCreateElement } from "./useCreateElement";

type Hook<O> = {
  (
    options?: O,
    props?: React.HTMLAttributes<any> & React.RefAttributes<any>
  ): typeof props;
};

type Options<T extends As, O> = {
  as: T;
  useHook: Hook<O>;
};

export function createComponent<T extends As, O>({
  as: type,
  useHook
}: Options<T, O>) {
  const component = ({ as = type, ...props }, ref: React.Ref<any>) => {
    if (useHook) {
      const elementProps = useHook(undefined, props);
      console.log(elementProps);
      return useCreateElement(as, elementProps);
    }
    return useCreateElement(as, props);
  };

  return React.forwardRef(component);
}
