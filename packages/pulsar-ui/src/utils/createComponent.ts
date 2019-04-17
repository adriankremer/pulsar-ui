import React from "react";
import { As } from "./types";
import { useCreateElement as defaultUseCreateElement } from "./useCreateElement";

type Hook<O> = {
  (
    options?: O,
    props?: React.HTMLAttributes<any> & React.RefAttributes<any>
  ): typeof props;
};

type Options<T extends As, O> = {
  as: T;
  useHook?: Hook<O>;
  keys?: any;
  useCreateElement?: typeof defaultUseCreateElement;
};

export function createComponent<T extends As, O>({
  as: type,
  useHook,
  useCreateElement = defaultUseCreateElement
}: Options<T, O>) {
  const component = ({ as = type, ...props }, ref: React.Ref<any>) => {
    if (useHook) {
      const { system } = props;
      const options: any = {
        system
      };
      const elementProps = useHook(options, { ref, ...props });
      return useCreateElement(as, elementProps);
    }
    return useCreateElement(as, props);
  };

  return React.forwardRef(component);
}
