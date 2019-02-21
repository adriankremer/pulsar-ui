import React from "react";
import use from "reuse";
import styled from "../styled";

export type BoxProps = React.HTMLProps<any> & {
  use?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  children?: React.ReactNode;
  static?: boolean;
  absolute?: boolean;
  fixed?: boolean;
  relative?: boolean;
  sticky?: boolean;
  opaque?: boolean;
  palette?: string;
  tone?: number;
  elementRef?: React.Ref<any>;
};

const dedupeClassName = (className?: string) =>
  className &&
  className
    .split(" ")
    .filter((part, i, parts) => i === parts.indexOf(part))
    .join(" ");

function applyAllRefs<T = any>(...refs: Array<React.Ref<T> | undefined>) {
  const validRefs = refs.filter(Boolean);
  if (!validRefs.length) {
    return;
  }

  return (element: T) => {
    for (const value of validRefs) {
      if (typeof value === "object") {
        // @ts-ignore
        value.current = element;
      } else if (typeof value === "function") {
        value(element);
      }
    }
  };
}

const BoxComponent = React.forwardRef<HTMLElement, BoxProps>(
  ({ use: T, ...props }, ref) => {
    if (!T) {
      return null;
    }

    if (typeof T === "string") {
      const className = dedupeClassName(props.className);
      const allProps = Object.assign({}, props, { className }, {});

      return React.createElement(T, {
        ...allProps,
        ref: applyAllRefs(ref, props.elementRef)
      });
    }

    return React.createElement(T, {
      ...props,
      ref: applyAllRefs(ref, props.elementRef)
    });
  }
);

const Box = styled(BoxComponent)`
  margin: unset;
  padding: unset;
  border: unset;
  background: unset;
  font: unset;
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

export default use(Box, "div");
